# SDLC Playbook - SPFx Package Builder
# This script helps you build the SharePoint package (.sppkg) with one click

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SDLC Playbook - SPFx Package Builder" -ForegroundColor Cyan
Write-Host "  Mercedes-Benz R&D India" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$spfxPath = "c:\VS Code\SDLC PLaybook\spfx-solution"

# Check if Node.js is installed
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found!" -ForegroundColor Red
    Write-Host "  Please install Node.js 16.13.0+ from: https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✓ npm installed: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "What would you like to do?" -ForegroundColor Cyan
Write-Host "1. Install dependencies (first time only)" -ForegroundColor White
Write-Host "2. Build for development" -ForegroundColor White
Write-Host "3. Build for production (creates .sppkg)" -ForegroundColor White
Write-Host "4. Clean and rebuild everything" -ForegroundColor White
Write-Host "5. Start local development server" -ForegroundColor White
Write-Host "Q. Quit" -ForegroundColor White
Write-Host ""

$choice = Read-Host "Enter your choice (1-5 or Q)"

Set-Location $spfxPath

switch ($choice) {
    "1" {
        Write-Host "`nInstalling dependencies..." -ForegroundColor Yellow
        Write-Host "This may take 5-10 minutes..." -ForegroundColor Yellow
        npm install
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✓ Dependencies installed successfully!" -ForegroundColor Green
        } else {
            Write-Host "`n✗ Installation failed. Check errors above." -ForegroundColor Red
        }
    }
    "2" {
        Write-Host "`nBuilding for development..." -ForegroundColor Yellow
        gulp build
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✓ Build completed successfully!" -ForegroundColor Green
        } else {
            Write-Host "`n✗ Build failed. Check errors above." -ForegroundColor Red
        }
    }
    "3" {
        Write-Host "`nBuilding production package..." -ForegroundColor Yellow
        Write-Host "Step 1: Creating bundle..." -ForegroundColor Yellow
        gulp bundle --ship
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✓ Bundle created" -ForegroundColor Green
            Write-Host "Step 2: Creating package..." -ForegroundColor Yellow
            gulp package-solution --ship
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "`n========================================" -ForegroundColor Green
                Write-Host "✓ SUCCESS! Package created!" -ForegroundColor Green
                Write-Host "========================================" -ForegroundColor Green
                Write-Host ""
                Write-Host "📦 Package location:" -ForegroundColor Cyan
                Write-Host "   $spfxPath\sharepoint\solution\sdlc-playbook.sppkg" -ForegroundColor White
                Write-Host ""
                Write-Host "Next steps:" -ForegroundColor Cyan
                Write-Host "1. Go to SharePoint Admin Center" -ForegroundColor White
                Write-Host "2. Navigate to More features > Apps > App Catalog" -ForegroundColor White
                Write-Host "3. Upload the .sppkg file" -ForegroundColor White
                Write-Host "4. Deploy to SharePoint sites" -ForegroundColor White
                Write-Host ""
                Write-Host "See DEPLOYMENT_GUIDE.md for detailed instructions." -ForegroundColor Yellow
                
                # Open the solution folder
                Write-Host ""
                $openFolder = Read-Host "Open solution folder? (Y/N)"
                if ($openFolder -eq "Y" -or $openFolder -eq "y") {
                    Start-Process "$spfxPath\sharepoint\solution"
                }
            } else {
                Write-Host "`n✗ Package creation failed!" -ForegroundColor Red
            }
        } else {
            Write-Host "`n✗ Bundle creation failed!" -ForegroundColor Red
        }
    }
    "4" {
        Write-Host "`nCleaning previous builds..." -ForegroundColor Yellow
        gulp clean
        
        if (Test-Path "lib") {
            Remove-Item lib -Recurse -Force
            Write-Host "✓ Removed lib folder" -ForegroundColor Green
        }
        
        Write-Host "Rebuilding..." -ForegroundColor Yellow
        gulp build
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✓ Clean build completed!" -ForegroundColor Green
        } else {
            Write-Host "`n✗ Build failed!" -ForegroundColor Red
        }
    }
    "5" {
        Write-Host "`nStarting development server..." -ForegroundColor Yellow
        Write-Host "The SharePoint Workbench will open in your browser." -ForegroundColor Yellow
        Write-Host "Press Ctrl+C to stop the server when done." -ForegroundColor Yellow
        Write-Host ""
        gulp serve
    }
    "Q" {
        Write-Host "`nGoodbye!" -ForegroundColor Cyan
        exit 0
    }
    "q" {
        Write-Host "`nGoodbye!" -ForegroundColor Cyan
        exit 0
    }
    default {
        Write-Host "`n✗ Invalid choice!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
