# GitHub Pages Hosting Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name it: `sdlc-playbook` (or your preferred name)
4. Choose **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click **"Create repository"**

### Step 2: Push Your Code
Run these commands in PowerShell:

```powershell
cd "c:\VS Code\SDLC PLaybook"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - SDLC Playbook"

# Connect to your GitHub repo (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/website` (or `/root` if you want everything)
4. Click **Save**
5. Wait ~2 minutes

✅ **Your site will be live at:**  
`https://YOUR-USERNAME.github.io/YOUR-REPO/`

If you selected `/website` folder:  
`https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## 🔄 Updating Your Site

When you make changes:

```powershell
cd "c:\VS Code\SDLC PLaybook"

# Edit your files (e.g., website/playbook-data.js)

# Add changes
git add .

# Commit with message
git commit -m "Updated playbook data"

# Push to GitHub
git push

# Wait 1-2 minutes for GitHub Pages to rebuild
```

---

## 🎯 Alternative Git Hosting Options

### Option 1: GitHub Pages (Recommended - Free)
- ✅ Free for public repos
- ✅ Custom domain support
- ✅ HTTPS included
- ✅ Easy setup
- ⚠️ Must be public repo (or pay for GitHub Pro)
- **URL:** `yourusername.github.io/repo-name`

### Option 2: GitLab Pages
```powershell
# After creating GitLab repo
git remote set-url origin https://gitlab.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
- ✅ Works with private repos (free)
- ✅ More CI/CD control
- Requires `.gitlab-ci.yml` file (see below)
- **URL:** `yourusername.gitlab.io/repo-name`

### Option 3: Azure Static Web Apps
```powershell
# Push to Azure DevOps or GitHub
# Then create Static Web App in Azure Portal
```
- ✅ Enterprise-grade
- ✅ Azure AD integration
- ✅ Custom domains
- 💰 Requires Azure subscription
- **URL:** Your custom domain

### Option 4: Netlify (Via Git)
1. Push code to GitHub/GitLab
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Publish directory: `website`
6. Click "Deploy"

- ✅ Free tier available
- ✅ Works with private repos
- ✅ Instant deployments
- ✅ Custom domains
- **URL:** `your-site.netlify.app`

---

## 📝 For GitLab Pages (if using GitLab)

Create `.gitlab-ci.yml` in root folder:

```yaml
pages:
  stage: deploy
  script:
    - mkdir -p public
    - cp -r website/* public/
  artifacts:
    paths:
      - public
  only:
    - main
```

---

## 🔒 Private Repository Options

If you need **private repos** with hosting:

1. **GitLab Pages** - Free with private repos
2. **Netlify** - Free tier supports private repos
3. **Vercel** - Free tier supports private repos
4. **GitHub Pages** - Requires GitHub Pro ($4/month)

---

## 🌐 Custom Domain Setup (Optional)

### For GitHub Pages:
1. Buy domain (e.g., from Namecheap, GoDaddy)
2. In your repo: **Settings** → **Pages** → **Custom domain**
3. Enter your domain: `playbook.yourcompany.com`
4. In your domain registrar DNS settings, add:
   ```
   Type: CNAME
   Name: playbook (or www)
   Value: YOUR-USERNAME.github.io
   ```
5. Wait for DNS propagation (~1 hour)

---

## 🐛 Troubleshooting

**Problem:** 404 error on GitHub Pages
- ✅ Check Settings → Pages shows "Your site is live"
- ✅ Wait 2-5 minutes after first deployment
- ✅ Ensure `/website` folder is selected if using that option
- ✅ Check `index.html` is in the root of selected folder

**Problem:** Styles/JS not loading
- ✅ Check file paths are relative (not absolute)
- ✅ In your HTML, use: `./styles.css` not `/styles.css`

**Problem:** Git push asks for credentials
```powershell
# Use Personal Access Token (PAT) instead of password
# Create PAT at: GitHub → Settings → Developer settings → Personal access tokens
# Or use SSH keys
```

---

## 📊 Comparing Hosting Options

| Feature | GitHub Pages | GitLab Pages | Netlify | Azure Static |
|---------|-------------|--------------|---------|--------------|
| **Cost** | Free (public) | Free | Free tier | Pay per use |
| **Private Repos** | ❌ (need Pro) | ✅ | ✅ | ✅ |
| **Custom Domain** | ✅ | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Build Time** | ~2 min | ~2 min | ~1 min | ~2 min |
| **Authentication** | ❌ | ❌ | ✅ (paid) | ✅ (Azure AD) |
| **Setup Difficulty** | ⭐ Easy | ⭐⭐ Medium | ⭐ Easy | ⭐⭐⭐ Hard |

---

## 🎓 Next Steps

1. **For quick public sharing:** Use GitHub Pages (this guide)
2. **For corporate/private:** Use GitLab Pages or Azure
3. **For simplest drag-drop:** Use Netlify (no git needed)

**Current Status:** ✅ Git initialized, ready to push!

**Your Next Command:**
```powershell
# After creating GitHub repo, run:
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
