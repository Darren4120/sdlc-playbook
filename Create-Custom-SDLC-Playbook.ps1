# Custom SDLC Playbook Excel Generator - Based on User's Lean-Agile Framework
# Creates a professional checklist aligned with Discovery → Build/Test → CD → RoD

$ErrorActionPreference = "Stop"

Write-Host "Creating Custom SDLC Playbook Excel file..." -ForegroundColor Cyan

# Create Excel Application
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

# Create new workbook
$workbook = $excel.Workbooks.Add()

# Remove default sheets except one
while ($workbook.Worksheets.Count -gt 1) {
    $workbook.Worksheets.Item($workbook.Worksheets.Count).Delete()
}

# Define colors
$headerColor = 2039583  # Dark Blue
$phaseColor = 4485316   # Medium Blue
$subheaderColor = 15132914  # Light Blue
$grayColor = 15132390   # Light Gray

# Custom SDLC Phase Data based on user's playbook
$sdlcPhases = @{
    "1. Discovery" = @(
        @{
            Category = "1.1 The Learning Cycle - Lean Startup"
            Tasks = @(
                @("Define hypothesis-driven increments", "Product Owner", "Hypothesis Document", "High"),
                @("Build prototypes/MVPs", "Development Team", "MVP/Prototype", "High"),
                @("Measure user behavior and feedback", "Product Manager", "Metrics Dashboard", "High"),
                @("Learn and validate insights", "Product Owner", "Learning Report", "High"),
                @("Decide: Persevere or Pivot", "Leadership", "Decision Document", "High")
            )
        },
        @{
            Category = "1.2 The North Star - Business Goal and Vision"
            Tasks = @(
                @("Define business-level strategic goal", "Executive Leadership", "Strategic Goal Doc", "High"),
                @("Establish product vision", "Product Owner", "Vision Statement", "High"),
                @("Align vision with business strategy", "Leadership Team", "Alignment Document", "High")
            )
        },
        @{
            Category = "1.3 The Epics"
            Tasks = @(
                @("Classify epics (Functional/Non-Functional)", "Product Owner", "Epic Classification", "High"),
                @("Write epic summary and description", "Product Owner", "Epic Documents", "High"),
                @("Define business outcomes", "Product Owner", "Outcomes Document", "High"),
                @("Establish acceptance criteria", "Product Owner", "Acceptance Criteria", "High"),
                @("Identify leading indicators", "Product Manager", "KPI/Metrics List", "High"),
                @("Document non-functional requirements", "Solution Architect", "NFR Document", "High")
            )
        },
        @{
            Category = "1.4 Ideation - Design Thinking"
            Tasks = @(
                @("Conduct Gemba/Interviews", "UX Researcher", "Interview Notes", "High"),
                @("Create user personas", "UX Designer", "Persona Documents", "High"),
                @("Build empathy maps", "UX Team", "Empathy Maps", "High"),
                @("Map customer journey", "UX Designer", "Journey Maps", "High"),
                @("Define features", "Product Owner", "Feature List", "High"),
                @("Design architecture", "Solution Architect", "Architecture Doc", "High"),
                @("Document customer problem", "Product Manager", "Problem Statement", "High"),
                @("Define business impact", "Product Owner", "Impact Analysis", "High")
            )
        },
        @{
            Category = "1.5 Setup Portfolio Kanban"
            Tasks = @(
                @("Configure portfolio Kanban board", "Agile Coach", "Kanban Board", "High"),
                @("Define work item types", "Agile Coach", "Work Item Definitions", "Medium"),
                @("Establish WIP limits", "Agile Coach", "WIP Policies", "Medium")
            )
        },
        @{
            Category = "1.6 Roadmap and Release Planning"
            Tasks = @(
                @("Align features across timeline", "Product Manager", "Timeline View", "High"),
                @("Calculate WSJF prioritization", "Product Owner", "WSJF Scores", "High"),
                @("Assess business value", "Product Owner", "Value Assessment", "High"),
                @("Identify risks and dependencies", "Tech Lead", "Risk/Dependency Log", "High"),
                @("Create PI/Quarterly roadmap", "Product Manager", "PI Roadmap", "High"),
                @("Define 2-3 year solution roadmap", "Product Strategy", "Long-term Roadmap", "Medium")
            )
        },
        @{
            Category = "1.7 Product Goals - MVP vs MMP"
            Tasks = @(
                @("Define MVP for learning/validation", "Product Owner", "MVP Scope", "High"),
                @("Define MMP for market-ready value", "Product Owner", "MMP Scope", "High"),
                @("Align product goals with roadmap", "Product Manager", "Goal Alignment Doc", "High")
            )
        }
    )
    "2. Build and Test" = @(
        @{
            Category = "Features and Stories Definition"
            Tasks = @(
                @("Write feature summary", "Product Owner", "Feature Document", "High"),
                @("Document feature description", "Product Owner", "Feature Details", "High"),
                @("Define benefit hypothesis", "Product Owner", "Hypothesis Statement", "High"),
                @("Establish feature acceptance criteria", "Product Owner", "Acceptance Criteria", "High"),
                @("Write user story summary", "Product Owner", "User Stories", "High"),
                @("Define story acceptance criteria", "Product Owner", "Story Criteria", "High")
            )
        },
        @{
            Category = "2.1 Development Excellence - Ways of Working"
            Tasks = @(
                @("Conduct backlog refinement", "Scrum Master", "Refined Backlog", "High"),
                @("Apply UI/UX best practices", "UX Designer", "UI/UX Guidelines", "Medium"),
                @("Perform sprint/iteration planning", "Scrum Team", "Sprint Plan", "High"),
                @("Write unit test cases (TDD)", "Developer", "Unit Tests", "High"),
                @("Create technical blueprint", "Tech Lead", "Technical Design", "High"),
                @("Implement code", "Developer", "Source Code", "High"),
                @("Create pull request", "Developer", "PR", "High"),
                @("Conduct code review", "Tech Lead", "Review Comments", "High"),
                @("Commit to version control", "Developer", "Git Commits", "High"),
                @("Execute testing", "QA Engineer", "Test Results", "High"),
                @("Deploy to Dev environment", "DevOps Engineer", "Dev Deployment", "High")
            )
        },
        @{
            Category = "2.2 CI Pipeline Mechanics"
            Tasks = @(
                @("Configure version control (GitHub/GitLab)", "DevOps Engineer", "Repo Setup", "High"),
                @("Setup automated build triggers", "DevOps Engineer", "Build Configuration", "High"),
                @("Configure build tools (Maven/Gradle)", "DevOps Engineer", "Build Scripts", "High"),
                @("Setup CI tools (Jenkins/GitHub Actions)", "DevOps Engineer", "CI Pipeline", "High"),
                @("Implement unit test execution", "DevOps Engineer", "Test Automation", "High"),
                @("Configure static code analysis", "DevOps Engineer", "Code Quality Gates", "High"),
                @("Setup artifact creation/storage", "DevOps Engineer", "Artifact Repository", "High")
            )
        },
        @{
            Category = "2.3 Security as Non-Functional Requirement"
            Tasks = @(
                @("Implement SAST (Static Application Security Testing)", "Security Engineer", "SAST Configuration", "High"),
                @("Configure dependency scanning", "Security Engineer", "Dependency Checks", "High"),
                @("Setup secrets management", "Security Engineer", "Vault Configuration", "High"),
                @("Verify no critical vulnerabilities (CVSS > 7)", "Security Engineer", "Security Report", "High"),
                @("Ensure no hardcoded secrets", "Security Engineer", "Secret Scan Report", "High"),
                @("Validate compliance checks", "Security Engineer", "Compliance Report", "High")
            )
        }
    )
    "3. Continuous Deployment" = @(
        @{
            Category = "3.1 Deployment Flow"
            Tasks = @(
                @("Setup Infrastructure as Code (IaC)", "DevOps Engineer", "IaC Scripts", "High"),
                @("Configure Dev environment", "DevOps Engineer", "Dev Environment", "High"),
                @("Configure QA environment", "DevOps Engineer", "QA Environment", "High"),
                @("Configure Staging environment", "DevOps Engineer", "Staging Environment", "High"),
                @("Configure Production environment", "DevOps Engineer", "Prod Environment", "High"),
                @("Implement automated promotion pipeline", "DevOps Engineer", "Promotion Pipeline", "High")
            )
        },
        @{
            Category = "3.2 Advanced Validation (Non-Functional Testing)"
            Tasks = @(
                @("Execute performance testing", "Performance Engineer", "Performance Report", "High"),
                @("Execute load testing", "Performance Engineer", "Load Test Report", "High"),
                @("Execute stress testing", "Performance Engineer", "Stress Test Report", "Medium"),
                @("Execute DAST (Dynamic Application Security Testing)", "Security Engineer", "DAST Report", "High"),
                @("Validate scalability", "Performance Engineer", "Scalability Report", "Medium"),
                @("Test disaster recovery", "DevOps Engineer", "DR Test Results", "Medium")
            )
        },
        @{
            Category = "3.3 Verification Before Release"
            Tasks = @(
                @("Setup monitoring (Prometheus)", "DevOps Engineer", "Monitoring Config", "High"),
                @("Configure logging (ELK Stack)", "DevOps Engineer", "Logging Config", "High"),
                @("Implement tracing (Jaeger)", "DevOps Engineer", "Tracing Config", "Medium"),
                @("Validate deployment health via logs", "DevOps Engineer", "Log Analysis", "High"),
                @("Review metrics and alerts", "DevOps Engineer", "Metrics Dashboard", "High"),
                @("Verify system readiness", "Release Manager", "Readiness Report", "High")
            )
        }
    )
    "4. Release on Demand" = @(
        @{
            Category = "4.1 Strategic Release"
            Tasks = @(
                @("Decouple deployment from release", "Release Manager", "Release Strategy", "High"),
                @("Implement feature toggles", "Tech Lead", "Feature Flags", "High"),
                @("Setup A/B testing framework", "Product Manager", "A/B Test Config", "Medium"),
                @("Plan phased rollout strategy", "Release Manager", "Rollout Plan", "High"),
                @("Configure canary deployments", "DevOps Engineer", "Canary Config", "Medium"),
                @("Establish rollback procedures", "DevOps Engineer", "Rollback Plan", "High")
            )
        },
        @{
            Category = "4.2 Stability and Enduring Value"
            Tasks = @(
                @("Define SLAs/SLOs", "Service Manager", "SLA Document", "High"),
                @("Monitor SLA compliance", "DevOps Engineer", "SLA Dashboards", "High"),
                @("Implement incident management", "Service Manager", "Incident Process", "High"),
                @("Execute continuous patching", "DevOps Engineer", "Patch Schedule", "High"),
                @("Conduct post-release reviews", "Release Manager", "Review Report", "Medium"),
                @("Maintain system stability", "DevOps Team", "Stability Metrics", "High")
            )
        },
        @{
            Category = "4.3 Closing the Loop - Feedback to CE"
            Tasks = @(
                @("Collect user engagement metrics", "Product Manager", "Engagement Data", "High"),
                @("Track conversion rates", "Product Manager", "Conversion Metrics", "High"),
                @("Monitor performance metrics", "DevOps Engineer", "Performance Data", "High"),
                @("Analyze real usage data", "Data Analyst", "Usage Analysis", "High"),
                @("Generate insights and improvements", "Product Owner", "Insights Report", "High"),
                @("Hypothesize new ideas", "Product Team", "New Hypotheses", "Medium"),
                @("Feed data back to Discovery phase", "Product Manager", "Feedback Loop Doc", "High")
            )
        }
    )
    "5. Cross-Cutting Principles" = @(
        @{
            Category = "5.1 Automation First Mindset"
            Tasks = @(
                @("Eliminate manual approvals", "DevOps Lead", "Automation Plan", "High"),
                @("Fully automate CI/CD pipelines", "DevOps Engineer", "Pipeline Automation", "High"),
                @("Implement self-service environments", "DevOps Engineer", "Self-Service Portal", "Medium"),
                @("Automate testing", "QA Lead", "Test Automation Suite", "High")
            )
        },
        @{
            Category = "5.2 DevSecOps Culture"
            Tasks = @(
                @("Establish shared ownership (Dev+Ops+Sec)", "Leadership", "Team Charter", "High"),
                @("Implement security as code", "Security Engineer", "Security Policies", "High"),
                @("Automate compliance", "Security Engineer", "Compliance Automation", "High"),
                @("Conduct security training", "Security Lead", "Training Program", "Medium")
            )
        },
        @{
            Category = "5.3 Flow Efficiency"
            Tasks = @(
                @("Reduce batch sizes", "Agile Coach", "Process Optimization", "High"),
                @("Minimize waiting states", "Agile Coach", "Flow Metrics", "High"),
                @("Optimize lead time", "Agile Coach", "Lead Time Analysis", "High"),
                @("Measure and improve cycle time", "Agile Coach", "Cycle Time Report", "Medium")
            )
        },
        @{
            Category = "5.4 Built-in Quality"
            Tasks = @(
                @("Implement quality gates at every stage", "QA Lead", "Quality Gates", "High"),
                @("Ensure zero defect carry-forward", "QA Lead", "Quality Policy", "High"),
                @("Automate quality checks", "QA Engineer", "Quality Automation", "High"),
                @("Continuous quality monitoring", "QA Lead", "Quality Dashboard", "High")
            )
        }
    )
}

# Function to create Overview sheet
function Create-OverviewSheet {
    param($worksheet)
    
    $worksheet.Name = "Overview"
    
    # Title
    $worksheet.Range("A1:H1").Merge()
    $worksheet.Cells.Item(1,1) = "SDLC PLAYBOOK - Lean-Agile Framework"
    $worksheet.Cells.Item(1,1).Font.Size = 16
    $worksheet.Cells.Item(1,1).Font.Bold = $true
    $worksheet.Cells.Item(1,1).Font.Color = $headerColor
    $worksheet.Cells.Item(1,1).HorizontalAlignment = -4108
    $worksheet.Rows.Item(1).RowHeight = 25
    
    # Subtitle
    $worksheet.Range("A2:H2").Merge()
    $worksheet.Cells.Item(2,1) = "Build, Measure, Learn | Continuous Everything"
    $worksheet.Cells.Item(2,1).Font.Size = 11
    $worksheet.Cells.Item(2,1).Font.Italic = $true
    $worksheet.Cells.Item(2,1).HorizontalAlignment = -4108
    
    # Document Information
    $row = 4
    $worksheet.Range("A$row:B$row").Merge()
    $worksheet.Cells.Item($row,1) = "Document Information"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    
    $row++
    $infoData = @(
        @("Version:", "1.0"),
        @("Framework:", "Lean-Agile / SAFe Inspired"),
        @("Created Date:", (Get-Date -Format "yyyy-MM-dd")),
        @("Organization:", "[Your Organization Name]"),
        @("Program/Product:", "[Program Name]"),
        @("Release Train:", "[ART/Release Train]")
    )
    
    foreach ($info in $infoData) {
        $worksheet.Cells.Item($row,1) = $info[0]
        $worksheet.Cells.Item($row,1).Font.Bold = $true
        $worksheet.Cells.Item($row,2) = $info[1]
        $row++
    }
    
    # Framework Overview
    $row += 2
    $worksheet.Range("A$row:H$row").Merge()
    $worksheet.Cells.Item($row,1) = "Framework Overview"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    $worksheet.Cells.Item($row,1).Interior.Color = $grayColor
    
    $row++
    $overview = @(
        "This playbook is built on Lean-Agile principles with continuous integration, deployment, and feedback loops.",
        "",
        "Core Philosophy:",
        "• Fast feedback loops via Discovery (Build-Measure-Learn cycle)",
        "• High-quality builds via Continuous Integration",
        "• Reliable deployments via Continuous Deployment",
        "• Business agility via Release on Demand",
        "• Security and automation embedded throughout",
        "",
        "Key Differentiators:",
        "• Decouple deployment (technical) from release (business decision)",
        "• Feature toggles, A/B testing, and phased rollouts",
        "• DevSecOps culture with shared ownership",
        "• Built-in quality at every stage"
    )
    
    foreach ($line in $overview) {
        $worksheet.Range("A$row:H$row").Merge()
        $worksheet.Cells.Item($row,1) = $line
        $row++
    }
    
    # Phases Summary
    $row += 2
    $worksheet.Range("A$row:H$row").Merge()
    $worksheet.Cells.Item($row,1) = "SDLC Phases"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    $worksheet.Cells.Item($row,1).Interior.Color = $grayColor
    
    $row++
    $phases = @(
        @("1. Discovery - Understanding and Aligning", "Lean Startup cycle, Vision, Epics, Design Thinking, Roadmap, MVP/MMP"),
        @("2. Build and Test - Built-in Quality", "Development excellence, CI pipeline, Security as NFR"),
        @("3. Continuous Deployment - Validating and Staging", "Deployment flow, Advanced validation, Observability"),
        @("4. Release on Demand - Delivering Value", "Strategic release, Stability, Feedback loops"),
        @("5. Cross-Cutting Principles", "Automation first, DevSecOps culture, Flow efficiency, Built-in quality")
    )
    
    foreach ($phase in $phases) {
        $worksheet.Cells.Item($row,1) = $phase[0]
        $worksheet.Cells.Item($row,1).Font.Bold = $true
        $worksheet.Range("B$row:H$row").Merge()
        $worksheet.Cells.Item($row,2) = $phase[1]
        $row++
    }
    
    # Instructions
    $row += 2
    $worksheet.Range("A$row:H$row").Merge()
    $worksheet.Cells.Item($row,1) = "How to Use This Checklist"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    $worksheet.Cells.Item($row,1).Interior.Color = $grayColor
    
    $row++
    $instructions = @(
        "1. Each phase has its own detailed worksheet with actionable tasks",
        "2. Update Status column: Not Started, In Progress, Completed, Blocked",
        "3. Assign responsible parties and target dates",
        "4. Document comments, dependencies, and blockers",
        "5. Priority: High (must have), Medium (should have), Low (nice to have)",
        "6. Review and update regularly in sprint/PI planning",
        "7. Use Status Tracking sheet for executive-level visibility",
        "8. Adapt tasks to your organization's context"
    )
    
    foreach ($instruction in $instructions) {
        $worksheet.Range("A$row:H$row").Merge()
        $worksheet.Cells.Item($row,1) = $instruction
        $row++
    }
    
    # Set column widths
    $worksheet.Columns.Item(1).ColumnWidth = 25
    $worksheet.Columns.Item(2).ColumnWidth = 70
}

# Function to create phase sheet
function Create-PhaseSheet {
    param($workbook, $phaseName, $categories)
    
    $worksheet = $workbook.Worksheets.Add()
    $shortName = $phaseName.Substring(0, [Math]::Min(31, $phaseName.Length))
    $worksheet.Name = $shortName
    
    # Set column widths
    $worksheet.Columns.Item(1).ColumnWidth = 5
    $worksheet.Columns.Item(2).ColumnWidth = 40
    $worksheet.Columns.Item(3).ColumnWidth = 25
    $worksheet.Columns.Item(4).ColumnWidth = 30
    $worksheet.Columns.Item(5).ColumnWidth = 12
    $worksheet.Columns.Item(6).ColumnWidth = 15
    $worksheet.Columns.Item(7).ColumnWidth = 15
    $worksheet.Columns.Item(8).ColumnWidth = 35
    
    # Create headers
    $headers = @('#', 'Task/Activity', 'Responsible Role', 'Deliverable/Output', 'Priority', 'Status', 'Target Date', 'Comments/Dependencies')
    for ($i = 0; $i -lt $headers.Count; $i++) {
        $cell = $worksheet.Cells.Item(1, $i+1)
        $cell.Value2 = $headers[$i]
        $cell.Font.Bold = $true
        $cell.Font.Color = 16777215  # White
        $cell.Interior.Color = $headerColor
        $cell.HorizontalAlignment = -4108  # xlCenter
        $cell.Borders.Weight = 2
    }
    
    $row = 2
    $taskNum = 1
    
    foreach ($categoryData in $categories) {
        # Category header
        $worksheet.Cells.Item($row,1).Interior.Color = $subheaderColor
        $worksheet.Range("B$row:H$row").Merge()
        $worksheet.Cells.Item($row,2) = $categoryData.Category
        $worksheet.Cells.Item($row,2).Font.Bold = $true
        $worksheet.Cells.Item($row,2).Interior.Color = $subheaderColor
        
        for ($col = 1; $col -le 8; $col++) {
            $worksheet.Cells.Item($row,$col).Borders.Weight = 2
        }
        
        $row++
        
        # Tasks
        foreach ($task in $categoryData.Tasks) {
            $worksheet.Cells.Item($row,1) = $taskNum
            $worksheet.Cells.Item($row,1).HorizontalAlignment = -4108
            $worksheet.Cells.Item($row,2) = $task[0]
            $worksheet.Cells.Item($row,3) = $task[1]
            $worksheet.Cells.Item($row,4) = $task[2]
            $worksheet.Cells.Item($row,5) = $task[3]
            $worksheet.Cells.Item($row,6) = "Not Started"
            $worksheet.Cells.Item($row,7) = ""
            $worksheet.Cells.Item($row,8) = ""
            
            # Wrap text
            $worksheet.Cells.Item($row,2).WrapText = $true
            $worksheet.Cells.Item($row,4).WrapText = $true
            $worksheet.Cells.Item($row,8).WrapText = $true
            
            # Borders
            for ($col = 1; $col -le 8; $col++) {
                $worksheet.Cells.Item($row,$col).Borders.Weight = 2
            }
            
            $row++
            $taskNum++
        }
    }
    
    # Freeze panes
    $worksheet.Application.ActiveWindow.SplitRow = 1
    $worksheet.Application.ActiveWindow.FreezePanes = $true
}

# Function to create Status Tracking sheet
function Create-StatusSheet {
    param($workbook)
    
    $worksheet = $workbook.Worksheets.Add()
    $worksheet.Name = "Status Tracking"
    
    # Title
    $worksheet.Range("A1:G1").Merge()
    $worksheet.Cells.Item(1,1) = "Program/Product Status Dashboard"
    $worksheet.Cells.Item(1,1).Font.Size = 14
    $worksheet.Cells.Item(1,1).Font.Bold = $true
    $worksheet.Cells.Item(1,1).HorizontalAlignment = -4108
    $worksheet.Rows.Item(1).RowHeight = 20
    
    # Headers
    $headers = @('Phase', 'Total Tasks', 'Completed', 'In Progress', 'Blocked', 'Not Started', '% Complete')
    for ($i = 0; $i -lt $headers.Count; $i++) {
        $cell = $worksheet.Cells.Item(3, $i+1)
        $cell.Value2 = $headers[$i]
        $cell.Font.Bold = $true
        $cell.Font.Color = 16777215
        $cell.Interior.Color = $headerColor
        $cell.HorizontalAlignment = -4108
        $cell.Borders.Weight = 2
    }
    
    # Phase rows
    $phases = @(
        '1. Discovery - Understanding and Aligning',
        '2. Build and Test - Built-in Quality',
        '3. Continuous Deployment',
        '4. Release on Demand',
        '5. Cross-Cutting Principles'
    )
    
    $row = 4
    foreach ($phase in $phases) {
        $worksheet.Cells.Item($row,1) = $phase
        $worksheet.Cells.Item($row,1).Font.Bold = $true
        
        for ($col = 1; $col -le 7; $col++) {
            $worksheet.Cells.Item($row,$col).Borders.Weight = 2
            if ($col -gt 1) {
                $worksheet.Cells.Item($row,$col).HorizontalAlignment = -4108
            }
        }
        
        $row++
    }
    
    # Overall summary row
    $row++
    $worksheet.Cells.Item($row,1) = "OVERALL PROGRAM"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Interior.Color = $grayColor
    
    for ($col = 1; $col -le 7; $col++) {
        $worksheet.Cells.Item($row,$col).Borders.Weight = 2
        $worksheet.Cells.Item($row,$col).Interior.Color = $grayColor
        if ($col -gt 1) {
            $worksheet.Cells.Item($row,$col).HorizontalAlignment = -4108
        }
    }
    
    # Set column widths
    $worksheet.Columns.Item(1).ColumnWidth = 35
    for ($i = 2; $i -le 7; $i++) {
        $worksheet.Columns.Item($i).ColumnWidth = 15
    }
}

# Create Overview sheet
Create-OverviewSheet -worksheet $workbook.Worksheets.Item(1)

# Create phase sheets in order
$phaseOrder = @(
    "1. Discovery",
    "2. Build and Test",
    "3. Continuous Deployment",
    "4. Release on Demand",
    "5. Cross-Cutting Principles"
)

foreach ($phaseName in $phaseOrder) {
    if ($sdlcPhases.ContainsKey($phaseName)) {
        Write-Host "Creating sheet for: $phaseName" -ForegroundColor Yellow
        Create-PhaseSheet -workbook $workbook -phaseName $phaseName -categories $sdlcPhases[$phaseName]
    }
}

# Create Status Tracking sheet
Create-StatusSheet -workbook $workbook

# Move Overview to first position
$workbook.Worksheets.Item("Overview").Move($workbook.Worksheets.Item(1))

# Save and close
$outputPath = "c:\VS Code\SDLC PLaybook\SDLC_Playbook_LeanAgile_Checklist.xlsx"
$workbook.SaveAs($outputPath)
$workbook.Close()
$excel.Quit()

# Clean up COM objects
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($workbook) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
[System.GC]::Collect()
[System.GC]::WaitForPendingFinalizers()

Write-Host "`n✓ Custom SDLC Playbook created successfully!" -ForegroundColor Green
Write-Host "✓ File: $outputPath" -ForegroundColor Green
Write-Host "`nPlaybook Structure:" -ForegroundColor Cyan
Write-Host "  - Based on YOUR Lean-Agile framework" -ForegroundColor White
Write-Host "  - 5 main phases aligned to your content" -ForegroundColor White
Write-Host "  - 100+ tasks following your methodology" -ForegroundColor White
Write-Host "  - Discovery, Build/Test, CD, RoD, Principles" -ForegroundColor White
Write-Host "  - DevSecOps and automation embedded" -ForegroundColor White
