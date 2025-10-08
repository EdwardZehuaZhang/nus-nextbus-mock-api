const express = require('express');
const cors = require('cors');
const auth = require('basic-auth');
const mockData = require('./mockData');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Authentication Middleware
function authenticate(req, res, next) {
  const credentials = auth(req);
  
  // For mock purposes, accept any credentials or no credentials
  // In production, you'd validate against actual credentials
  if (!credentials && req.headers.authorization) {
    return res.status(401).send('Unauthorized Access');
  }
  
  // Allow requests without auth for easier testing
  next();
}

// Apply auth to all routes (optional - can be commented out for easier testing)
// app.use(authenticate);

// Helper function to get current timestamp
function getCurrentTimestamp() {
  return new Date().toISOString();
}

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'NUS NextBus Mock API',
    version: '2.0.0',
    endpoints: [
      '/publicity',
      '/BusStops',
      '/PickupPoint?route_code={code}',
      '/ShuttleService?busstopname={name}',
      '/ActiveBus?route_code={code}',
      '/BusLocation?veh_plate={plate}',
      '/RouteMinMaxTime?route_code={code}',
      '/ServiceDescription',
      '/Announcements',
      '/TickerTapes',
      '/CheckPoint?route_code={code}'
    ]
  });
});

// GET /publicity
app.get('/publicity', (req, res) => {
  res.json({
    banners: mockData.banners,
    frequency: 60
  });
});

// GET /BusStops
app.get('/BusStops', (req, res) => {
  res.json({
    BusStopsResult: {
      busstops: mockData.busStops
    }
  });
});

// GET /PickupPoint
app.get('/PickupPoint', (req, res) => {
  const routeCode = req.query.route_code;
  
  if (!routeCode) {
    return res.status(400).json({ error: 'route_code parameter is required' });
  }
  
  const pickupPoints = mockData.generatePickupPoints(routeCode);
  
  if (pickupPoints.length === 0) {
    return res.status(404).send('Service not found!');
  }
  
  res.json({
    PickupPointResult: {
      pickuppoint: pickupPoints
    }
  });
});

// GET /ShuttleService
app.get('/ShuttleService', (req, res) => {
  const busStopName = req.query.busstopname;
  
  if (!busStopName) {
    return res.status(400).json({ error: 'busstopname parameter is required' });
  }
  
  const shuttleService = mockData.generateShuttleServices(busStopName);
  
  if (!shuttleService) {
    return res.status(404).send('Bus stop not found!');
  }
  
  res.json({
    ShuttleServiceResult: {
      Timestamp: getCurrentTimestamp(),
      name: shuttleService.name,
      caption: shuttleService.caption,
      shuttles: shuttleService.shuttles
    }
  });
});

// GET /ActiveBus
app.get('/ActiveBus', (req, res) => {
  const routeCode = req.query.route_code;
  
  if (!routeCode) {
    return res.status(400).json({ error: 'route_code parameter is required' });
  }
  
  const activeBuses = mockData.generateActiveBuses(routeCode);
  
  if (activeBuses.length === 0 && !mockData.routes[routeCode]) {
    return res.status(404).send('Service not found!');
  }
  
  res.json({
    ActiveBusResult: {
      Timestamp: getCurrentTimestamp(),
      ActiveBusCount: activeBuses.length.toString(),
      activebus: activeBuses
    }
  });
});

// GET /BusLocation
app.get('/BusLocation', (req, res) => {
  const vehPlate = req.query.veh_plate;
  
  if (!vehPlate) {
    return res.status(400).json({ error: 'veh_plate parameter is required' });
  }
  
  // Check if vehicle plate exists
  if (!mockData.vehiclePlates.includes(vehPlate)) {
    return res.status(500).send(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>500 Internal Server Error</title>
<h1>Internal Server Error</h1>
<p>The server encountered an internal error and was unable to complete your request.  Either the server is overloaded or there is an error in the application.</p>`);
  }
  
  // Generate random location for the bus
  const randomStop = mockData.busStops[Math.floor(Math.random() * mockData.busStops.length)];
  
  res.json({
    BusLocationResult: {
      vehplate: vehPlate,
      lat: randomStop.latitude + (Math.random() - 0.5) * 0.002,
      lng: randomStop.longitude + (Math.random() - 0.5) * 0.002,
      speed: Math.floor(Math.random() * 40),
      direction: Math.random() > 0.5 ? 1 : 2,
      status: "true"
    }
  });
});

// GET /RouteMinMaxTime
app.get('/RouteMinMaxTime', (req, res) => {
  const routeCode = req.query.route_code;
  
  if (!routeCode) {
    return res.status(400).json({ error: 'route_code parameter is required' });
  }
  
  const route = mockData.routes[routeCode];
  
  if (!route) {
    return res.status(404).send('Service not found!');
  }
  
  res.json({
    RouteMinMaxTimeResult: {
      RouteMinMaxTime: route.schedules
    }
  });
});

// GET /ServiceDescription
app.get('/ServiceDescription', (req, res) => {
  const serviceDescriptions = Object.keys(mockData.routes).map(routeCode => ({
    Route: routeCode,
    RouteDescription: mockData.routes[routeCode].description,
    Color: mockData.routes[routeCode].color
  }));
  
  res.json({
    ServiceDescriptionResult: {
      ServiceDescription: serviceDescriptions
    }
  });
});

// GET /Announcements
app.get('/Announcements', (req, res) => {
  res.json({
    AnnouncementsResult: {
      Announcement: mockData.announcements,
      TimeStamp: getCurrentTimestamp()
    }
  });
});

// GET /TickerTapes
app.get('/TickerTapes', (req, res) => {
  res.json({
    TickerTapesResult: {
      TickerTape: mockData.tickerTapes,
      TimeStamp: getCurrentTimestamp()
    }
  });
});

// GET /CheckPoint
app.get('/CheckPoint', (req, res) => {
  const routeCode = req.query.route_code;
  
  if (!routeCode) {
    return res.status(400).json({ error: 'route_code parameter is required' });
  }
  
  const checkpoints = mockData.generateCheckpoints(routeCode);
  
  if (checkpoints.length === 0) {
    return res.status(404).send('Service not found!');
  }
  
  res.json({
    CheckPointResult: {
      CheckPoint: checkpoints
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>500 Internal Server Error</title>
<h1>Internal Server Error</h1>
<p>The server encountered an internal error and was unable to complete your request.  Either the server is overloaded or there is an error in the application.</p>`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚌 NUS NextBus Mock API Server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`\n📚 Available endpoints:`);
  console.log(`   GET /publicity`);
  console.log(`   GET /BusStops`);
  console.log(`   GET /PickupPoint?route_code=A1`);
  console.log(`   GET /ShuttleService?busstopname=UTOWN`);
  console.log(`   GET /ActiveBus?route_code=A1`);
  console.log(`   GET /BusLocation?veh_plate=PA1234A`);
  console.log(`   GET /RouteMinMaxTime?route_code=A1`);
  console.log(`   GET /ServiceDescription`);
  console.log(`   GET /Announcements`);
  console.log(`   GET /TickerTapes`);
  console.log(`   GET /CheckPoint?route_code=A1`);
  console.log(`\n🔑 Authentication is optional for testing`);
});

module.exports = app;
