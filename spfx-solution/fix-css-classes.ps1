# Convert camelCase CSS class names to kebab-case in TypeScript file

$file = "src\webparts\sdlcPlaybook\components\SdlcPlaybook.tsx"
$content = Get-Content $file -Raw

# Mapping of camelCase to kebab-case
$replacements = @{
    'styles.loadingScreen' = "styles['loading-screen']"
    'styles.loadingContent' = "styles['loading-content']"
    'styles.mbLogo' = "styles['mb-logo']"
    'styles.logoStar' = "styles['logo-star']"
    'styles.logoCircle' = "styles['logo-circle']"
    'styles.loadingText' = "styles['loading-text']"
    'styles.loadingBar' = "styles['loading-bar']"
    'styles.loadingProgress' = "styles['loading-progress']"
    'styles.taskCard' = "styles['task-card']"
    'styles.taskHeader' = "styles['task-header']"
    'styles.taskTitle' = "styles['task-title']"
    'styles.taskPriority' = "styles['task-priority']"
    'styles.taskMeta' = "styles['task-meta']"
    'styles.taskMetaItem' = "styles['task-meta-item']"
    'styles.taskLabel' = "styles['task-label']"
    'styles.taskDescription' = "styles['task-description']"
    'styles.phaseContent' = "styles['phase-content']"
    'styles.phaseHeaderSection' = "styles['phase-header-section']"
    'styles.phaseTitle' = "styles['phase-title']"
    'styles.phaseDescription' = "styles['phase-description']"
    'styles.categorySection' = "styles['category-section']"
    'styles.categoryHeader' = "styles['category-header']"
    'styles.categoryTitle' = "styles['category-title']"
    'styles.taskCount' = "styles['task-count']"
    'styles.tasksGrid' = "styles['tasks-grid']"
    'styles.sdlcPlaybook' = "styles['sdlc-playbook']"
    'styles.mainHeader' = "styles['main-header']"
    'styles.headerContent' = "styles['header-content']"
    'styles.logoSection' = "styles['logo-section']"
    'styles.mbLogoSmall' = "styles['mb-logo-small']"
    'styles.logoStarSmall' = "styles['logo-star-small']"
    'styles.headerTitle' = "styles['header-title']"
    'styles.headerSubtitle' = "styles['header-subtitle']"
    'styles.headerNav' = "styles['header-nav']"
    'styles.navBtn' = "styles['nav-btn']"
    'styles.heroSection' = "styles['hero-section']"
    'styles.heroContent' = "styles['hero-content']"
    'styles.heroTitle' = "styles['hero-title']"
    'styles.heroTagline' = "styles['hero-tagline']"
    'styles.heroDivider' = "styles['hero-divider']"
    'styles.heroDescription' = "styles['hero-description']"
    'styles.selectionPanel' = "styles['selection-panel']"
    'styles.panelHeader' = "styles['panel-header']"
    'styles.selectionContainer' = "styles['selection-container']"
    'styles.selectionGroup' = "styles['selection-group']"
    'styles.selectionLabel' = "styles['selection-label']"
    'styles.customSelect' = "styles['custom-select']"
    'styles.launchButton' = "styles['launch-button']"
    'styles.btnText' = "styles['btn-text']"
    'styles.btnIcon' = "styles['btn-icon']"
}

foreach ($key in $replacements.Keys) {
    $content = $content -replace [regex]::Escape($key), $replacements[$key]
}

Set-Content -Path $file -Value $content -NoNewline
Write-Host "✓ CSS class names fixed!" -ForegroundColor Green
