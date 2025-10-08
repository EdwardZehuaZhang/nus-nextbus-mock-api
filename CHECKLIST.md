# ✅ Setup Checklist

Use this checklist to ensure everything is working correctly!

---

## 📦 Installation

- [ ] Navigate to project folder: `cd nus-nextbus-mock-api`
- [ ] Run `npm install` (should install 103+ packages)
- [ ] No errors during installation
- [ ] `node_modules` folder created

---

## 🚀 Local Server

- [ ] Run `npm start`
- [ ] Server starts successfully
- [ ] Console shows: "🚌 NUS NextBus Mock API Server running on port 3000"
- [ ] No error messages

---

## 🧪 Test Endpoints

### Browser Testing
- [ ] Visit `http://localhost:3000` in browser
- [ ] See API info response (list of endpoints)
- [ ] Open `test.html` in browser
- [ ] Interactive tester loads correctly
- [ ] Click "Test" button on any endpoint
- [ ] See response with green success badge
- [ ] JSON response displays correctly

### Test All Endpoints
- [ ] `/publicity` - Returns banners
- [ ] `/BusStops` - Returns 15 bus stops
- [ ] `/PickupPoint?route_code=A1` - Returns pickup points
- [ ] `/ShuttleService?busstopname=UTOWN` - Returns shuttle arrivals
- [ ] `/ActiveBus?route_code=A1` - Returns active buses
- [ ] `/BusLocation?veh_plate=PA1234A` - Returns bus location
- [ ] `/RouteMinMaxTime?route_code=A1` - Returns schedule
- [ ] `/ServiceDescription` - Returns all routes
- [ ] `/Announcements` - Returns announcements
- [ ] `/TickerTapes` - Returns ticker tapes
- [ ] `/CheckPoint?route_code=A1` - Returns checkpoints

---

## 📚 Documentation

- [ ] `README.md` - Complete documentation exists
- [ ] `QUICKSTART.md` - Quick start guide exists
- [ ] `DEPLOYMENT.md` - Deployment guide exists
- [ ] `API.md` - API reference exists
- [ ] `SUMMARY.md` - Summary document exists
- [ ] All markdown files are readable

---

## 🔧 Configuration Files

- [ ] `package.json` - Has correct dependencies
- [ ] `server.js` - Main server file exists
- [ ] `mockData.js` - Mock data file exists
- [ ] `vercel.json` - Vercel config exists
- [ ] `railway.json` - Railway config exists
- [ ] `render.yaml` - Render config exists
- [ ] `Procfile` - Heroku config exists
- [ ] `.gitignore` - Git ignore file exists

---

## 💻 Frontend Integration

- [ ] Can make fetch request from JavaScript
- [ ] CORS works (no CORS errors in console)
- [ ] Can parse JSON responses
- [ ] Data structure matches expectations

### Test Frontend Connection
```javascript
// Try this in browser console:
fetch('http://localhost:3000/BusStops')
  .then(res => res.json())
  .then(data => console.log(data))
```

- [ ] Above code works without errors
- [ ] Console shows bus stops data

---

## 🌐 Deployment Preparation

### Vercel
- [ ] Vercel CLI installed: `npm install -g vercel`
- [ ] Can run `vercel --version`
- [ ] `vercel.json` exists
- [ ] Ready to run `vercel` command

### Railway
- [ ] Railway CLI installed (optional)
- [ ] `railway.json` exists
- [ ] Can access railway.app

### Render
- [ ] Can access render.com
- [ ] `render.yaml` exists
- [ ] GitHub repo connected (optional)

### Heroku
- [ ] Heroku CLI installed (optional)
- [ ] `Procfile` exists
- [ ] Can run `heroku --version` (optional)

---

## 📊 Mock Data Verification

- [ ] Bus stops include: UTOWN, PGP, KRB, CENLIB
- [ ] Routes include: A1, A2, D1, D2, BTC
- [ ] Arrival times are realistic (-1 to 900 seconds)
- [ ] Passenger loads show: Low/Medium/High
- [ ] Bus coordinates are within NUS campus
- [ ] Vehicle plates exist: PA1234A, PA5678B, etc.

---

## 🛠️ Optional Enhancements

- [ ] Set up custom environment variables (`.env` file)
- [ ] Enable authentication if needed
- [ ] Customize mock data for your use case
- [ ] Set up GitHub repository
- [ ] Set up CI/CD with GitHub Actions
- [ ] Configure custom domain (after deployment)

---

## 🚨 Troubleshooting

### If server won't start:
- [ ] Check if port 3000 is already in use
- [ ] Try: `PORT=4000 npm start`
- [ ] Check for Node.js installation: `node --version`
- [ ] Reinstall dependencies: `rm -rf node_modules && npm install`

### If endpoints return errors:
- [ ] Check server console for error messages
- [ ] Verify request format (query parameters)
- [ ] Check network tab in browser DevTools
- [ ] Ensure server is running

### If CORS errors occur:
- [ ] Check browser console for exact error
- [ ] Verify server is running on correct port
- [ ] Clear browser cache
- [ ] CORS should work by default (it's enabled)

---

## ✅ Final Verification

Run all these commands successfully:

```bash
# Install
npm install

# Start server
npm start

# In another terminal (PowerShell):
Invoke-RestMethod -Uri "http://localhost:3000/BusStops"
Invoke-RestMethod -Uri "http://localhost:3000/ServiceDescription"
Invoke-RestMethod -Uri "http://localhost:3000/ShuttleService?busstopname=UTOWN"
```

- [ ] All commands work without errors
- [ ] JSON responses are returned
- [ ] Data looks correct

---

## 🎉 Ready to Go!

If all items are checked, you're ready to:

1. ✅ Connect your frontend to the API
2. ✅ Build your redesigned app
3. ✅ Deploy when ready
4. ✅ Present your proposal!

---

## 📞 Quick Reference

**Start Server:**
```bash
npm start
```

**Test API:**
- Open `test.html` in browser
- Or visit `http://localhost:3000`

**Deploy:**
```bash
vercel
```

**Get Help:**
- Read `QUICKSTART.md` for quick start
- Read `README.md` for full documentation
- Read `API.md` for endpoint details
- Check `examples.js` for code samples

---

## 🎯 Next Steps

After completing this checklist:

1. **Develop** - Build your frontend using the mock API
2. **Test** - Use `test.html` to verify endpoints
3. **Deploy** - Use Vercel for instant deployment
4. **Present** - Show your working prototype!

---

**Last Updated:** October 8, 2025  
**Status:** ✅ Complete and Ready to Use
