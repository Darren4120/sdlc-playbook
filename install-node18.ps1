# Install Node.js 18 for SPFx Development
# Run this script as Administrator

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Node.js 18 Installation Script" -ForegroundColor Yellow
Write-Host "========================================`n" -ForegroundColor Cyan

# Check current Node version
$currentVersion = node --version 2>$null
Write-Host "Current Node.js version: $currentVersion" -ForegroundColor White

# Install Node.js 18 using winget
Write-Host "`nInstalling Node.js 18..." -ForegroundColor Cyan
winget install OpenJS.NodeJS.18 --force

# Refresh environment
Write-Host "`nRefreshing environment variables..." -ForegroundColor Cyan
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Verify installation
Write-Host "`nVerifying installation..." -ForegroundColor Yellow
$newVersion = & node --version 2>$null
Write-Host "New Node.js version: $newVersion" -ForegroundColor Green

if ($newVersion -like "v18.*") {
    Write-Host "`n✓ Success! Node.js 18 is installed." -ForegroundColor Green
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Close and reopen your terminal" -ForegroundColor White
    Write-Host "2. Run: cd 'c:\VS Code\SDLC PLaybook\spfx-solution'" -ForegroundColor White
    Write-Host "3. Run: npm run build" -ForegroundColor White
} else {
    Write-Host "`n⚠ Installation may need manual intervention." -ForegroundColor Yellow
    Write-Host "Please run: winget install OpenJS.NodeJS.18" -ForegroundColor White
}

Write-Host "`n========================================`n" -ForegroundColor Cyan
