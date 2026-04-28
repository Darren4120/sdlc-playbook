# Read Excel File and export to JSON
param(
    [string]$ExcelPath = "SDLC_Playbook_LeanAgile_Checklist.xlsx"
)

try {
    # Create Excel COM object
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false
    $excel.DisplayAlerts = $false
    
    # Open workbook
    $workbook = $excel.Workbooks.Open("$PSScriptRoot\$ExcelPath")
    
    # Get all worksheets
    $sheets = @()
    
    foreach ($worksheet in $workbook.Worksheets) {
        $sheetName = $worksheet.Name
        Write-Host "`n=== Sheet: $sheetName ===" -ForegroundColor Cyan
        
        # Get used range
        $usedRange = $worksheet.UsedRange
        $rows = $usedRange.Rows.Count
        $cols = $usedRange.Columns.Count
        
        Write-Host "Rows: $rows, Columns: $cols"
        
        # Read all data
        for ($row = 1; $row -le [Math]::Min(50, $rows); $row++) {
            $rowData = @()
            for ($col = 1; $col -le $cols; $col++) {
                $cellValue = $worksheet.Cells.Item($row, $col).Text
                $rowData += $cellValue
            }
            Write-Host "Row $row : $($rowData -join ' | ')"
        }
    }
    
    # Close workbook and quit Excel
    $workbook.Close($false)
    $excel.Quit()
    
    # Release COM objects
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($worksheet) | Out-Null
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($workbook) | Out-Null
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
    
} catch {
    Write-Host "Error reading Excel file: $_" -ForegroundColor Red
    if ($excel) {
        $excel.Quit()
    }
    exit 1
}
