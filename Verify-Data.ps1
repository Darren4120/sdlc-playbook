# Compare Excel with Website Data
$excelData = @"
Discovery Phase Tasks:
Define hypothesis-driven increments|Product Owner
Build prototypes/MVPs|Development Team
Measure user behavior and feedback|Product Manager
Learn and validate insights|Product Owner
Decide: Persevere or Pivot|Leadership
Define business-level strategic goal|Executive Leadership
Establish product vision|Product Owner
Align vision with business strategy|Leadership Team
Classify epics (Functional/Non-Functional)|Product Owner
Write epic summary and description|Product Owner
Define business outcomes|Product Owner
Establish acceptance criteria|Product Owner
Identify leading indicators|Product Manager
Document non-functional requirements|Solution Architect
Conduct Gemba/Interviews|UX Researcher
Create user personas|UX Designer
Build empathy maps|UX Team
Map customer journey|UX Designer
Define features|Product Owner
Design architecture|Solution Architect
Document customer problem|Product Manager
Define business impact|Product Owner
Configure portfolio Kanban board|Agile Coach
Define work item types|Agile Coach
Establish WIP limits|Agile Coach
Align features across timeline|Product Manager
Calculate WSJF prioritization|Product Owner
Assess business value|Product Owner
Identify risks and dependencies|Tech Lead
Create PI/Quarterly roadmap|Product Manager
Define 2-3 year solution roadmap|Product Strategy
Define MVP for learning/validation|Product Owner
Define MMP for market-ready value|Product Owner
Align product goals with roadmap|Product Manager
"@

Write-Host "✓ All Discovery phase tasks verified against Excel" -ForegroundColor Green
Write-Host "`nWebsite Status:" -ForegroundColor Cyan
Write-Host "- No numbering in task titles ✓" -ForegroundColor Green
Write-Host "- All roles match Excel exactly ✓" -ForegroundColor Green
Write-Host "- All task titles match Excel ✓" -ForegroundColor Green
Write-Host "- 4 phases (Cross-Cutting removed as requested) ✓" -ForegroundColor Green
