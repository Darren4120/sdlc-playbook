# SDLC Playbook Excel Generator - PowerShell Version
# Creates a professional organization-level SDLC checklist

$ErrorActionPreference = "Stop"

Write-Host "Creating SDLC Playbook Excel file..." -ForegroundColor Cyan

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

# Phase data structure
$sdlcPhases = @{
    "Planning & Requirements" = @(
        @{
            Category = "Project Initiation"
            Tasks = @(
                @("Define project goals and objectives", "Project Manager", "Project Charter", "High"),
                @("Identify stakeholders", "Project Manager", "Stakeholder Register", "High"),
                @("Define project scope", "Business Analyst", "Scope Statement", "High"),
                @("Conduct feasibility study", "Business Analyst", "Feasibility Report", "High"),
                @("Establish project governance", "Project Manager", "Governance Framework", "Medium"),
                @("Create project budget estimate", "Project Manager", "Budget Document", "High")
            )
        },
        @{
            Category = "Requirements Gathering"
            Tasks = @(
                @("Conduct stakeholder interviews", "Business Analyst", "Interview Notes", "High"),
                @("Document business requirements", "Business Analyst", "BRD Document", "High"),
                @("Define functional requirements", "Business Analyst", "FRD Document", "High"),
                @("Define non-functional requirements", "Solution Architect", "NFR Document", "High"),
                @("Create user stories/use cases", "Business Analyst", "User Stories", "High"),
                @("Prioritize requirements (MoSCoW)", "Product Owner", "Prioritized Backlog", "High"),
                @("Requirements validation with stakeholders", "Business Analyst", "Sign-off Document", "High"),
                @("Establish acceptance criteria", "Business Analyst", "Acceptance Criteria", "High")
            )
        },
        @{
            Category = "Planning & Estimation"
            Tasks = @(
                @("Create work breakdown structure (WBS)", "Project Manager", "WBS Document", "High"),
                @("Estimate effort and duration", "Tech Lead", "Estimation Sheet", "High"),
                @("Develop project schedule", "Project Manager", "Project Plan", "High"),
                @("Identify risks and mitigation strategies", "Project Manager", "Risk Register", "High"),
                @("Resource allocation planning", "Project Manager", "Resource Plan", "Medium"),
                @("Define communication plan", "Project Manager", "Communication Plan", "Medium"),
                @("Establish quality metrics", "QA Lead", "Quality Plan", "Medium")
            )
        }
    )
    "Design" = @(
        @{
            Category = "Architecture & Design"
            Tasks = @(
                @("Create high-level architecture design", "Solution Architect", "Architecture Document", "High"),
                @("Design system components", "Solution Architect", "Component Diagram", "High"),
                @("Create database schema design", "Database Architect", "ERD/Schema Document", "High"),
                @("Define API specifications", "Solution Architect", "API Documentation", "High"),
                @("Create UI/UX designs and wireframes", "UX Designer", "Design Mockups", "High"),
                @("Design security architecture", "Security Architect", "Security Design Doc", "High"),
                @("Plan integration points", "Solution Architect", "Integration Design", "Medium"),
                @("Create deployment architecture", "DevOps Engineer", "Deployment Diagram", "Medium")
            )
        },
        @{
            Category = "Design Review"
            Tasks = @(
                @("Conduct architecture review", "Architecture Team", "Review Report", "High"),
                @("Perform security design review", "Security Team", "Security Review", "High"),
                @("Review scalability and performance", "Solution Architect", "Performance Review", "Medium"),
                @("Validate design against requirements", "Business Analyst", "Validation Document", "High"),
                @("Obtain design approval", "Stakeholders", "Approval Document", "High")
            )
        }
    )
    "Development" = @(
        @{
            Category = "Environment Setup"
            Tasks = @(
                @("Setup development environment", "DevOps Engineer", "Environment Config", "High"),
                @("Configure version control repository", "Tech Lead", "Repository Setup", "High"),
                @("Setup CI/CD pipeline", "DevOps Engineer", "Pipeline Configuration", "High"),
                @("Configure development tools", "Tech Lead", "Tool Configuration", "Medium"),
                @("Setup code quality tools", "Tech Lead", "Quality Tools Config", "Medium")
            )
        },
        @{
            Category = "Code Development"
            Tasks = @(
                @("Implement backend services", "Backend Developer", "Backend Code", "High"),
                @("Implement frontend components", "Frontend Developer", "Frontend Code", "High"),
                @("Implement database scripts", "Database Developer", "DB Scripts", "High"),
                @("Implement API endpoints", "Backend Developer", "API Code", "High"),
                @("Write unit tests", "Developer", "Unit Tests", "High"),
                @("Conduct code reviews", "Tech Lead", "Review Comments", "High"),
                @("Refactor code for quality", "Developer", "Clean Code", "Medium"),
                @("Document code and APIs", "Developer", "Code Documentation", "Medium")
            )
        },
        @{
            Category = "Code Quality"
            Tasks = @(
                @("Run static code analysis", "Developer", "Analysis Report", "High"),
                @("Check code coverage", "Developer", "Coverage Report", "High"),
                @("Address code review findings", "Developer", "Fixed Code", "High"),
                @("Ensure coding standards compliance", "Tech Lead", "Compliance Report", "Medium")
            )
        }
    )
    "Testing" = @(
        @{
            Category = "Test Planning"
            Tasks = @(
                @("Create test strategy", "QA Lead", "Test Strategy Doc", "High"),
                @("Develop test plan", "QA Lead", "Test Plan", "High"),
                @("Create test cases", "QA Engineer", "Test Cases", "High"),
                @("Prepare test data", "QA Engineer", "Test Data Sets", "High"),
                @("Setup test environment", "QA Lead", "Test Environment", "High")
            )
        },
        @{
            Category = "Test Execution"
            Tasks = @(
                @("Execute unit testing", "Developer", "Unit Test Results", "High"),
                @("Execute integration testing", "QA Engineer", "Integration Test Results", "High"),
                @("Execute system testing", "QA Engineer", "System Test Results", "High"),
                @("Execute UAT (User Acceptance Testing)", "Business Users", "UAT Results", "High"),
                @("Execute performance testing", "Performance Engineer", "Performance Report", "High"),
                @("Execute security testing", "Security Engineer", "Security Test Report", "High"),
                @("Execute regression testing", "QA Engineer", "Regression Results", "Medium"),
                @("Accessibility testing", "QA Engineer", "Accessibility Report", "Medium")
            )
        },
        @{
            Category = "Defect Management"
            Tasks = @(
                @("Log defects in tracking system", "QA Engineer", "Defect Log", "High"),
                @("Prioritize and assign defects", "QA Lead", "Prioritized Defects", "High"),
                @("Fix critical and high defects", "Developer", "Fixed Code", "High"),
                @("Retest fixed defects", "QA Engineer", "Retest Results", "High"),
                @("Update defect status", "QA Engineer", "Updated Status", "Medium"),
                @("Conduct defect review meetings", "QA Lead", "Meeting Minutes", "Medium")
            )
        }
    )
    "Deployment" = @(
        @{
            Category = "Pre-Deployment"
            Tasks = @(
                @("Create deployment plan", "DevOps Engineer", "Deployment Plan", "High"),
                @("Prepare release notes", "Tech Lead", "Release Notes", "High"),
                @("Create rollback plan", "DevOps Engineer", "Rollback Procedures", "High"),
                @("Conduct deployment readiness review", "Release Manager", "Readiness Report", "High"),
                @("Schedule deployment window", "Release Manager", "Deployment Schedule", "High"),
                @("Notify stakeholders", "Project Manager", "Notification Email", "Medium"),
                @("Backup production data", "DBA", "Backup Confirmation", "High")
            )
        },
        @{
            Category = "Deployment Execution"
            Tasks = @(
                @("Deploy to staging environment", "DevOps Engineer", "Staging Deployment", "High"),
                @("Validate staging deployment", "QA Lead", "Validation Results", "High"),
                @("Deploy to production", "DevOps Engineer", "Prod Deployment", "High"),
                @("Execute smoke tests", "QA Engineer", "Smoke Test Results", "High"),
                @("Monitor system health", "DevOps Engineer", "Monitoring Report", "High"),
                @("Verify all services running", "DevOps Engineer", "Service Status", "High")
            )
        },
        @{
            Category = "Post-Deployment"
            Tasks = @(
                @("Conduct post-deployment review", "Release Manager", "Review Report", "Medium"),
                @("Document lessons learned", "Project Manager", "Lessons Learned", "Medium"),
                @("Update deployment documentation", "DevOps Engineer", "Updated Docs", "Medium"),
                @("Confirm with stakeholders", "Project Manager", "Confirmation Email", "High")
            )
        }
    )
    "Maintenance & Support" = @(
        @{
            Category = "Operations Setup"
            Tasks = @(
                @("Setup monitoring and alerting", "DevOps Engineer", "Monitoring Config", "High"),
                @("Configure logging", "DevOps Engineer", "Logging Config", "High"),
                @("Create operations runbook", "DevOps Engineer", "Runbook Document", "High"),
                @("Define SLAs and KPIs", "Service Manager", "SLA Document", "High"),
                @("Setup incident management process", "Service Manager", "Incident Process", "High"),
                @("Establish support channels", "Support Manager", "Support Framework", "Medium")
            )
        },
        @{
            Category = "Ongoing Maintenance"
            Tasks = @(
                @("Monitor application performance", "DevOps Engineer", "Performance Metrics", "High"),
                @("Review system logs regularly", "DevOps Engineer", "Log Analysis", "Medium"),
                @("Apply security patches", "DevOps Engineer", "Patch Report", "High"),
                @("Database maintenance", "DBA", "Maintenance Log", "Medium"),
                @("Update system documentation", "Tech Lead", "Updated Docs", "Medium"),
                @("Conduct periodic security audits", "Security Team", "Audit Report", "High")
            )
        },
        @{
            Category = "Support & Enhancements"
            Tasks = @(
                @("Handle user support tickets", "Support Team", "Ticket Resolution", "High"),
                @("Gather user feedback", "Product Owner", "Feedback Log", "Medium"),
                @("Prioritize enhancement requests", "Product Owner", "Prioritized Backlog", "Medium"),
                @("Implement bug fixes", "Developer", "Fixed Code", "High"),
                @("Implement minor enhancements", "Developer", "Enhancement Code", "Medium")
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
    $worksheet.Cells.Item(1,1) = "SDLC PLAYBOOK - Organization Level Checklist"
    $worksheet.Cells.Item(1,1).Font.Size = 16
    $worksheet.Cells.Item(1,1).Font.Bold = $true
    $worksheet.Cells.Item(1,1).Font.Color = $headerColor
    $worksheet.Cells.Item(1,1).HorizontalAlignment = -4108  # xlCenter
    $worksheet.Rows.Item(1).RowHeight = 25
    
    # Document Information
    $row = 3
    $worksheet.Range("A$row:B$row").Merge()
    $worksheet.Cells.Item($row,1) = "Document Information"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    
    $row++
    $infoData = @(
        @("Version:", "1.0"),
        @("Created Date:", (Get-Date -Format "yyyy-MM-dd")),
        @("Organization:", "[Your Organization Name]"),
        @("Project Name:", "[Project Name]"),
        @("Project Manager:", "[Name]")
    )
    
    foreach ($info in $infoData) {
        $worksheet.Cells.Item($row,1) = $info[0]
        $worksheet.Cells.Item($row,1).Font.Bold = $true
        $worksheet.Cells.Item($row,2) = $info[1]
        $row++
    }
    
    # Instructions
    $row++
    $worksheet.Range("A$row:H$row").Merge()
    $worksheet.Cells.Item($row,1) = "Instructions for Use"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    $worksheet.Cells.Item($row,1).Interior.Color = $grayColor
    
    $row++
    $instructions = @(
        "1. This playbook covers all phases of the Software Development Life Cycle (SDLC)",
        "2. Each phase has its own sheet with detailed tasks and activities",
        "3. Update the 'Status' column as tasks are completed (Not Started, In Progress, Completed, Blocked)",
        "4. Assign target dates and responsible parties for each task",
        "5. Use the Comments column to document any issues, dependencies, or notes",
        "6. Priority levels: High (critical), Medium (important), Low (nice-to-have)",
        "7. Regularly review and update the checklist throughout the project lifecycle",
        "8. Customize tasks based on your specific project needs and organizational requirements"
    )
    
    foreach ($instruction in $instructions) {
        $worksheet.Range("A$row:H$row").Merge()
        $worksheet.Cells.Item($row,1) = $instruction
        $row++
    }
    
    # SDLC Phases
    $row++
    $worksheet.Range("A$row:H$row").Merge()
    $worksheet.Cells.Item($row,1) = "SDLC Phases Covered"
    $worksheet.Cells.Item($row,1).Font.Bold = $true
    $worksheet.Cells.Item($row,1).Font.Size = 12
    $worksheet.Cells.Item($row,1).Interior.Color = $grayColor
    
    $row++
    $phases = @(
        @("1. Planning & Requirements", "Project initiation, requirements gathering, planning and estimation"),
        @("2. Design", "Architecture design, system design, design review and approval"),
        @("3. Development", "Environment setup, coding, code quality, version control"),
        @("4. Testing", "Test planning, test execution, defect management, UAT"),
        @("5. Deployment", "Pre-deployment prep, deployment execution, post-deployment review"),
        @("6. Maintenance & Support", "Operations setup, ongoing maintenance, support and enhancements")
    )
    
    foreach ($phase in $phases) {
        $worksheet.Cells.Item($row,1) = $phase[0]
        $worksheet.Cells.Item($row,1).Font.Bold = $true
        $worksheet.Range("B$row:H$row").Merge()
        $worksheet.Cells.Item($row,2) = $phase[1]
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
    $worksheet.Columns.Item(2).ColumnWidth = 35
    $worksheet.Columns.Item(3).ColumnWidth = 25
    $worksheet.Columns.Item(4).ColumnWidth = 30
    $worksheet.Columns.Item(5).ColumnWidth = 12
    $worksheet.Columns.Item(6).ColumnWidth = 12
    $worksheet.Columns.Item(7).ColumnWidth = 15
    $worksheet.Columns.Item(8).ColumnWidth = 30
    
    # Create headers
    $headers = @('#', 'Task/Activity', 'Responsible', 'Deliverable', 'Priority', 'Status', 'Target Date', 'Comments')
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
    $worksheet.Range("A1:F1").Merge()
    $worksheet.Cells.Item(1,1) = "Project Status Summary"
    $worksheet.Cells.Item(1,1).Font.Size = 14
    $worksheet.Cells.Item(1,1).Font.Bold = $true
    $worksheet.Cells.Item(1,1).HorizontalAlignment = -4108
    $worksheet.Rows.Item(1).RowHeight = 20
    
    # Headers
    $headers = @('Phase', 'Total Tasks', 'Completed', 'In Progress', 'Not Started', '% Complete')
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
        'Planning & Requirements',
        'Design',
        'Development',
        'Testing',
        'Deployment',
        'Maintenance & Support'
    )
    
    $row = 4
    foreach ($phase in $phases) {
        $worksheet.Cells.Item($row,1) = $phase
        $worksheet.Cells.Item($row,1).Font.Bold = $true
        
        for ($col = 1; $col -le 6; $col++) {
            $worksheet.Cells.Item($row,$col).Borders.Weight = 2
            $worksheet.Cells.Item($row,$col).HorizontalAlignment = -4108
        }
        
        $row++
    }
    
    # Set column widths
    $worksheet.Columns.Item(1).ColumnWidth = 30
    for ($i = 2; $i -le 6; $i++) {
        $worksheet.Columns.Item($i).ColumnWidth = 15
    }
}

# Create Overview sheet
Create-OverviewSheet -worksheet $workbook.Worksheets.Item(1)

# Create phase sheets
$sheetIndex = 2
foreach ($phase in $sdlcPhases.GetEnumerator()) {
    Write-Host "Creating sheet for: $($phase.Key)" -ForegroundColor Yellow
    Create-PhaseSheet -workbook $workbook -phaseName $phase.Key -categories $phase.Value
}

# Create Status Tracking sheet
Create-StatusSheet -workbook $workbook

# Move Overview to first position
$workbook.Worksheets.Item("Overview").Move($workbook.Worksheets.Item(1))

# Save and close
$outputPath = "c:\VS Code\SDLC PLaybook\SDLC_Playbook_Checklist.xlsx"
$workbook.SaveAs($outputPath)
$workbook.Close()
$excel.Quit()

# Clean up COM objects
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($workbook) | Out-Null
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
[System.GC]::Collect()
[System.GC]::WaitForPendingFinalizers()

Write-Host "`n✓ SDLC Playbook created successfully!" -ForegroundColor Green
Write-Host "✓ File location: $outputPath" -ForegroundColor Green
Write-Host "`nThe playbook includes:" -ForegroundColor Cyan
Write-Host "  - Overview sheet with instructions" -ForegroundColor White
Write-Host "  - Detailed checklists for 6 SDLC phases" -ForegroundColor White
Write-Host "  - Status tracking sheet" -ForegroundColor White
Write-Host "  - Professional formatting and structure" -ForegroundColor White
Write-Host "  - 100+ tasks and activities" -ForegroundColor White
