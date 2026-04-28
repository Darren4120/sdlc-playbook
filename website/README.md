# SDLC Playbook - Interactive Website

## 🎨 Design Theme
- **Mercedes-Benz MBRDI Branding**
- **Colors:** Dark Blue (#00305E), Black (#000000), Gold (#D4AF37)
- **Fonts:** Orbitron (headings), Rajdhani (UI), Roboto (body text)
- **Style:** Futuristic, premium, automotive-inspired

## 📁 Files Structure
```
website/
├── index.html              # Main HTML page
├── styles.css              # MBRDI-themed styles
├── playbook-data.js        # SDLC phases and tasks data
├── script.js               # Interactive functionality
└── README.md              # This file
```

## 🚀 Features
✅ **Role-Based Filtering** - Select your role to see relevant tasks
✅ **Phase Navigation** - Browse through 5 SDLC phases
✅ **Interactive UI** - Click tasks to expand and see details
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **Futuristic Animations** - Loading screen and smooth transitions
✅ **100+ Tasks** - Comprehensive Lean-Agile SDLC coverage

## 📋 Phases Covered
1. **Discovery** - Understanding & Aligning (35+ tasks)
2. **Build & Test** - Built-in Quality (30+ tasks)
3. **Continuous Deployment** - Validating & Staging (15+ tasks)
4. **Release on Demand** - Delivering Value (19+ tasks)
5. **Cross-Cutting Principles** - Foundational practices (16+ tasks)

## 👥 Supported Roles
- Product Owner
- Scrum Master / Agile Coach
- Tech Lead / Architect
- Developer
- QA Engineer
- DevOps Engineer
- Security Engineer
- UX Designer
- Business Analyst
- Project Manager
- View All Tasks

## 🌐 Deployment to SharePoint

### Method 1: SharePoint Page (Recommended)
1. **Create a new SharePoint page:**
   - Go to your SharePoint site
   - Click "New" > "Page"
   - Choose "Blank" page template
   - Name it "SDLC Playbook"

2. **Add Embed Web Part:**
   - Edit the page
   - Add an "Embed" web part
   - Click "Add embed code"

3. **Upload files to SharePoint:**
   - Upload all 4 files (index.html, styles.css, playbook-data.js, script.js) to a Document Library
   - Get the direct URL for index.html
   - Use the URL in an iframe:
   ```html
   <iframe src="YOUR_SHAREPOINT_URL/index.html" 
           width="100%" 
           height="900px" 
           frameborder="0" 
           style="border: none;">
   </iframe>
   ```

4. **Publish the page**

### Method 2: SharePoint Hosted App
1. **Create Site Assets folder structure:**
   - Go to "Site Contents" > "Site Assets"
   - Create folder: `SDLC-Playbook`
   - Upload all files to this folder

2. **Access the page:**
   - Navigate to: `https://yoursite.sharepoint.com/SiteAssets/SDLC-Playbook/index.html`

3. **Add as Site Navigation:**
   - Go to Site Settings > Navigation
   - Add link to the HTML page

### Method 3: Script Editor Web Part (Classic Sites)
1. **Edit a SharePoint page (Classic)**
2. **Add "Script Editor" web part**
3. **Click "Edit Snippet"**
4. **Paste the following code:**
   ```html
   <link rel="stylesheet" href="/SiteAssets/SDLC-Playbook/styles.css">
   <div id="playbook-container">
       <!-- Your HTML content here -->
   </div>
   <script src="/SiteAssets/SDLC-Playbook/playbook-data.js"></script>
   <script src="/SiteAssets/SDLC-Playbook/script.js"></script>
   ```

### Method 4: SPFx Web Part (Advanced)
For enterprise deployment, consider creating a SharePoint Framework (SPFx) web part:
1. Package the website as an SPFx solution
2. Deploy to App Catalog
3. Add to any modern SharePoint page

## 🔧 Local Testing
Open `index.html` in any modern browser:
- Chrome (recommended)
- Edge
- Firefox
- Safari

**Note:** Some features may require a web server due to CORS policies.

### Using Python Simple HTTP Server:
```bash
cd website
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Using Node.js http-server:
```bash
cd website
npx http-server -p 8000
```

## 🎯 Usage Instructions

### For End Users:
1. **Select Your Role** from the dropdown (e.g., Developer, Product Owner)
2. **Select SDLC Phase** you want to explore
3. **Click "LAUNCH PLAYBOOK"** button
4. **Browse Tasks** - Click any task card to see detailed description
5. **Navigate Back** - Use "Back to Home" button or press ESC key

### For Administrators:
- Edit `playbook-data.js` to customize tasks, roles, or phases
- Modify `styles.css` to adjust branding colors
- Update `index.html` for structural changes

## 📱 Responsive Breakpoints
- **Desktop:** 1024px and above (full experience)
- **Tablet:** 768px - 1023px (optimized layout)
- **Mobile:** Below 768px (single column, touch-friendly)

## 🎨 Customization

### Changing Colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --mb-black: #000000;
    --mb-dark-blue: #00305E;
    --mb-gold: #D4AF37;
    /* Modify these values */
}
```

### Adding New Roles:
1. Update `roleMapping` object in `playbook-data.js`
2. Add new `<option>` in `index.html` role dropdown

### Adding New Tasks:
Edit the respective phase in `playbook-data.js`:
```javascript
{
    title: 'Your new task',
    responsible: 'Role Name',
    deliverable: 'Task output',
    priority: 'high', // or 'medium'
    description: 'Detailed description'
}
```

## 🔒 Security Considerations
- No sensitive data is stored
- All data is client-side JavaScript
- No external API calls
- Safe for internal corporate use

## 🆘 Troubleshooting

**Issue:** Page doesn't load in SharePoint
- **Solution:** Ensure all file paths are correct and files are in the same directory

**Issue:** Styles not applying
- **Solution:** Check that styles.css is loaded. View browser console for errors.

**Issue:** Dropdown not working
- **Solution:** Ensure both playbook-data.js and script.js are loaded before interaction

**Issue:** Loading screen stuck
- **Solution:** Clear browser cache and reload page

## 📞 Support
For questions or issues:
- Check browser console for errors (F12)
- Verify all 4 files are uploaded
- Test in different browsers
- Contact your SharePoint administrator for deployment assistance

## 📄 License
© 2026 Mercedes-Benz Research and Development India
For internal use only.

## 🔄 Version History
- **v1.0 (2026-04-15)** - Initial release
  - 5 SDLC phases
  - 10+ roles
  - 100+ tasks
  - Futuristic MBRDI theme
  - Role-based filtering
  - Fully responsive design

---

**Built with ❤️ for Digital Engineering Excellence**
Mercedes-Benz R&D India - Shaping the Future of Automotive Software
