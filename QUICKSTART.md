# Quick Start Guide 🚀

Get your NUS NextBus Mock API up and running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Clone or Download
```bash
git clone https://github.com/yourusername/nus-nextbus-mock-api.git
cd nus-nextbus-mock-api
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Server
```bash
npm start
```

### Step 4: Test the API
Open your browser and go to:
```
http://localhost:3000
```

Or open `test.html` in your browser to use the interactive tester!

---

## 🧪 Test the API

### Method 1: Interactive Tester (Easiest)
1. Open `test.html` in your browser
2. Click any endpoint button to test
3. See the response instantly!

### Method 2: Browser
Just visit these URLs in your browser:
- http://localhost:3000/BusStops
- http://localhost:3000/ServiceDescription
- http://localhost:3000/ShuttleService?busstopname=UTOWN

### Method 3: Command Line (PowerShell)
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/BusStops"
```

### Method 4: Your Frontend
```javascript
fetch('http://localhost:3000/BusStops')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📱 Connect Your Frontend

Update your frontend to use the mock API:

```javascript
// Before (actual API - not accessible)
const API_BASE = 'https://nnextbus.nus.edu.sg';

// After (mock API)
const API_BASE = 'http://localhost:3000';

// Or after deployment
const API_BASE = 'https://your-app.vercel.app';
```

---

## 🌐 Deploy to Production

Deploy in **under 5 minutes** with Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (one command!)
vercel

# Follow the prompts and you're done!
```

Your API will be live at: `https://your-project.vercel.app`

---

## 📚 Available Endpoints

### Get All Bus Stops
```
GET /BusStops
```

### Get Shuttle Service at a Stop
```
GET /ShuttleService?busstopname=UTOWN
```

### Get Active Buses on Route
```
GET /ActiveBus?route_code=A1
```

### Get Service Descriptions
```
GET /ServiceDescription
```

### Get Pickup Points
```
GET /PickupPoint?route_code=A1
```

### Get Route Schedule
```
GET /RouteMinMaxTime?route_code=A1
```

### Get Bus Location
```
GET /BusLocation?veh_plate=PA1234A
```

### Get Announcements
```
GET /Announcements
```

See `README.md` for complete API documentation.

---

## 🎯 Common Use Cases

### 1. Get Bus Arrival Times
```javascript
const response = await fetch('http://localhost:3000/ShuttleService?busstopname=UTOWN');
const data = await response.json();
const shuttles = data.ShuttleServiceResult.shuttles;

shuttles.forEach(shuttle => {
  console.log(`${shuttle.name}: ${shuttle.arrivalTime}s`);
});
```

### 2. Display Bus Stops on Map
```javascript
const response = await fetch('http://localhost:3000/BusStops');
const data = await response.json();
const stops = data.BusStopsResult.busstops;

stops.forEach(stop => {
  addMarkerToMap(stop.latitude, stop.longitude, stop.caption);
});
```

### 3. Track Active Buses
```javascript
const response = await fetch('http://localhost:3000/ActiveBus?route_code=A1');
const data = await response.json();
const buses = data.ActiveBusResult.activebus;

buses.forEach(bus => {
  updateBusPosition(bus.veh_plate, bus.lat, bus.lng);
});
```

---

## 🔧 Customization

### Add More Routes
Edit `mockData.js`:
```javascript
routes: {
  "E1": {
    name: "E1",
    description: "Your custom route",
    stops: ["STOP1", "STOP2"],
    schedules: [...]
  }
}
```

### Add More Bus Stops
Edit `mockData.js`:
```javascript
busStops: [
  {
    name: "NEWSTOP",
    caption: "New Stop",
    latitude: 1.29xxx,
    longitude: 103.77xxx,
    // ...
  }
]
```

### Change Response Data
Edit the endpoint handlers in `server.js`

---

## 🐛 Troubleshooting

### Port Already in Use?
```bash
PORT=4000 npm start
```

### Can't Access from Frontend?
- Make sure CORS is enabled (it is by default)
- Check if server is running
- Verify the URL is correct

### Need to Reset Data?
Just restart the server - mock data regenerates on each request!

---

## 📖 Next Steps

1. ✅ **Test locally** with `test.html`
2. ✅ **Connect your frontend** to `http://localhost:3000`
3. ✅ **Deploy to Vercel** with `vercel`
4. ✅ **Update frontend** to use deployed URL
5. ✅ **Build your app!** 🎉

---

## 💡 Pro Tips

- Use `npm run dev` for auto-reload during development
- Check `examples.js` for code samples
- Read `DEPLOYMENT.md` for deployment options
- Open `test.html` to test all endpoints visually

---

## 🆘 Need Help?

- Check `README.md` for full documentation
- Review `examples.js` for code samples
- See `DEPLOYMENT.md` for hosting guides
- Look at `server.js` to understand the implementation

---

**Ready to build? Let's go! 🚀**
