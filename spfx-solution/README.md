# SDLC Playbook - SPFx Solution

## 📦 SharePoint Framework (SPFx) Package

This is the **production-ready SharePoint Framework solution** for the SDLC Playbook. It creates a deployable `.sppkg` file that can be installed in your SharePoint App Catalog.

## 🏗️ Solution Structure

```
spfx-solution/
├── config/
│   ├── config.json                  # Bundle configuration
│   ├── package-solution.json        # Package metadata
│   ├── serve.json                   # Dev server config
│   ├── deploy-azure-storage.json    # CDN config
│   └── write-manifests.json         # Manifest config
├── src/
│   ├── data/
│   │   └── playbook-data.ts         # SDLC data
│   └── webparts/
│       └── sdlcPlaybook/
│           ├── components/
│           │   ├── SdlcPlaybook.tsx           # React component
│           │   ├── SdlcPlaybook.module.scss   # Styles
│           │   └── ISdlcPlaybookProps.ts      # Interface
│           ├── loc/
│           │   ├── en-us.js                   # Localization
│           │   └── mystrings.d.ts             # Localization types
│           ├── SdlcPlaybookWebPart.ts         # Web part entry
│           └── SdlcPlaybookWebPart.manifest.json
├── package.json
├── tsconfig.json
├── gulpfile.js
└── .gitignore
```

## 🚀 Build & Deploy Instructions

### Prerequisites

1. **Node.js** (v16.13.0 or higher)
   ```bash
   node --version
   ```

2. **npm** (comes with Node.js)
   ```bash
   npm --version
   ```

3. **Yeoman and SharePoint Generator** (optional, for modifications)
   ```bash
   npm install -g yo @microsoft/generator-sharepoint
   ```

### Step 1: Install Dependencies

Open PowerShell/Terminal in the `spfx-solution` folder:

```powershell
cd "c:\VS Code\SDLC PLaybook\spfx-solution"
npm install
```

This will install all required packages (~5-10 minutes first time).

### Step 2: Build the Solution

```powershell
gulp build
```

This compiles TypeScript and creates the bundle.

### Step 3: Package for Production

```powershell
gulp bundle --ship
gulp package-solution --ship
```

This creates the `.sppkg` file in the `sharepoint/solution/` folder.

**Output:** `sdlc-playbook.sppkg` (ready for deployment!)

### Step 4: Deploy to SharePoint

#### Option A: App Catalog Deployment (Recommended)

1. **Upload to App Catalog:**
   - Go to your SharePoint Admin Center
   - Navigate to **More features** → **Apps** → **App Catalog**
   - Click **Apps for SharePoint**
   - Upload `sdlc-playbook.sppkg`
   - Check "Make this solution available to all sites"
   - Click **Deploy**

2. **Add to Site:**
   - Go to your SharePoint site
   - Click **Settings** (gear icon) → **Add an app**
   - Find "SDLC Playbook" and click **Add**

3. **Add Web Part to Page:**
   - Edit any SharePoint page
   - Click **+** to add a web part
   - Search for "SDLC Playbook"
   - Add it to the page
   - **Publish the page**

#### Option B: Site Collection App Catalog

1. Enable site collection app catalog on your site
2. Upload `.sppkg` to site collection app catalog
3. Add web part to page

## 🔧 Development

### Local Workbench Testing

```powershell
gulp serve
```

This opens the local SharePoint Workbench at `https://localhost:4321/temp/workbench.html`

### Test on Your SharePoint Site

Edit `config/serve.json` and update:
```json
{
  "initialPage": "https://YOUR-TENANT.sharepoint.com/sites/YOUR-SITE/_layouts/workbench.aspx"
}
```

Then run:
```powershell
gulp serve
```

## 📝 Configuration

### Update Solution Metadata

Edit `config/package-solution.json`:
- Change `solution.name` for different package name
- Update `developer.name` and `developer.websiteUrl`
- Modify version numbers

### Customize Styles

Edit `src/webparts/sdlcPlaybook/components/SdlcPlaybook.module.scss`

### Update Data

Edit `src/data/playbook-data.ts` to modify phases, tasks, or roles.

## 🎨 Features in SPFx Version

✅ Full React component architecture
✅ SharePoint property pane integration
✅ Teams compatibility (can be used in Teams tabs)
✅ Responsive design within SharePoint
✅ Same MBRDI branding as HTML version
✅ Role-based filtering
✅ Interactive task exploration

## 🔄 Update Process

When you need to update the playbook:

1. Make changes to source files
2. Increment version in `package-solution.json`
3. Run build and package commands
4. Upload new `.sppkg` to App Catalog
5. Users will see update prompt on pages with the web part

## 📊 Bundle Analysis

Check bundle size:
```powershell
gulp bundle --ship
# Look for bundle size in output
```

## 🐛 Troubleshooting

**Issue: `npm install` fails**
- Solution: Clear npm cache: `npm cache clean --force`
- Solution: Delete `node_modules` and retry

**Issue: Build errors**
- Solution: Run `gulp clean` then `gulp build`

**Issue: Web part doesn't appear**
- Solution: Verify `.sppkg` is deployed in App Catalog
- Solution: Refresh SharePoint page (Ctrl+F5)
- Solution: Check browser console for errors (F12)

**Issue: Styles not loading**
- Solution: Rebuild with `gulp clean && gulp bundle --ship`

## 📦 Package Information

- **Package Name:** sdlc-playbook-webpart
- **Version:** 1.0.0
- **SPFx Version:** 1.18.2
- **React Version:** 17.0.1
- **Node Version:** 16.13.0+

## 🔒 Permissions

This web part requires:
- No special permissions
- Runs in user context
- No external API calls

## 📱 Compatibility

- ✅ SharePoint Online
- ✅ SharePoint 2019+
- ✅ Microsoft Teams (as tab)
- ✅ Modern pages only
- ✅ Desktop, tablet, mobile responsive

## 📞 Support

For issues or questions:
1. Check browser console (F12) for errors
2. Verify Node.js and npm versions
3. Ensure all dependencies installed
4. Contact SharePoint admin for deployment assistance

## 🔗 Related Files

- **HTML Version:** `../website/` - Standalone version for testing
- **Excel Playbook:** `../SDLC_Playbook_LeanAgile_Checklist.xlsx`

## 📄 License

© 2026 Mercedes-Benz Research and Development India
For internal use only.

---

**Mercedes-Benz R&D India - Digital Engineering Excellence**
