# Deploying to Firebase Hosting

I have already built your project! The optimized files are in the `dist` folder.

To host this on Firebase, follow these steps:

## 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** and follow the setup steps.
3. You don't need Google Analytics for this simple page, so you can disable it if you want.

## 2. Deploy from your Terminal
Open your terminal (Command Prompt or PowerShell) in this project folder and run the following commands:

### Step A: Login
Authenticate with your Google account.
```bash
npx firebase login
```

### Step B: Initialize
Link this folder to your Firebase project.
```bash
npx firebase init hosting
```
**When asked:**
- **Project:** Select "Use an existing project" and choose the one you just created.
- **Public directory:** Type `dist` (This is crucial! The build output is in the `dist` folder).
- **Configure as a single-page app?** Type `y` (Yes).
- **Set up automatic builds and deploys?** Type `n` (No, unless you want GitHub actions).
- **File dist/index.html already exists. Overwrite?** Type `n` (No! Do not overwrite the built file).

### Step C: Deploy
Upload your site to the internet.
```bash
npx firebase deploy
```

After this, Firebase will give you a **Hosting URL** (e.g., `https://your-project.web.app`). You can share that link with everyone!
