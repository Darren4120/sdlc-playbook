# 🚀 SDLC Playbook - Complete Solution Package

**Mercedes-Benz R&D India - Digital Engineering Excellence**

---

## 📦 What You Have

This package contains **4 different versions** of the SDLC Playbook, each serving different purposes:

### 1. 📄 HTML Website (Interactive) - **READY TO USE**
- **Location:** [`website/`](website/) folder
- **Files:** index.html, styles.css, playbook-data.js, script.js
- **Features:** Fully interactive, role-based filtering, futuristic UI
- **Use for:** Quick testing, demos, presentations, offline access
- **Deploy:** Upload to SharePoint Site Assets or any web server
- **Test now:** Open `website/index.html` in your browser!

### 2. 📦 SPFx Package (SharePoint Production) - **NEEDS BUILD**
- **Location:** [`spfx-solution/`](spfx-solution/) folder
- **Output:** `.sppkg` file for SharePoint App Catalog
- **Features:** Enterprise-grade, governance, Teams compatible
- **Use for:** Official SharePoint deployment with IT approval
- **Requires:** Node.js 16+, npm, build process
- **Build with:** Run [`Build-SPFx-Package.ps1`](Build-SPFx-Package.ps1)

### 3. 📊 Excel Checklists (Downloadable)
- **Generic:** [`SDLC_Playbook_Checklist.xlsx`](SDLC_Playbook_Checklist.xlsx) - Traditional SDLC
- **Custom:** [`SDLC_Playbook_LeanAgile_Checklist.xlsx`](SDLC_Playbook_LeanAgile_Checklist.xlsx) - Your Lean-Agile version
- **Features:** Printable, editable, 100+ tasks with columns for status tracking
- **Use for:** Offline checklists, project tracking, team workshops

### 4. 📝 Word Document (Reference)
- **File:** [`SDLC Playbook.docx`](SDLC Playbook.docx)
- **Purpose:** Your original draft document
- **Use for:** Reference, documentation updates

---

## 🎯 Quick Decision Guide

**Choose the right version for your needs:**

| **Scenario** | **Use This** |
|-------------|-------------|
| "I want to test it RIGHT NOW" | HTML Website (website/index.html) |
| "I need official SharePoint deployment" | SPFx Package (build required) |
| "I want a printable checklist" | Excel files |
| "I need offline access" | HTML Website or Excel |
| "Show it in a meeting quickly" | HTML Website |
| "Deploy across organization" | SPFx Package |
| "IT approval required" | SPFx Package |
| "Use in Microsoft Teams" | SPFx Package |

---

## 🚀 Quick Start Options

### Option A: Test HTML Version (30 seconds)
1. Open `website/index.html` in your browser
2. Select your role and phase
3. Click "Launch Playbook"
4. ✅ Done!

### Option B: Build SPFx Package (10 minutes)
1. Install Node.js 16+ from [nodejs.org](https://nodejs.org)
2. Run [`Build-SPFx-Package.ps1`](Build-SPFx-Package.ps1)
3. Choose option 1 (install dependencies)
4. Choose option 3 (build production package)
5. Find `.sppkg` in `spfx-solution/sharepoint/solution/`
6. Upload to SharePoint App Catalog

### Option C: Use Excel Checklist (Immediately)
1. Open either Excel file
2. Print or use digitally
3. Track your SDLC progress
4. ✅ Done!

---

## 📚 Documentation

Comprehensive guides included:

- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment instructions for all versions
- **[website/README.md](website/README.md)** - HTML version details and SharePoint simple deployment
- **[spfx-solution/README.md](spfx-solution/README.md)** - SPFx technical documentation

---

## 🛠️ Build Tools Provided

### PowerShell Scripts:
- **[Build-SPFx-Package.ps1](Build-SPFx-Package.ps1)** - Interactive menu to build SPFx package
- **[Create-Custom-SDLC-Playbook.ps1](Create-Custom-SDLC-Playbook.ps1)** - Generated your custom Excel
- **[Create-SDLC-Playbook.ps1](Create-SDLC-Playbook.ps1)** - Generated generic Excel

---

## 🎨 Features & Design

### Mercedes-Benz MBRDI Branding
- **Colors:** Dark Blue (#00305E), Black (#000000), Golden (#D4AF37)
- **Fonts:** Orbitron (headings), Rajdhani (UI), Roboto (body)
- **Style:** Futuristic, premium, automotive-inspired
- **Responsive:** Desktop, tablet, mobile optimized

### Content Coverage
- **5 SDLC Phases:**
  1. Discovery – Understanding & Aligning
  2. Build & Test – Built-in Quality
  3. Continuous Deployment – Validating & Staging
  4. Release on Demand – Delivering Value
  5. Cross-Cutting Principles

- **100+ Tasks** - Detailed actionable items
- **10+ Roles** - Product Owner, Developer, DevOps, QA, etc.
- **Role Filtering** - See only tasks relevant to your role

### Interactive Features (HTML & SPFx)
✅ Role-based task filtering  
✅ Expandable task cards with descriptions  
✅ Phase navigation  
✅ Smooth animations  
✅ Loading screens  
✅ Responsive design  
✅ Click-to-reveal task details  

---

## 📂 Complete File Structure

```
c:\VS Code\SDLC PLaybook\
│
├── 📄 website/                                    # HTML Version
│   ├── index.html                                 # Main page
│   ├── styles.css                                 # MBRDI styles
│   ├── playbook-data.js                          # All SDLC data
│   ├── script.js                                 # Interactivity
│   └── README.md                                 # Documentation
│
├── 📦 spfx-solution/                             # SPFx Version
│   ├── src/                                      # Source code
│   │   ├── webparts/
│   │   │   └── sdlcPlaybook/
│   │   │       ├── components/
│   │   │       │   ├── SdlcPlaybook.tsx         # React component
│   │   │       │   ├── SdlcPlaybook.module.scss # Styles
│   │   │       │   └── ISdlcPlaybookProps.ts    # TypeScript interface
│   │   │       ├── loc/                          # Localization
│   │   │       └── SdlcPlaybookWebPart.ts       # Web part
│   │   └── data/
│   │       └── playbook-data.ts                  # SDLC data (TypeScript)
│   ├── config/                                   # Build configuration
│   ├── sharepoint/
│   │   └── solution/
│   │       └── sdlc-playbook.sppkg              # ← Output package (after build)
│   ├── package.json                              # Dependencies
│   ├── tsconfig.json                             # TypeScript config
│   ├── gulpfile.js                               # Build tasks
│   └── README.md                                 # Technical docs
│
├── 📊 SDLC_Playbook_Checklist.xlsx               # Generic Excel
├── 📊 SDLC_Playbook_LeanAgile_Checklist.xlsx     # Custom Excel
├── 📝 SDLC Playbook.docx                         # Original Word doc
│
├── 🔧 Build-SPFx-Package.ps1                     # SPFx build script
├── 🔧 Create-Custom-SDLC-Playbook.ps1            # Excel generator
├── 🔧 Create-SDLC-Playbook.ps1                   # Excel generator
│
├── 📖 DEPLOYMENT_GUIDE.md                        # Complete deployment guide
└── 📖 README.md                                  # This file
```

---

## 🔐 Security & Compliance

✅ **No External Dependencies** - All data is local  
✅ **No Data Collection** - Privacy-first design  
✅ **No API Calls** - Fully self-contained  
✅ **Corporate Safe** - Suitable for internal use  
✅ **Open Source Friendly** - Easy to audit code  

---

## 🔄 Customization

All versions are fully customizable:

### Change Content:
- **HTML:** Edit `website/playbook-data.js`
- **SPFx:** Edit `spfx-solution/src/data/playbook-data.ts`, rebuild
- **Excel:** Edit cells directly

### Change Colors:
- **HTML:** Edit CSS variables in `website/styles.css`
- **SPFx:** Edit `spfx-solution/src/webparts/.../SdlcPlaybook.module.scss`

### Add Roles/Phases:
- Update `roleMapping` in data files
- Add dropdown options in HTML/React components

---

## 📞 Support & Troubleshooting

### Common Questions:

**Q: Which version should I use?**  
A: Start with HTML version for testing. Use SPFx for official deployment.

**Q: Do I need to build the HTML version?**  
A: No! It's ready to use immediately.

**Q: How do I build the SPFx package?**  
A: Run `Build-SPFx-Package.ps1` and follow the menu.

**Q: Can I use this in Microsoft Teams?**  
A: Yes! The SPFx version works as a Teams tab.

**Q: How do I update content?**  
A: Edit the data files, then re-deploy or rebuild.

### Get Help:
1. Read [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
2. Check browser console (F12) for errors
3. Verify Node.js version: `node --version`
4. Clear browser cache
5. Contact SharePoint administrator

---

## 🎓 Learning Resources

- **For Users:** Open HTML version and explore
- **For Developers:** Review source code in `website/` folder
- **For Admins:** Read `spfx-solution/README.md`

---

## 📊 Comparison Matrix

| **Feature** | **HTML** | **SPFx** | **Excel** |
|------------|----------|----------|-----------|
| **Ready to Use** | ✅ Yes | ❌ Needs build | ✅ Yes |
| **Interactive** | ✅ Yes | ✅ Yes | ❌ No |
| **Role Filtering** | ✅ Yes | ✅ Yes | ⚠️ Manual |
| **SharePoint Native** | ⚠️ Simple | ✅ Full | ❌ No |
| **Offline Access** | ✅ Yes | ❌ No | ✅ Yes |
| **Teams Compatible** | ❌ No | ✅ Yes | ❌ No |
| **Printable** | ⚠️ Via browser | ⚠️ Via browser | ✅ Yes |
| **Governance** | ❌ No | ✅ Yes | ❌ No |
| **IT Approval** | ⚠️ Sometimes | ✅ Recommended | ❌ Not needed |

---

## 🎉 What's Next?

### Immediate Actions:
1. ✅ **Test HTML version** - Open `website/index.html`
2. ✅ **Review Excel** - Open either `.xlsx` file
3. ✅ **Read deployment guide** - Open `DEPLOYMENT_GUIDE.md`

### For Production:
1. Decide: HTML simple upload OR SPFx package
2. If SPFx: Run `Build-SPFx-Package.ps1`
3. Deploy to SharePoint following guide
4. Share with team

### Customization:
1. Review your organization's requirements
2. Customize colors, roles, or tasks
3. Test changes locally
4. Re-deploy

---

## 📄 License

© 2026 Mercedes-Benz Research and Development India  
**For internal use only.**

This playbook is designed for MBRDI and its partners. All Mercedes-Benz branding and intellectual property rights remain with Daimler AG / Mercedes-Benz Group AG.

---

## 🌟 Credits

**Created for:** Mercedes-Benz Research and Development India  
**Framework:** Lean-Agile / SAFe Inspired  
**Methodology:** Build-Measure-Learn, DevSecOps, Continuous Everything  
**Version:** 1.0  
**Date:** April 2026  

---

**Mercedes-Benz R&D India**  
*Shaping the Future of Automotive Software*

---

### 🚀 Ready to Start?

1. **For Testing:** Open [`website/index.html`](website/index.html)
2. **For Deployment:** Read [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)
3. **For Building:** Run [`Build-SPFx-Package.ps1`](Build-SPFx-Package.ps1)

**Need help?** Check the documentation files or contact your SharePoint administrator.

---

*Last Updated: April 15, 2026*
