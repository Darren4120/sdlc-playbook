# Build playbook-data.js from extracted JSON
$json = Get-Content "excel_data.json" -Raw | ConvertFrom-Json
$grouped = $json | Group-Object Sheet, Section

$output = @"
// SDLC Playbook Data Structure  
// Generated from Lean Agile SDLC Excel Playbook
// Phases: Discovery, Build & Test, Continuous Deployment, Release on Demand

const playbookData = {
"@

$phaseMap = @{
    '1. Discovery' = @{ id = 'discovery'; title = '1. Discovery - Understanding & Aligning'; desc = 'The discovery phase is driven by the Lean Startup cycle. Focus on hypothesis-driven increments, rapid prototyping, and validated learning.' }
    '2. Build and Test' = @{ id = 'build-test'; title = '2. Build & Test - Iterative Development'; desc = 'Build quality in from the start. Development teams work in short iterations, applying TDD, continuous integration, and collaborative practices.' }
    '3. Continuous Deployment' = @{ id = 'cd'; title = '3. Continuous Deployment - Automated Pipeline'; desc = 'Automate the deployment pipeline to enable fast, reliable releases. Focus on infrastructure as code, automated testing, and continuous monitoring.' }
    '4. Release on Demand' = @{ id = 'rod'; title = '4. Release on Demand - Controlled Release'; desc = 'Decouple deployment from release. Use feature flags, canary releases, and data-driven decisions to release value safely and strategically.' }
}

$sheets = @('1. Discovery', '2. Build and Test', '3. Continuous Deployment', '4. Release on Demand')

foreach ($sheetName in $sheets) {
    $phase = $phaseMap[$sheetName]
    $phaseId = $phase.id
    
    $output += "`n    '$phaseId': {`n"
    $output += "        id: '$phaseId',`n"
    $output += "        title: '$($phase.title)',`n"
    $output += "        description: '$($phase.desc)',`n"
    $output += "        categories: [`n"
    
    $sectionsInPhase = $grouped | Where-Object { $_.Values[0] -eq $sheetName }
    $sectionCount = 0
    
    foreach ($section in $sectionsInPhase) {
        if ($sectionCount -gt 0) { $output += ",`n" }
        $sectionCount++
        
        $sectionName = $section.Values[1]
        $tasks = $section.Group
        
        # Escape single quotes
        $safeSectionName = $sectionName -replace "'", "\'"
        
        $output += "            {`n"
        $output += "                name: '$safeSectionName',`n"
        
        # Determine grouping strategy
        $tasksWithOutcomes = @($tasks | Where-Object { $_.HasOwnOutcome -eq "True" })
        $allHaveOutcomes = ($tasksWithOutcomes.Count -eq $tasks.Count)
        $firstHasOutcome = ($tasksWithOutcomes.Count -ge 1) -and ($tasksWithOutcomes[0].TaskNum -eq $tasks[0].TaskNum)
        
        # Check if section has outcome (from Excel)
        $sectionHasOutcome = ($tasks[0].SectionHasOutcome -eq "True")
        
        if ($allHaveOutcomes) {
            # Each task has its own outcome - display individually
            $output += "                tasks: [`n"
            for ($i = 0; $i -lt $tasks.Count; $i++) {
                if ($i -gt 0) { $output += ",`n" }
                $t = $tasks[$i]
                $safeTitle = $t.Task -replace "'", "\'" -replace "`n", " " -replace "`r", ""
                $safeRole = $t.Role -replace "'", "\'"
                $safeOutcome = $t.Outcome -replace "'", "\'" -replace "`n", " " -replace "`r", "" -replace '"', '\"'
                
                $output += "                    {`n"
                $output += "                        title: '$safeTitle',`n"
                $output += "                        responsible: '$safeRole',`n"
                $output += "                        outcome: '$safeOutcome'`n"
                $output += "                    }"
            }
            $output += "`n                ]`n"
        }
        elseif ($firstHasOutcome -or $sectionHasOutcome) {
            # Group tasks with shared outcome
            $sharedOutcome = if ($firstHasOutcome) { $tasks[0].Outcome } else { "" }
            $safeOutcome = $sharedOutcome -replace "'", "\'" -replace "`n", " " -replace "`r", "" -replace '"', '\"'
            
            $output += "                groupedOutcome: '$safeOutcome',`n"
            $output += "                tasks: [`n"
            for ($i = 0; $i -lt $tasks.Count; $i++) {
                if ($i -gt 0) { $output += ",`n" }
                $t = $tasks[$i]
                $safeTitle = $t.Task -replace "'", "\'" -replace "`n", " " -replace "`r", ""
                $safeRole = $t.Role -replace "'", "\'"
                
                $output += "                    {`n"
                $output += "                        title: '$safeTitle',`n"
                $output += "                        responsible: '$safeRole'`n"
                $output += "                    }"
            }
            $output += "`n                ]`n"
        }
        else {
            # No outcomes
            $output += "                tasks: [`n"
            for ($i = 0; $i -lt $tasks.Count; $i++) {
                if ($i -gt 0) { $output += ",`n" }
                $t = $tasks[$i]
                $safeTitle = $t.Task -replace "'", "\'" -replace "`n", " " -replace "`r", ""
                $safeRole = $t.Role -replace "'", "\'"
                
                $output += "                    {`n"
                $output += "                        title: '$safeTitle',`n"
                $output += "                        responsible: '$safeRole',`n"
                $output += "                        outcome: ''`n"
                $output += "                    }"
            }
            $output += "`n                ]`n"
        }
        
        $output += "            }"
    }
    
    $output += "`n        ]`n"
    $output += "    }"
    
    if ($sheetName -ne '4. Release on Demand') {
        $output += ","
    }
}

$output += @"

};

// Role Mapping for filtering
const roleMapping = {
    'product-owner': ['Product Owner', 'Product Manager', 'Product Strategy', 'Product Team'],
    'scrum-master': ['Scrum Master', 'Agile Coach', 'Scrum Team'],
    'tech-lead': ['Tech Lead', 'Solution Architect', 'Solution Architecture'],
    'developer': ['Developer', 'Development Team', 'Dev Team'],
    'qa-engineer': ['QA Engineer', 'Performance Engineer', 'QA'],
    'devops-engineer': ['DevOps Engineer', 'DevOps Team', 'Release Manager', 'DevOps'],
    'security-engineer': ['Security Engineer', 'Security Team'],
    'ux-designer': ['UX Designer', 'UX Researcher', 'UX Team'],
    'business-analyst': ['Business Analyst', 'Data Analyst', 'Business Owner'],
    'project-manager': ['Project Manager', 'Service Manager', 'Leadership', 'Executive Leadership', 'Leadership Team'],
    'all': []
};
"@

$output | Out-File -FilePath "website\playbook-data-NEW.js" -Encoding UTF8
Write-Host "Generated playbook-data-NEW.js" -ForegroundColor Green
Write-Host "Total sections processed: $sectionCount" -ForegroundColor Cyan
