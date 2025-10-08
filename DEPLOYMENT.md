# Deployment Guide 🚀

This guide will help you deploy the NUS NextBus Mock API to various hosting platforms.

## Prerequisites

- Git installed
- GitHub account
- Code pushed to a GitHub repository

## Option 1: Vercel (Recommended) ⚡

Vercel is the easiest and fastest way to deploy Node.js applications.

### Method A: Vercel Dashboard (No CLI needed)

1. **Go to [vercel.com](https://vercel.com) and sign in**
2. **Click "Add New" → "Project"**
3. **Import your GitHub repository**
4. **Vercel will auto-detect the configuration**
5. **Click "Deploy"**
6. **Done! Your API is live** 🎉

Your API will be available at: `https://your-project-name.vercel.app`

### Method B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd nus-nextbus-mock-api
vercel

# Follow the prompts
# Your API will be deployed!
```

### Vercel Environment Variables

If you need to set environment variables:
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add `PORT` or any other variables

---

## Option 2: Railway 🚂

Railway offers free hosting with a generous free tier.

### Method A: Railway Dashboard

1. **Go to [railway.app](https://railway.app)**
2. **Sign in with GitHub**
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your repository**
6. **Railway will automatically detect Node.js**
7. **Click "Deploy"**
8. **Generate a domain in Settings**

### Method B: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up

# Generate domain
railway domain
```

Your API will be available at: `https://your-project.up.railway.app`

---

## Option 3: Render 🎨

Render provides free hosting for web services.

### Render Dashboard

1. **Go to [render.com](https://render.com)**
2. **Sign in with GitHub**
3. **Click "New" → "Web Service"**
4. **Connect your GitHub repository**
5. **Configure:**
   - **Name:** `nus-nextbus-mock-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. **Click "Create Web Service"**
7. **Wait for deployment** (takes a few minutes)

Render will automatically use the `render.yaml` configuration if present.

Your API will be available at: `https://nus-nextbus-mock-api.onrender.com`

### Render Free Tier Notes

- Services spin down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- Perfect for development and testing

---

## Option 4: Heroku 💜

Heroku is a classic platform for deploying Node.js apps.

### Heroku CLI Deployment

```bash
# Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create nus-nextbus-mock-api

# Deploy
git push heroku main

# Open your app
heroku open
```

Your API will be available at: `https://nus-nextbus-mock-api.herokuapp.com`

### Heroku Notes

- Free tier requires credit card verification
- Apps sleep after 30 minutes of inactivity
- 550-1000 free dyno hours per month

---

## Option 5: DigitalOcean App Platform 🌊

DigitalOcean offers a simple deployment experience.

1. **Go to [cloud.digitalocean.com](https://cloud.digitalocean.com)**
2. **Click "Apps" → "Create App"**
3. **Connect GitHub repository**
4. **Configure:**
   - **Type:** Web Service
   - **Run Command:** `npm start`
5. **Choose plan** (Basic - $5/month or trial)
6. **Click "Launch App"**

---

## Option 6: Self-Hosted / VPS 🖥️

Deploy to your own server (AWS EC2, DigitalOcean Droplet, etc.)

### Using PM2 (Process Manager)

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone your repository
git clone https://github.com/yourusername/nus-nextbus-mock-api.git
cd nus-nextbus-mock-api

# Install dependencies
npm install

# Install PM2
npm install -g pm2

# Start the app
pm2 start server.js --name nus-nextbus-api

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup

# Check status
pm2 status
```

### Setup Nginx Reverse Proxy

```nginx
# /etc/nginx/sites-available/nextbus-api
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/nextbus-api /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Post-Deployment Checklist ✅

After deploying to any platform:

1. **Test the API:**
   ```bash
   curl https://your-deployed-url.com/BusStops
   ```

2. **Update your frontend:**
   ```javascript
   const API_BASE = 'https://your-deployed-url.com';
   ```

3. **Enable CORS** (if needed):
   - The server has CORS enabled by default
   - If you face issues, check your hosting platform's settings

4. **Monitor your app:**
   - Check logs for errors
   - Monitor response times
   - Set up uptime monitoring (e.g., UptimeRobot)

5. **Set up custom domain** (optional):
   - Most platforms allow custom domains
   - Add your domain in platform settings
   - Update DNS records

---

## Environment Variables 🔧

For production deployments, you may want to set:

- `PORT` - Server port (usually auto-set by platform)
- `NODE_ENV=production` - Enable production mode

---

## Troubleshooting 🔍

### Build Fails

- Check Node.js version (requires >= 14.0.0)
- Ensure `package.json` is properly configured
- Check build logs for specific errors

### App Crashes on Start

- Check if `PORT` environment variable is set correctly
- Review startup logs
- Ensure all dependencies are installed

### CORS Errors

- CORS is enabled by default in the server
- If issues persist, check browser console
- Ensure your frontend uses the correct API URL

### Slow Response Times

- Free tiers often have cold starts
- Consider upgrading to paid tier for better performance
- Use a CDN for static assets

---

## Comparison of Platforms 📊

| Platform | Free Tier | Cold Start | Ease of Use | Best For |
|----------|-----------|------------|-------------|----------|
| **Vercel** | ✅ Generous | ⚡ None | ⭐⭐⭐⭐⭐ | Quick deployments |
| **Railway** | ✅ $5 credit | ⚡ Minimal | ⭐⭐⭐⭐ | Development |
| **Render** | ✅ Limited | 🐌 Slow | ⭐⭐⭐⭐ | Small projects |
| **Heroku** | ✅ Limited | 🐌 30 sec | ⭐⭐⭐ | Traditional apps |
| **DigitalOcean** | ❌ $5/month | ⚡ None | ⭐⭐⭐ | Production |
| **Self-Hosted** | 💰 Variable | ⚡ None | ⭐⭐ | Full control |

---

## Recommendations 💡

- **For quick testing:** Use Vercel
- **For development:** Use Railway or Render
- **For production:** Use DigitalOcean or self-hosted
- **For learning:** Try multiple platforms!

---

## Getting Help 🆘

If you encounter issues:

1. Check platform documentation
2. Review server logs
3. Test locally first
4. Check GitHub issues

---

**Happy Deploying! 🚀**
