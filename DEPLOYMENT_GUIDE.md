# SDLC Playbook - Complete Deployment Guide

## 📋 Overview

You now have **TWO versions** of the SDLC Playbook:

### 1. HTML Version (Quick Testing) 📄
- **Location:** `website/` folder
- **Files:** index.html, styles.css, playbook-data.js, script.js
- **Use for:** Quick testing, demos, offline viewing

### 2. SPFx Version (SharePoint Production) 📦
- **Location:** `spfx-solution/` folder  
- **Output:** `sdlc-playbook.sppkg` file
- **Use for:** Enterprise SharePoint deployment

---

## 🚀 Quick Start - HTML Version

### Test Immediately:
1. Navigate to the `website` folder  
2. Double-click `index.html` OR
3. Open in browser: `file:///c:/VS Code/SDLC PLaybook/website/index.html`

### Deploy to SharePoint (Simple):
1. Upload all 4 files to **SharePoint Site Assets**
2. Access via: `https://yoursite.sharepoint.com/SiteAssets/website/index.html`
3. Add link to SharePoint navigation

---

## 🏢 Enterprise Deployment - SPFx Version

### Prerequisites Checklist:
- [ ] Node.js 16.13.0+ installed
- [ ] npm installed  
- [ ] SharePoint Online access
- [ ] App Catalog access (admin)

### Step-by-Step Build Process:

#### 1️⃣ Install Dependencies (First Time Only)
```powershell
cd "c:\VS Code\SDLC PLaybook\spfx-solution"
npm install
```
⏱️ Takes 5-10 minutes

#### 2️⃣ Build the Solution
```powershell
gulp build
```
⏱️ Takes 1-2 minutes

#### 3️⃣ Create Production Package
```powershell
gulp bundle --ship
gulp package-solution --ship
```
⏱️ Takes 1-2 minutes

✅ **Output:** `spfx-solution/sharepoint/solution/sdlc-playbook.sppkg`

---

## 📦 SharePoint Deployment Steps

### Option A: Tenant-Wide Deployment (Recommended)

**Step 1: Upload to App Catalog**
1. Go to **SharePoint Admin Center**
2. Navigate to: **More features** → **Apps** → **Open**
3. Click **App Catalog**
4. Select **Apps for SharePoint**
5. Click **Upload** and select `sdlc-playbook.sppkg`
6. ✅ Check "**Make this solution available to all sites**"
7. Click **Deploy**

**Step 2: Install on Your Site**
1. Go to your SharePoint site (e.g., `https://yourcompany.sharepoint.com/sites/YourSite`)
2. Click **Settings** (⚙️) → **Add an app**
3. Find "**SDLC Playbook**"
4. Click **Add**
5. Wait for installation (~30 seconds)

**Step 3: Add to Page**
1. Go to any Modern SharePoint page
2. Click **Edit**
3. Click **+** (Add web part)
4. Search: "**SDLC Playbook**" or "**SDLC**"
5. Click the web part to add it
6. **Publish** the page

🎉 **Done!** Your playbook is live.

---

### Option B: Site Collection Deployment

**For specific sites only:**

1. **Enable Site Collection App Catalog:**
   - Site Settings → Site Collection Features
   - Activate "Site Collection App Catalog"

2. **Upload Package:**
   - Site Contents → Site Collection App Catalog
   - Upload `sdlc-playbook.sppkg`

3. **Add to Page** (same as above)

---

## 🔄 Update/Upgrade Process

When you make changes to the playbook:

### For HTML Version:
1. Edit files in `website/` folder
2. Re-upload changed files to SharePoint
3. Clear browser cache (Ctrl+Shift+Delete)

### For SPFx Version:
1. Make changes in `spfx-solution/src/`
2. Update version in `config/package-solution.json`
   ```json
   "version": "1.0.1.0"  // Increment this
   ```
3. Rebuild:
   ```powershell
   gulp clean
   gulp bundle --ship
   gulp package-solution --ship
   ```
4. Upload new `.sppkg` to App Catalog
5. Users will see "Update available" notification

---

## 🎯 Which Version to Use?

| Scenario | Use HTML Version | Use SPFx Version |
|----------|------------------|------------------|
| Quick demo/testing | ✅ | ❌ |
| Offline access | ✅ | ❌ |
| Personal laptop | ✅ | ❌ |
| SharePoint production | ⚠️ (simple) | ✅ (recommended) |
| Need governance | ❌ | ✅ |
| IT approval required | ❌ | ✅ |
| Multiple sites | ⚠️ | ✅ |
| Version control | ❌ | ✅ |
| Teams integration | ❌ | ✅ |

---

## 🛠️ Customization Guide

### Change Colors:
**HTML:** Edit `website/styles.css` CSS variables  
**SPFx:** Edit `spfx-solution/src/webparts/sdlcPlaybook/components/SdlcPlaybook.module.scss`

### Add/Edit Tasks:
**HTML:** Edit `website/playbook-data.js`  
**SPFx:** Edit `spfx-solution/src/data/playbook-data.ts`, then rebuild

### Add New Roles:
Both versions: Add to `roleMapping` object

### Change Branding:
Modify logo, colors, and text in respective files

---

## 🐛 Troubleshooting

### HTML Version Issues:

**Problem:** Website doesn't load styles
- ✅ Check all 4 files are in same folder
- ✅ Clear browser cache

**Problem:** JavaScript not working  
- ✅ Check browser console (F12)
- ✅ Ensure `playbook-data.js` loads before `script.js`

### SPFx Version Issues:

**Problem:** `npm install` fails
```powershell
npm cache clean --force
Remove-Item node_modules -Recurse -Force
npm install
```

**Problem:** Build errors
```powershell
gulp clean
Remove-Item lib -Recurse -Force
gulp build
```

**Problem:** Web part not showing
- ✅ Verify `.sppkg` deployed in App Catalog
- ✅ Check if app installed on site (Site Contents)
- ✅ Refresh page (Ctrl+F5)
- ✅ Check browser console for errors

**Problem:** Package solution doesn't work
- ✅ Verify Node.js version: `node --version` (must be 16.x)
- ✅ Install correct Node version if needed

---

## 📁 File Locations

```
c:\VS Code\SDLC PLaybook\
│
├── website/                          # HTML Version (Ready to use)
│   ├── index.html
│   ├── styles.css
│   ├── playbook-data.js
│   ├── script.js
│   └── README.md
│
├── spfx-solution/                    # SPFx Version (Needs build)
│   ├── src/
│   ├── config/
│   ├── sharepoint/
│   │   └── solution/
│   │       └── sdlc-playbook.sppkg  # ← Deploy this file
│   ├── package.json
│   └── README.md
│
├── SDLC_Playbook_Checklist.xlsx             # Original Excel Version
└── SDLC_Playbook_LeanAgile_Checklist.xlsx   # Custom Excel Version
```

---

## 🎓 Training Resources

### For End Users:
1. Open the playbook
2. Select your role (e.g., Developer, Product Owner)
3. Select SDLC phase
4. Click "Launch Playbook"
5. Browse tasks relevant to your role
6. Click task cards to see details

### For Administrators:
- Read `spfx-solution/README.md` for technical details
- Review SharePoint App Catalog documentation
- Test in dev/test environment first

---

## 🔒 Security & Permissions

✅ No external API calls  
✅ No data collection  
✅ Runs in user context  
✅ No special permissions needed  
✅ Safe for corporate environment  

---

## 📞 Need Help?

1. Check this guide
2. Review `README.md` in respective folders
3. Check browser console (F12) for errors
4. Verify prerequisite software installed
5. Contact SharePoint administrator

---

## ✨ Features

Both versions include:
- ✅ 5 SDLC Phases
- ✅ 100+ Tasks
- ✅ 10+ Role filters
- ✅ Mercedes-Benz MBRDI branding
- ✅ Dark blue, black, gold theme
- ✅ Responsive design
- ✅ Interactive task cards
- ✅ Futuristic UI/UX

---

**Mercedes-Benz R&D India**  
**Shaping the Future of Automotive Software**

© 2026 Mercedes-Benz Research and Development India. All rights reserved.
