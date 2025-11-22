# NUS NextBus Mock API 🚌

> **✨ Recently Updated (Nov 2025)**: This mock API has been completely renovated to match the actual NUS NextBus API 1-to-1. All response structures, fields, and data formats now accurately represent the real API.

A fully functional mock backend server for the NUS NextBus application, providing an accurate representation of the actual NUS NextBus API at `https://nnextbus.nus.edu.sg`. Perfect for frontend development and testing without requiring access credentials to the actual backend.

[![GitHub stars](https://img.shields.io/github/stars/EdwardZehuaZhang/nus-nextbus-mock-api)](https://github.com/EdwardZehuaZhang/nus-nextbus-mock-api/stargazers)

## Features ✨

- ✅ All 11 API endpoints implemented
- ✅ **Accurate 1-to-1 representation** of the real NUS NextBus API
- ✅ Real bus stop data (35 stops) from actual NUS campus
- ✅ Real route data (8 routes: A1, A2, BTC, D1, D2, E, K, L)
- ✅ **Realistic bus movement tracking** - Buses move along actual route checkpoints
- ✅ **Operating hours enforcement** - Service runs 7:00 AM to 11:00 PM
- ✅ **Dynamic arrival times** - Always shows accurate ETA (no "NA" values)
- ✅ Bus occupancy/crowding information with loadInfo
- ✅ Real announcements and ticker tapes from NUS
- ✅ Actual route schedules including special days
- ✅ CORS enabled for frontend integration
- ✅ Optional Basic Authentication
- ✅ Easy deployment to Vercel, Railway, or Render

## Quick Start 🚀

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **For development with auto-reload:**
   ```bash
   npm run dev
   ```

4. **Access the API:**
   ```
   http://localhost:3000
   ```

## API Endpoints 📍

### Base URL
- Local: `http://localhost:3000`
- Production: `https://your-deployment-url.com`

### Available Endpoints

| Endpoint | Method | Parameters | Description |
|----------|--------|------------|-------------|
| `/publicity` | GET | - | Get publicity banners and frequency |
| `/BusStops` | GET | - | Get list of all bus stops |
| `/PickupPoint` | GET | `route_code` | Get pickup points for a route |
| `/ShuttleService` | GET | `busstopname` | Get shuttle services at a bus stop |
| `/ActiveBus` | GET | `route_code` | Get active buses on a route |
| `/BusLocation` | GET | `veh_plate` | Get location of a specific bus |
| `/RouteMinMaxTime` | GET | `route_code` | Get route operating hours |
| `/ServiceDescription` | GET | - | Get descriptions of all routes |
| `/Announcements` | GET | - | Get system announcements |
| `/TickerTapes` | GET | - | Get ticker tape messages |
| `/CheckPoint` | GET | `route_code` | Get checkpoints for a route |

### Example Requests

**Get all bus stops:**
```bash
curl http://localhost:3000/BusStops
```

**Get shuttle service at University Town:**
```bash
curl http://localhost:3000/ShuttleService?busstopname=UTOWN
```

**Get active buses on route A1:**
```bash
curl http://localhost:3000/ActiveBus?route_code=A1
```

**Get pickup points for route A1:**
```bash
curl http://localhost:3000/PickupPoint?route_code=A1
```

**Get route operating times:**
```bash
curl http://localhost:3000/RouteMinMaxTime?route_code=A1
```

## Realistic Behavior 🎯

### Operating Hours
The mock API simulates real bus service hours:
- **Service Hours**: 7:00 AM - 11:00 PM daily
- **No buses outside hours**: API returns empty arrays after 11:00 PM and before 7:00 AM
- **Realistic for testing**: Perfect for testing edge cases in your frontend

### Bus Movement Tracking
Buses are tracked persistently across API calls:
- **Persistent state**: Same bus plates appear consistently
- **Route-based movement**: Buses move along actual route checkpoints
- **Time-based updates**: Positions update based on elapsed time (~20 km/h average)
- **Realistic ETAs**: Arrival times range from 1-30+ minutes, never "NA"

### Arrival Time Generation
- **First bus**: Typically 1-3 minutes away
- **Subsequent buses**: 5-12 minute intervals (realistic campus shuttle frequency)
- **Always available**: During operating hours, there are always buses coming
- **No "NA" values**: All arrival times show actual minutes or "Arr" if arriving now

## Available Routes 🚍

All 8 routes from the actual NUS NextBus system:
- **A1**: KRT > PGP > KR MRT > CLB > KRT
- **A2**: KRT > IT > Opp KR MRT > BIZ > KRT
- **BTC**: BTC > KR MRT > UT > KV > PGP > BTC
- **D1**: KRT > CLB > UT > EA > RH > KRT
- **D2**: KRT > RH > EA > UT > CLB > KRT
- **E**: KRT > YIH > CLB > PGP > KRT
- **K**: KRT > LT13 > AS5 > BIZ > PGP > KR MRT > CLB > KRT
- **L**: PGP > KR MRT > YIH > Museum > UT > CLB > PGP

## Bus Stops 📍

The API includes **35 bus stops** across NUS campus with exact coordinates from the real API:
- KRB (Kent Ridge Bus Terminal)
- PGP (Prince George's Park)
- KR-BT (Kent Ridge Bus Terminal)
- LT13, AS5, BIZ2
- Central Library (CLB)
- LT27, University Hall
- YIH (Yusof Ishak House)
- Museum, University Town
- Raffles Hall, Kent Vale
- COM2

## Deployment 🌐

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your API will be live!

**Or use the Vercel Dashboard:**
- Connect your GitHub repository
- Vercel will automatically detect the configuration
- Deploy with one click

### Deploy to Railway

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

**Or use Railway Dashboard:**
- Go to [railway.app](https://railway.app)
- Create new project from GitHub repo
- Deploy automatically

### Deploy to Render

1. **Go to [render.com](https://render.com)**
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Render will use the `render.yaml` configuration**
5. **Deploy!**

### Deploy to Heroku

1. **Install Heroku CLI**
2. **Deploy:**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

## Configuration ⚙️

### Environment Variables

You can set these in your deployment platform:

- `PORT`: Server port (default: 3000)

### Authentication

Basic authentication is implemented but **disabled by default** for easier testing. 

To enable authentication, uncomment this line in `server.js`:
```javascript
app.use(authenticate);
```

## Mock Data 📊

The server generates realistic mock data including:

- **Dynamic arrival times**: Buses arrive at random intervals (1-15 minutes)
- **Passenger load**: Random load levels (Low/Medium/High)
- **Bus positions**: Realistic GPS coordinates around NUS campus
- **Operating hours**: Different schedules for weekdays, Saturdays, and holidays
- **Multiple buses per route**: 2-4 buses operating on each route

## Response Examples 📄

### Get Shuttle Service
```json
{
  "ShuttleServiceResult": {
    "Timestamp": "2025-10-08T10:30:00.000Z",
    "name": "University Town",
    "caption": "University Town",
    "shuttles": [
      {
        "name": "A1",
        "arrivalTime": "180",
        "nextArrivalTime": "900",
        "arrivalTime_veh_plate": "PA1234A",
        "nextArrivalTime_veh_plate": "PA5678B",
        "passengers": "Low",
        "nextPassengers": "Medium"
      }
    ]
  }
}
```

### Get Active Buses
```json
{
  "ActiveBusResult": {
    "Timestamp": "2025-10-08T10:30:00.000Z",
    "ActiveBusCount": "3",
    "activebus": [
      {
        "veh_plate": "PA1234A",
        "lat": 1.30373,
        "lng": 103.77434,
        "speed": 25,
        "direction": 1
      }
    ]
  }
}
```

## Frontend Integration 💻

### JavaScript/Fetch
```javascript
const API_BASE = 'http://localhost:3000';

// Get shuttle service
async function getShuttleService(busStop) {
  const response = await fetch(`${API_BASE}/ShuttleService?busstopname=${busStop}`);
  const data = await response.json();
  return data.ShuttleServiceResult;
}

// Get active buses
async function getActiveBuses(routeCode) {
  const response = await fetch(`${API_BASE}/ActiveBus?route_code=${routeCode}`);
  const data = await response.json();
  return data.ActiveBusResult;
}
```

### React Example
```jsx
import { useEffect, useState } from 'react';

function BusInfo() {
  const [shuttles, setShuttles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ShuttleService?busstopname=UTOWN')
      .then(res => res.json())
      .then(data => setShuttles(data.ShuttleServiceResult.shuttles));
  }, []);

  return (
    <div>
      {shuttles.map(shuttle => (
        <div key={shuttle.name}>
          <h3>Route {shuttle.name}</h3>
          <p>Arriving in: {shuttle.arrivalTime}s</p>
          <p>Load: {shuttle.passengers}</p>
        </div>
      ))}
    </div>
  );
}
```

## Project Structure 📁

```
nus-nextbus-mock-api/
├── server.js           # Main Express server
├── mockData.js         # Mock data generators
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
├── railway.json        # Railway deployment config
├── render.yaml         # Render deployment config
├── Procfile           # Heroku deployment config
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Development 🛠️

### Adding New Routes

Edit `mockData.js` to add new bus routes:

```javascript
routes: {
  "NEW_ROUTE": {
    name: "NEW_ROUTE",
    description: "Route description",
    stops: ["STOP1", "STOP2"],
    schedules: [...]
  }
}
```

### Modifying Bus Stops

Add new bus stops in `mockData.js`:

```javascript
busStops: [
  {
    name: "NEWSTOP",
    caption: "New Bus Stop",
    ShortName: "NS",
    LongName: "New Bus Stop Name",
    latitude: 1.29xxx,
    longitude: 103.77xxx
  }
]
```

## Testing 🧪

You can test the API using:

- **Interactive Tester** (Easiest): Open `test.html` in your browser - beautiful UI, no setup needed!
- **Postman**: Import `postman_collection.json` for instant testing with all endpoints pre-configured
- **Browser**: Visit `http://localhost:3000` and navigate to endpoints
- **curl**: Use command line to test endpoints
- **Your frontend app**: Point your app to the mock API

## Troubleshooting 🔧

### Port already in use
```bash
# Change the port
PORT=4000 npm start
```

### CORS errors
The server has CORS enabled by default. If you still face issues, check your frontend configuration.

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Credits 📝

Based on the unofficial reverse-engineered NUS NextBus API specification by [Hu Jialun](https://github.com/SuibianP).

## License 📄

This is a mock API for development purposes. Please refer to the [original API disclaimer](https://github.com/SuibianP/nus-nextbus-new-api/blob/openapi-def/DISCLAIMER.md) for information about the actual NUS NextBus service.

## Contributing 🤝

Feel free to submit issues and enhancement requests!

## Support ❤️

If you find this useful, please star the repository!

---

**Happy Coding! 🚀**
