
# Deployment Guide for AI Model Benchmark Battle

This document provides step-by-step instructions to deploy this project to GitHub Pages.

## Prerequisites

- [GitHub](https://github.com/) account
- [Git](https://git-scm.com/downloads) installed on your computer
- [Node.js](https://nodejs.org/) (version 16 or higher)

## Step 1: Create a new GitHub repository

1. Go to [GitHub](https://github.com/) and log in to your account
2. Click on the "+" button in the top right corner and select "New repository"
3. Name your repository: `ai-model-benchmark-battle`
4. Make sure it's set to "Public"
5. Click "Create repository"

## Step 2: Push your code to GitHub

Open a terminal/command prompt and run these commands:

```bash
# Initialize Git repository (if not already done)
git init

# Add all files to staging
git add .

# Commit your changes
git commit -m "Initial commit"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/ai-model-benchmark-battle.git
# (Replace YOUR_USERNAME with your actual GitHub username)

# Push code to GitHub
git push -u origin main
# (If your default branch is "master" use that instead of "main")
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to the "GitHub Pages" section (or click on "Pages" in the sidebar)
4. Under "Source", select "GitHub Actions"
5. GitHub will automatically use the workflow file already in your repository

## Step 4: Verify deployment

1. Go back to the "Actions" tab in your repository
2. You should see a workflow run in progress (or completed)
3. Once completed, you'll see a link to your deployed site
4. Your site will be available at: `https://YOUR_USERNAME.github.io/ai-model-benchmark-battle/`

## Running locally

If you want to run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

This will start the development server at [http://localhost:8080](http://localhost:8080)
