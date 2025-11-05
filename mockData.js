// Mock data for NUS NextBus API - Updated to match actual NUS NextBus API
// Data sourced from actual API responses on 2025-11-05

// Actual bus stops from real API
const busStops = [
  {
    "caption": "Kent Ridge Bus Terminal",
    "name": "KRB",
    "LongName": "Kent Ridge Bus Terminal",
    "ShortName": "KR Bus Ter",
    "latitude": 1.294536,
    "longitude": 103.77
  },
  {
    "caption": "LT 13",
    "name": "LT13",
    "LongName": "LT 13",
    "ShortName": "LT 13",
    "latitude": 1.294552,
    "longitude": 103.770635
  },
  {
    "caption": "AS 5",
    "name": "AS5",
    "LongName": "AS 5",
    "ShortName": "AS 5",
    "latitude": 1.293619,
    "longitude": 103.771475
  },
  {
    "caption": "BIZ 2",
    "name": "BIZ2",
    "LongName": "BIZ 2",
    "ShortName": "BIZ 2",
    "latitude": 1.293273,
    "longitude": 103.775074
  },
  {
    "caption": "Opp TCOMS",
    "name": "TCOMS-OPP",
    "LongName": "Opp TCOMS",
    "ShortName": "Opp TCOMS",
    "latitude": 1.293789,
    "longitude": 103.776715
  },
  {
    "caption": "Prince George's Park",
    "name": "PGP",
    "LongName": "Prince George's Park",
    "ShortName": "PGP",
    "latitude": 1.291765,
    "longitude": 103.780419
  },
  {
    "caption": "Kent Ridge MRT",
    "name": "KR-MRT",
    "LongName": "Kent Ridge MRT",
    "ShortName": "KR MRT",
    "latitude": 1.29482,
    "longitude": 103.784413
  },
  {
    "caption": "LT 27",
    "name": "LT27",
    "LongName": "LT 27",
    "ShortName": "LT 27",
    "latitude": 1.297421,
    "longitude": 103.780941
  },
  {
    "caption": "University Hall",
    "name": "UHALL",
    "LongName": "University Hall",
    "ShortName": "UHall",
    "latitude": 1.297372,
    "longitude": 103.778075
  },
  {
    "caption": "Opp University Health Centre",
    "name": "UHC-OPP",
    "LongName": "Opp University Health Centre",
    "ShortName": "Opp UHC",
    "latitude": 1.298788,
    "longitude": 103.775612
  },
  {
    "caption": "Yusof Ishak House",
    "name": "YIH",
    "LongName": "Yusof Ishak House",
    "ShortName": "YIH",
    "latitude": 1.298885,
    "longitude": 103.774377
  },
  {
    "caption": "Central Library",
    "name": "CLB",
    "LongName": "Central Library",
    "ShortName": "CLB",
    "latitude": 1.296544,
    "longitude": 103.772569
  },
  {
    "caption": "Opp SDE 3",
    "name": "SDE3-OPP",
    "LongName": "Opp SDE 3",
    "ShortName": "Opp SDE 3",
    "latitude": 1.297799,
    "longitude": 103.769603
  },
  {
    "caption": "The Japanese Primary School",
    "name": "JP-SCH-16151",
    "LongName": "The Japanese Primary School",
    "ShortName": "Jpn Pr Sch",
    "latitude": 1.30077,
    "longitude": 103.769904
  },
  {
    "caption": "Kent Vale",
    "name": "KV",
    "LongName": "Kent Vale",
    "ShortName": "Kent Vale",
    "latitude": 1.301899,
    "longitude": 103.769455
  },
  {
    "caption": "Museum",
    "name": "MUSEUM",
    "LongName": "Museum",
    "ShortName": "Museum",
    "latitude": 1.301081,
    "longitude": 103.77369
  },
  {
    "caption": "University Health Centre",
    "name": "UHC",
    "LongName": "University Health Centre",
    "ShortName": "UHC",
    "latitude": 1.29891,
    "longitude": 103.776103
  },
  {
    "caption": "Opp University Hall",
    "name": "UHALL-OPP",
    "LongName": "Opp University Hall",
    "ShortName": "Opp UHall",
    "latitude": 1.297574,
    "longitude": 103.778088
  },
  {
    "caption": "S 17",
    "name": "S17",
    "LongName": "S 17",
    "ShortName": "S 17",
    "latitude": 1.297488,
    "longitude": 103.780707
  },
  {
    "caption": "Opp Kent Ridge MRT",
    "name": "KR-MRT-OPP",
    "LongName": "Opp Kent Ridge MRT",
    "ShortName": "Opp KR MRT",
    "latitude": 1.294962,
    "longitude": 103.784556
  },
  {
    "caption": "Prince George's Park Foyer",
    "name": "PGPR",
    "LongName": "Prince George's Park Foyer",
    "ShortName": "PGP Foyer",
    "latitude": 1.290994,
    "longitude": 103.781153
  },
  {
    "caption": "COM 3",
    "name": "COM3",
    "LongName": "COM 3",
    "ShortName": "COM 3",
    "latitude": 1.294431,
    "longitude": 103.775217
  },
  {
    "caption": "University Town",
    "name": "UTOWN",
    "LongName": "University Town",
    "ShortName": "UTown",
    "latitude": 1.303623,
    "longitude": 103.774388
  },
  {
    "caption": "TCOMS",
    "name": "TCOMS",
    "LongName": "TCOMS",
    "ShortName": "TCOMS",
    "latitude": 1.293654,
    "longitude": 103.776898
  },
  {
    "caption": "Opp HSSML",
    "name": "HSSML-OPP",
    "LongName": "Opp Hon Sui Sen Memorial Library",
    "ShortName": "Opp HSSML",
    "latitude": 1.292798,
    "longitude": 103.774978
  },
  {
    "caption": "Opp NUSS",
    "name": "NUSS-OPP",
    "LongName": "Opp NUSS",
    "ShortName": "Opp NUSS",
    "latitude": 1.293208,
    "longitude": 103.772618
  },
  {
    "caption": "Ventus",
    "name": "LT13-OPP",
    "LongName": "Ventus",
    "ShortName": "Ventus",
    "latitude": 1.29534,
    "longitude": 103.770617
  },
  {
    "caption": "Information Technology",
    "name": "IT",
    "LongName": "Information Technology",
    "ShortName": "IT",
    "latitude": 1.297204,
    "longitude": 103.772688
  },
  {
    "caption": "Opp Yusof Ishak House",
    "name": "YIH-OPP",
    "LongName": "Opp Yusof Ishak House",
    "ShortName": "Opp YIH",
    "latitude": 1.298904,
    "longitude": 103.774118
  },
  {
    "caption": "Raffles Hall",
    "name": "RAFFLES",
    "LongName": "Raffles Hall",
    "ShortName": "Raffles Hall",
    "latitude": 1.300963,
    "longitude": 103.772705
  },
  {
    "caption": "EA",
    "name": "EA",
    "LongName": "EA",
    "ShortName": "EA",
    "latitude": 1.300534,
    "longitude": 103.770171
  },
  {
    "caption": "SDE 3",
    "name": "SDE3",
    "LongName": "SDE 3",
    "ShortName": "SDE 3",
    "latitude": 1.297756,
    "longitude": 103.770043
  },
  {
    "caption": "Oei Tiong Ham Building",
    "name": "OTH",
    "LongName": "Oei Tiong Ham Building",
    "ShortName": "OTH Bldg",
    "latitude": 1.319333,
    "longitude": 103.818262
  },
  {
    "caption": "Botanic Gardens MRT (PUDO)",
    "name": "BG-MRT",
    "LongName": "Botanic Gardens MRT (PUDO)",
    "ShortName": "BG MRT",
    "latitude": 1.322586,
    "longitude": 103.816135
  },
  {
    "caption": "College Green",
    "name": "CG",
    "LongName": "College Green",
    "ShortName": "College Gr",
    "latitude": 1.323345,
    "longitude": 103.816273
  }
];


// Route data from real API (load safely)
let realRouteData = { endpoints: {} };
try {
  realRouteData = require('./real-api-data.json');
} catch (e) {
  console.log('Note: real-api-data.json not found, using fallback data');
}

// ============================================================================
// BUS LOCATION TRACKING - Simulates realistic bus movement along routes
// ============================================================================

// Store active bus states (persisted across API calls)
const activeBusStates = {};
const routeCheckpoints = {}; // Cache checkpoints for each route

// Initialize bus tracking for a route
function initializeBusTracking(routeCode) {
  if (activeBusStates[routeCode]) return; // Already initialized
  
  const route = routes[routeCode];
  if (!route) return;
  
  // Get and cache checkpoints for this route
  routeCheckpoints[routeCode] = generateCheckpoints(routeCode);
  const checkpoints = routeCheckpoints[routeCode];
  
  if (!checkpoints || checkpoints.length === 0) return; // No checkpoints available
  
  // Create 2-5 buses for this route
  const numBuses = getRandomInt(2, 5);
  activeBusStates[routeCode] = [];
  
  for (let i = 0; i < numBuses; i++) {
    // Start buses at different positions along the route
    const startCheckpointIndex = Math.floor((checkpoints.length / numBuses) * i);
    const checkpoint = checkpoints[startCheckpointIndex];
    
    activeBusStates[routeCode].push({
      vehplate: vehiclePlates[getRandomInt(0, vehiclePlates.length - 1)],
      currentCheckpointIndex: startCheckpointIndex,
      lat: checkpoint.latitude,
      lng: checkpoint.longitude,
      speed: getRandomInt(15, 35), // km/h
      occupancy: getRandomOccupancy(),
      lastUpdateTime: Date.now()
    });
  }
}

// Update bus positions based on time elapsed
function updateBusPositions(routeCode) {
  if (!activeBusStates[routeCode]) {
    initializeBusTracking(routeCode);
    return;
  }
  
  // Get cached checkpoints for this route
  const checkpoints = routeCheckpoints[routeCode];
  
  if (!checkpoints || checkpoints.length === 0) return;
  
  const now = Date.now();
  
  activeBusStates[routeCode].forEach(bus => {
    const timeSinceUpdate = (now - bus.lastUpdateTime) / 1000; // seconds
    
    // Average speed is 20 km/h = 5.56 m/s
    // Each checkpoint is roughly 10-50 meters apart
    // Update checkpoint index based on time
    const checkpointsToAdvance = Math.floor(timeSinceUpdate / 5); // Advance 1 checkpoint every 5 seconds
    
    if (checkpointsToAdvance > 0) {
      bus.currentCheckpointIndex = (bus.currentCheckpointIndex + checkpointsToAdvance) % checkpoints.length;
      const newCheckpoint = checkpoints[bus.currentCheckpointIndex];
      
      bus.lat = newCheckpoint.latitude;
      bus.lng = newCheckpoint.longitude;
      bus.lastUpdateTime = now;
      
      // Randomly vary speed and occupancy
      if (Math.random() < 0.1) { // 10% chance to change
        bus.speed = getRandomInt(0, 40); // Can be stopped or moving
        bus.occupancy = getRandomOccupancy();
      }
    }
  });
}

// Calculate direction based on current and next checkpoint
function calculateDirection(currentLat, currentLng, nextLat, nextLng) {
  const dLng = nextLng - currentLng;
  const dLat = nextLat - currentLat;
  
  let angle = Math.atan2(dLng, dLat) * (180 / Math.PI);
  if (angle < 0) angle += 360;
  
  return parseFloat(angle.toFixed(1));
}

const routes = {
  "A1": {
    routeid: 90287,
    name: "A1",
    description: "KRT > PGP > KR MRT > CLB > KRT",
    longName: "A1"
  },
  "A2": {
    routeid: 90288,
    name: "A2",
    description: "KRT > IT > Opp KR MRT > BIZ > KRT",
    longName: "A2"
  },
  "BTC": {
    routeid: 90289,
    name: "BTC",
    description: "BTC > KR MRT > UT > KV > PGP > BTC",
    longName: "BTC"
  },
  "D1": {
    routeid: 90294,
    name: "D1",
    description: "KRT > CLB > UT > EA > RH > KRT",
    longName: "D1"
  },
  "D2": {
    routeid: 90295,
    name: "D2",
    description: "KRT > RH > EA > UT > CLB > KRT",
    longName: "D2"
  },
  "E": {
    routeid: 90290,
    name: "E",
    description: "KRT > YIH > CLB > PGP > KRT",
    longName: "E"
  },
  "K": {
    routeid: 90291,
    name: "K",
    description: "KRT > LT13 > AS5 > BIZ > PGP > KR MRT > CLB > KRT",
    longName: "K"
  },
  "L": {
    routeid: 90292,
    name: "L",
    description: "PGP > KR MRT > YIH > Museum > UT > CLB > PGP",
    longName: "L"
  }
};

// Generate realistic bus plate numbers
const vehiclePlates = [
  "PD496S", "PD539C", "PC3954Y", "PD760D", "PD679G",
  "PD533T", "PD804L", "PC3995D", "PD776J", "PD726D",
  "PD696G", "PD576U", "PD577S", "PD1022U", "PD688P",
  "PD725E", "PD762M", "PD803K", "PC3987G", "PD534R"
];

// Helper functions
function getCurrentTimestamp() {
  const now = new Date();
  // Format: 2025-11-05T11:39:15+08:00
  const offset = '+08:00';
  return now.toISOString().replace('Z', offset);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPassengerLoad() {
  // Real API uses "-" for unknown/no data
  return ["-", "-", "-", "Low", "Medium", "High"][Math.floor(Math.random() * 6)];
}

function getRandomOccupancy() {
  return parseFloat((Math.random() * 0.9).toFixed(3));
}

function getCrowdLevel(occupancy) {
  if (occupancy < 0.33) return "low";
  if (occupancy < 0.66) return "medium";
  return "high";
}

// Generate realistic ETAs
// Helper to check if bus service is currently operating
function isServiceOperating() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes; // Current time in minutes since midnight
  
  // Service operates from 7:00 AM (420 min) to 11:00 PM (1380 min)
  const serviceStart = 7 * 60; // 7:00 AM
  const serviceEnd = 23 * 60; // 11:00 PM
  
  return currentTime >= serviceStart && currentTime < serviceEnd;
}

// Generate ETAs for a route
function generateETAs(routeCode, numBuses = 5) {
  // Check if service is operating
  if (!isServiceOperating()) {
    return []; // No buses after 11 PM or before 7 AM
  }
  
  const etas = [];
  const baseJobId = 18189000 + getRandomInt(1, 999);
  let totalSeconds = getRandomInt(60, 180); // First bus in 1-3 minutes (more realistic)
  
  for (let i = 0; i < numBuses; i++) {
    const plate = vehiclePlates[getRandomInt(0, vehiclePlates.length - 1)];
    const eta_s = totalSeconds;
    const eta = Math.floor(eta_s / 60); // Convert to minutes
    
    const timestamp = new Date(Date.now() + eta_s * 1000);
    const ts = timestamp.toISOString().slice(0, 19).replace('T', ' ');
    
    etas.push({
      plate: plate,
      px: "-",
      ts: ts,
      jobid: baseJobId + i,
      eta: eta,
      eta_s: eta_s
    });
    
    // Next bus in 5-12 minutes (more realistic campus shuttle frequency)
    totalSeconds += getRandomInt(300, 720);
  }
  
  return etas;
}

// Generate shuttle services for a bus stop
function generateShuttleServices(busStopName) {
  const stop = busStops.find(s => s.name === busStopName);
  if (!stop) return null;
  
  const shuttles = [];
  
  // If service is not operating, return empty shuttles
  if (!isServiceOperating()) {
    return {
      name: stop.caption,
      caption: stop.caption,
      shuttles: []
    };
  }
  
  // Determine which routes serve this stop based on real API data
  // For now, we'll use a simplified approach
  const routeCodes = ['A1', 'A2', 'D1', 'D2', 'BTC', 'E', 'K', 'L'];
  const numRoutes = getRandomInt(2, 4); // Each stop typically serves 2-4 routes
  
  for (let i = 0; i < numRoutes; i++) {
    const routeCode = routeCodes[getRandomInt(0, routeCodes.length - 1)];
    const route = routes[routeCode];
    const etas = generateETAs(routeCode);
    
    // Only add shuttle if there are ETAs available
    if (etas.length === 0) continue;
    
    // First arrival time
    const firstETA = etas[0];
    let arrivalTime = firstETA.eta_s < 60 ? "Arr" : firstETA.eta.toString();
    
    // Next arrival time  
    const nextETA = etas.length > 1 ? etas[1] : etas[0];
    const nextArrivalTime = nextETA.eta.toString();
    
    shuttles.push({
      passengers: getRandomPassengerLoad(),
      name: routeCode,
      _etas: etas,
      nextArrivalTime: nextArrivalTime,
      routeid: route.routeid,
      busstopcode: busStopName,
      arrivalTime_veh_plate: firstETA.plate,
      arrivalTime: arrivalTime,
      nextPassengers: getRandomPassengerLoad(),
      nextArrivalTime_veh_plate: nextETA.plate
    });
  }
  
  return {
    name: stop.caption,
    caption: stop.caption,
    shuttles
  };
}

// Generate active buses for a route
function generateActiveBuses(routeCode) {
  const route = routes[routeCode];
  if (!route) return [];
  
  // No active buses outside operating hours
  if (!isServiceOperating()) {
    return [];
  }
  
  // Update bus positions based on time elapsed
  updateBusPositions(routeCode);
  
  // Get current bus states
  const busStates = activeBusStates[routeCode];
  if (!busStates || busStates.length === 0) {
    initializeBusTracking(routeCode);
    return generateActiveBuses(routeCode); // Try again after initialization
  }
  
  // Get cached checkpoints to calculate direction
  const checkpoints = routeCheckpoints[routeCode];
  
  // Convert bus states to API format
  const activeBuses = busStates.map((bus, index) => {
    const capacity = 88; // Standard bus capacity
    const ridership = Math.floor(bus.occupancy * capacity);
    
    // Calculate direction to next checkpoint
    let direction = 0;
    if (checkpoints && checkpoints.length > 0 && bus.currentCheckpointIndex < checkpoints.length) {
      const nextIndex = (bus.currentCheckpointIndex + 1) % checkpoints.length;
      const currentCheckpoint = checkpoints[bus.currentCheckpointIndex];
      const nextCheckpoint = checkpoints[nextIndex];
      
      if (currentCheckpoint && nextCheckpoint) {
        direction = calculateDirection(
          currentCheckpoint.latitude, currentCheckpoint.longitude,
          nextCheckpoint.latitude, nextCheckpoint.longitude
        );
      }
    }
    
    return {
      vehplate: bus.vehplate,
      lat: bus.lat,
      lng: bus.lng,
      speed: bus.speed,
      direction: direction,
      loadInfo: {
        occupancy: bus.occupancy,
        crowdLevel: getCrowdLevel(bus.occupancy),
        capacity: capacity,
        ridership: ridership
      }
    };
  });
  
  return activeBuses;
}

// Generate pickup points for a route from real API data
function generatePickupPoints(routeCode) {
  // Use real data if available
  if (realRouteData.endpoints.pickupPoints && 
      realRouteData.endpoints.pickupPoints[routeCode] && 
      !realRouteData.endpoints.pickupPoints[routeCode].error) {
    return realRouteData.endpoints.pickupPoints[routeCode].PickupPointResult.pickuppoint;
  }
  
  // Fallback to generated data
  const route = routes[routeCode];
  if (!route) return [];
  
  const pickupPoints = [];
  const numStops = getRandomInt(8, 15);
  
  for (let i = 0; i < numStops; i++) {
    const stop = busStops[getRandomInt(0, busStops.length - 1)];
    pickupPoints.push({
      routeid: route.routeid,
      seq: i + 1,
      pickupname: stop.caption,
      LongName: stop.LongName,
      ShortName: stop.ShortName,
      busstopcode: stop.name,
      lat: stop.latitude,
      lng: stop.longitude
    });
  }
  
  return pickupPoints;
}

// Generate checkpoints for a route from real API data
function generateCheckpoints(routeCode) {
  // Use real data if available
  if (realRouteData.endpoints.checkPoint && 
      realRouteData.endpoints.checkPoint[routeCode] && 
      !realRouteData.endpoints.checkPoint[routeCode].error) {
    return realRouteData.endpoints.checkPoint[routeCode].CheckPointResult.CheckPoint;
  }
  
  // Fallback to generated data
  const route = routes[routeCode];
  if (!route) return [];
  
  const checkpoints = [];
  const numCheckpoints = getRandomInt(30, 100);
  
  for (let i = 0; i < numCheckpoints; i++) {
    const stop = busStops[getRandomInt(0, busStops.length - 1)];
    checkpoints.push({
      longitude: stop.longitude + (Math.random() - 0.5) * 0.001,
      latitude: stop.latitude + (Math.random() - 0.5) * 0.001,
      PointID: (i + 1).toString(),
      routeid: route.routeid
    });
  }
  
  return checkpoints;
}

// Generate route schedules from real API data
function generateRouteSchedules(routeCode) {
  // Use real data if available
  if (realRouteData.endpoints.routeMinMaxTime && 
      realRouteData.endpoints.routeMinMaxTime[routeCode] && 
      !realRouteData.endpoints.routeMinMaxTime[routeCode].error) {
    return realRouteData.endpoints.routeMinMaxTime[routeCode].RouteMinMaxTimeResult.RouteMinMaxTime;
  }
  
  // Fallback to basic schedules
  return [
    {
      DisplayOrder: "1",
      Route: routeCode,
      FirstTime: "07:15",
      LastTime: "23:00",
      ScheduleType: "Term",
      DayType: "Mon-Fri"
    },
    {
      DisplayOrder: "2",
      Route: routeCode,
      FirstTime: "07:15",
      LastTime: "23:00",
      ScheduleType: "Term",
      DayType: "Sat"
    },
    {
      DisplayOrder: "3",
      Route: routeCode,
      FirstTime: "09:07",
      LastTime: "23:00",
      ScheduleType: "Term",
      DayType: "Sun"
    }
  ];
}

// Real announcements from API
const announcements = realRouteData.endpoints.announcements && !realRouteData.endpoints.announcements.error
  ? realRouteData.endpoints.announcements.AnnouncementsResult.Announcement
  : [
    {
      ID: "1",
      Text: "Bus services operating normally today.",
      Status: "Enabled",
      Priority: "1",
      Affected_Service_Ids: "",
      Created_On: getCurrentTimestamp(),
      Created_By: "National University Of Singapore"
    }
  ];

// Real ticker tapes from API
const tickerTapes = realRouteData.endpoints.tickerTapes && !realRouteData.endpoints.tickerTapes.error
  ? realRouteData.endpoints.tickerTapes.TickerTapesResult.TickerTape
  : [
    {
      ID: "1",
      Message: "Welcome to NUS NextBus!",
      Status: "Enabled",
      Priority: "Low",
      Display_From: new Date(Date.now() - 86400000 * 30).toISOString(),
      Display_To: new Date(Date.now() + 86400000 * 30).toISOString(),
      Created_By: "System",
      Created_On: new Date(Date.now() - 86400000 * 30).toISOString(),
      Affected_Service_Ids: "",
      Accident_Latitude: 0,
      Accident_Longitude: 0
    }
  ];

// Publicity banners (endpoint returns 500 error on real API)
const banners = [
  {
    id: 1,
    name: "Welcome Banner",
    description: "Welcome to NUS NextBus",
    type: "IMG",
    img_url: "https://via.placeholder.com/800x200?text=NUS+NextBus",
    link_url: "",
    enabled: true,
    priority: 1,
    begin: new Date(Date.now() - 86400000 * 30).toISOString(),
    end: new Date(Date.now() + 86400000 * 30).toISOString(),
    form: {
      input_label1: "",
      input_label2: ""
    }
  }
];

// Service descriptions from real API
const serviceDescriptions = realRouteData.endpoints.serviceDescription && !realRouteData.endpoints.serviceDescription.error
  ? realRouteData.endpoints.serviceDescription.ServiceDescriptionResult.ServiceDescription
  : Object.keys(routes).map(routeCode => ({
      Route: routeCode,
      RouteDescription: routes[routeCode].description,
      RouteLongName: routes[routeCode].longName
    }));

module.exports = {
  busStops,
  routes,
  vehiclePlates,
  generateActiveBuses,
  generateShuttleServices,
  generatePickupPoints,
  generateCheckpoints,
  generateRouteSchedules,
  announcements,
  tickerTapes,
  banners,
  serviceDescriptions,
  getCurrentTimestamp
};
