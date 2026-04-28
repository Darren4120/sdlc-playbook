# Generate New Playbook Data from Excel with Task Grouping
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$workbook = $excel.Workbooks.Open("$PWD\SDLC_Playbook Checklist 2.xlsx")

$phases = @{
    '1. Discovery' = 'discovery'
    '2. Build and Test' = 'build-test'
    '3. Continuous Deployment' = 'cd'
    '4. Release on Demand' = 'rod'
}

$output = @"
// SDLC Playbook Data Structure  
// Generated from Lean Agile SDLC Excel Playbook
// Phases: Discovery, Build & Test, Continuous Deployment, Release on Demand

const playbookData = {
"@

foreach ($sheetName in $phases.Keys) {
    $phaseId = $phases[$sheetName]
    $worksheet = $workbook.Sheets.Item($sheetName)
    
    $phaseTitle = switch ($phaseId) {
        'discovery' { '1. Discovery - Understanding & Aligning' }
        'build-test' { '2. Build & Test - Iterative Development' }
        'cd' { '3. Continuous Deployment - Automated Pipeline' }
        'rod' { '4. Release on Demand - Controlled Release' }
    }
    
    $phaseDesc = switch ($phaseId) {
        'discovery' { 'The discovery phase is driven by the Lean Startup cycle. Focus on hypothesis-driven increments, rapid prototyping, and validated learning.' }
        'build-test' { 'Build quality in from the start. Development teams work in short iterations, applying TDD, continuous integration, and collaborative practices.' }
        'cd' { 'Automate the deployment pipeline to enable fast, reliable releases. Focus on infrastructure as code, automated testing, and continuous monitoring.' }
        'rod' { 'Decouple deployment from release. Use feature flags, canary releases, and data-driven decisions to release value safely and strategically.' }
    }
    
    $output += @"

    '$phaseId': {
        id: '$phaseId',
        title: '$phaseTitle',
        description: '$phaseDesc',
        categories: [
"@
    
    # Parse all rows
    $categories = @()
    $currentCategory = $null
    $tasksInCategory = @()
    
    for ($row = 2; $row -le 60; $row++) {
        $taskNum = $worksheet.Cells.Item($row, 1).Text
        $taskName = $worksheet.Cells.Item($row, 2).Text.Trim()
        $role = $worksheet.Cells.Item($row, 3).Text
        $outcome = $worksheet.Cells.Item($row, 4).Text
        
        if (-not $taskName) { continue }
        
        # Section header (no task number)
        if (-not $taskNum) {
            # Save previous category
            if ($currentCategory) {
                $currentCategory.tasks = $tasksInCategory
                $categories += $currentCategory
            }
            
            # Start new category
            $currentCategory = @{
                name = $taskName
                role = $role
                outcome = $outcome
            }
            $tasksInCategory = @()
        }
        # Task row
        else {
            $effectiveRole = if ($role) { $role } else { $currentCategory.role }
            $tasksInCategory += @{
                num = $taskNum
                title = $taskName
                role = $effectiveRole
                outcome = $outcome
            }
        }
    }
    
    # Save last category
    if ($currentCategory) {
        $currentCategory.tasks = $tasksInCategory
        $categories += $currentCategory
    }
    
    # Generate output with grouping logic
    $firstCat = $true
    foreach ($cat in $categories) {
        if (-not $firstCat) { $output += "," }
        $firstCat = $false
        
        $catName = $cat.name -replace "'", "\'"
        $output += @"

            {
                name: '$catName',
"@
        
        # Determine grouping strategy
        $tasksWithOutcomes = @($cat.tasks | Where-Object { $_.outcome })
        $allTasksHaveOutcome = ($tasksWithOutcomes.Count -eq $cat.tasks.Count) -and ($cat.tasks.Count -gt 0)
        $oneTaskHasOutcome = ($tasksWithOutcomes.Count -eq 1)
        $sectionHasOutcome = $cat.outcome -and $cat.outcome.Length -gt 0
        
        if ($allTasksHaveOutcomes) {
            # Each task has own outcome - display individually
            $output += @"

                tasks: [
"@
            $firstTask = $true
            foreach ($task in $cat.tasks) {
                if (-not $firstTask) { $output += "," }
                $firstTask = $false
                $taskTitle = $task.title -replace "'", "\'"
                $taskRole = $task.role -replace "'", "\'"
                $taskOutcome = $task.outcome -replace "'", "\'" -replace "`n", " " -replace "`r", ""
                $output += @"

                    {
                        title: '$taskTitle',
                        responsible: '$taskRole',
                        outcome: '$taskOutcome'
                    }
"@
            }
            $output += @"

                ]
"@
        }
        elseif ($sectionHasOutcome -or $oneTaskHasOutcome) {
            # Group all tasks with shared outcome
            $sharedOutcome = if ($sectionHasOutcome) { $cat.outcome } else { $tasksWithOutcomes[0].outcome }
            $sharedOutcome = $sharedOutcome -replace "'", "\'" -replace "`n", " " -replace "`r", ""
            
            $output += @"

                groupedOutcome: '$sharedOutcome',
                tasks: [
"@
            $firstTask = $true
            foreach ($task in $cat.tasks) {
                if (-not $firstTask) { $output += "," }
                $firstTask = $false
                $taskTitle = $task.title -replace "'", "\'"
                $taskRole = $task.role -replace "'", "\'"
                $output += @"

                    {
                        title: '$taskTitle',
                        responsible: '$taskRole'
                    }
"@
            }
            $output += @"

                ]
"@
        }
        else {
            # No outcomes - display tasks without outcomes
            $output += @"

                tasks: [
"@
            $firstTask = $true
            foreach ($task in $cat.tasks) {
                if (-not $firstTask) { $output += "," }
                $firstTask = $false
                $taskTitle = $task.title -replace "'", "\'"
                $taskRole = $task.role -replace "'", "\'"
                $output += @"

                    {
                        title: '$taskTitle',
                        responsible: '$taskRole',
                        outcome: ''
                    }
"@
            }
            $output += @"

                ]
"@
        }
        
        $output += @"

            }
"@
    }
    
    $output += @"

        ]
    }
"@
    if ($phaseId -ne 'rod') {
        $output += ","
    }
}

$output += @"

};

// Role Mapping for filtering
const roleMapping = {
    'product-owner': ['Product Owner', 'Product Manager', 'Product Strategy', 'Product Team'],
    'scrum-master': ['Scrum Master', 'Agile Coach', 'Scrum Team'],
    'tech-lead': ['Tech Lead', 'Solution Architect'],
    'developer': ['Developer', 'Development Team'],
    'qa-engineer': ['QA Engineer', 'Performance Engineer'],
    'devops-engineer': ['DevOps Engineer', 'DevOps Team', 'Release Manager'],
    'security-engineer': ['Security Engineer'],
    'ux-designer': ['UX Designer', 'UX Researcher', 'UX Team'],
    'business-analyst': ['Business Analyst', 'Data Analyst', 'Business Owner'],
    'project-manager': ['Project Manager', 'Service Manager', 'Leadership', 'Executive Leadership', 'Leadership Team'],
    'all': []
};
"@

$workbook.Close($false)
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null

# Save output
$output | Out-File -FilePath "website\playbook-data-NEW.js" -Encoding UTF8
Write-Host "Generated new playbook-data-NEW.js" -ForegroundColor Green
