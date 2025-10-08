// Mock data for NUS NextBus API
// Based on actual NUS campus locations and shuttle bus routes

const busStops = [
  {
    name: "PGP",
    caption: "Prince George's Park",
    ShortName: "PGP",
    LongName: "Prince George's Park Residences",
    latitude: 1.29289,
    longitude: 103.78004
  },
  {
    name: "KRB",
    caption: "Kent Ridge Bus Terminal",
    ShortName: "KR-BT",
    LongName: "Kent Ridge Bus Terminal",
    latitude: 1.29481,
    longitude: 103.76986
  },
  {
    name: "LT13",
    caption: "LT13",
    ShortName: "LT13",
    LongName: "Lecture Theatre 13",
    latitude: 1.29464,
    longitude: 103.77131
  },
  {
    name: "AS5",
    caption: "AS5",
    ShortName: "AS5",
    LongName: "Faculty of Arts & Social Sciences",
    latitude: 1.29364,
    longitude: 103.77253
  },
  {
    name: "BIZ2",
    caption: "BIZ 2",
    ShortName: "BIZ2",
    LongName: "Business School",
    latitude: 1.29329,
    longitude: 103.77489
  },
  {
    name: "CENLIB",
    caption: "Central Library",
    ShortName: "CLB",
    LongName: "Central Library",
    latitude: 1.29655,
    longitude: 103.77244
  },
  {
    name: "LT27",
    caption: "LT27",
    ShortName: "LT27",
    LongName: "Lecture Theatre 27",
    latitude: 1.29683,
    longitude: 103.78068
  },
  {
    name: "UHALL",
    caption: "University Hall",
    ShortName: "UHall",
    LongName: "University Hall",
    latitude: 1.29737,
    longitude: 103.78030
  },
  {
    name: "OPPUHALL",
    caption: "Opp University Hall",
    ShortName: "Opp UHall",
    LongName: "Opposite University Hall",
    latitude: 1.29820,
    longitude: 103.78122
  },
  {
    name: "YIHHT",
    caption: "YIH",
    ShortName: "YIH",
    LongName: "Yusof Ishak House",
    latitude: 1.29869,
    longitude: 103.77463
  },
  {
    name: "MUSEUM",
    caption: "Museum",
    ShortName: "Museum",
    LongName: "NUS Museum",
    latitude: 1.30120,
    longitude: 103.77372
  },
  {
    name: "UTOWN",
    caption: "University Town",
    ShortName: "UTown",
    LongName: "University Town",
    latitude: 1.30373,
    longitude: 103.77434
  },
  {
    name: "RAFFLES",
    caption: "Raffles Hall",
    ShortName: "RH",
    LongName: "Raffles Hall",
    latitude: 1.30065,
    longitude: 103.77246
  },
  {
    name: "KV",
    caption: "Kent Vale",
    ShortName: "KV",
    LongName: "Kent Vale",
    latitude: 1.30236,
    longitude: 103.76920
  },
  {
    name: "COM2",
    caption: "COM2",
    ShortName: "COM2",
    LongName: "School of Computing (COM2)",
    latitude: 1.29453,
    longitude: 103.77397
  }
];

const routes = {
  "A1": {
    name: "A1",
    color: "FF0000",
    description: "PGP → KR-BT → LT13 → AS5 → BIZ2 → CENLIB → LT27 → UHALL → Opp UHall → YIH → MUSEUM → UTown → YIH → CENLIB → LT13",
    stops: ["PGP", "KRB", "LT13", "AS5", "BIZ2", "CENLIB", "LT27", "UHALL", "OPPUHALL", "YIHHT", "MUSEUM", "UTOWN", "YIHHT", "CENLIB", "LT13"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:00", LastTime: "23:00", DisplayOrder: "1" },
      { DayType: "Sat", ScheduleType: "Term", FirstTime: "08:30", LastTime: "18:30", DisplayOrder: "2" },
      { DayType: "Sun/PH", ScheduleType: "Term", FirstTime: "00:00", LastTime: "00:00", DisplayOrder: "3" },
      { DayType: "Mon-Fri", ScheduleType: "Vacation", FirstTime: "07:30", LastTime: "20:00", DisplayOrder: "4" },
      { DayType: "Sat", ScheduleType: "Vacation", FirstTime: "00:00", LastTime: "00:00", DisplayOrder: "5" },
      { DayType: "Sun/PH", ScheduleType: "Vacation", FirstTime: "00:00", LastTime: "00:00", DisplayOrder: "6" }
    ]
  },
  "A2": {
    name: "A2",
    color: "E3CE0B",
    description: "PGP → KR-BT → CENLIB → YIH → Museum → UTown → YIH → Opp UHall → UHALL → LT27 → CENLIB → BIZ2 → AS5 → LT13",
    stops: ["PGP", "KRB", "CENLIB", "YIHHT", "MUSEUM", "UTOWN", "YIHHT", "OPPUHALL", "UHALL", "LT27", "CENLIB", "BIZ2", "AS5", "LT13"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:00", LastTime: "23:00", DisplayOrder: "1" },
      { DayType: "Sat", ScheduleType: "Term", FirstTime: "08:30", LastTime: "18:30", DisplayOrder: "2" },
      { DayType: "Sun/PH", ScheduleType: "Term", FirstTime: "00:00", LastTime: "00:00", DisplayOrder: "3" },
      { DayType: "Mon-Fri", ScheduleType: "Vacation", FirstTime: "07:30", LastTime: "20:00", DisplayOrder: "4" }
    ]
  },
  "D1": {
    name: "D1",
    color: "C77DE2",
    description: "KR-BT → LT27 → UHALL → Opp UHall → Raffles Hall → KV → Museum → UTown → Museum → YIH → CENLIB → LT13",
    stops: ["KRB", "LT27", "UHALL", "OPPUHALL", "RAFFLES", "KV", "MUSEUM", "UTOWN", "MUSEUM", "YIHHT", "CENLIB", "LT13"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:15", LastTime: "22:45", DisplayOrder: "1" },
      { DayType: "Sat", ScheduleType: "Term", FirstTime: "08:30", LastTime: "18:30", DisplayOrder: "2" }
    ]
  },
  "D2": {
    name: "D2",
    color: "6F1B6F",
    description: "KR-BT → LT13 → CENLIB → YIH → Museum → UTown → Museum → KV → Raffles Hall → Opp UHall → UHALL → LT27",
    stops: ["KRB", "LT13", "CENLIB", "YIHHT", "MUSEUM", "UTOWN", "MUSEUM", "KV", "RAFFLES", "OPPUHALL", "UHALL", "LT27"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:15", LastTime: "22:45", DisplayOrder: "1" },
      { DayType: "Sat", ScheduleType: "Term", FirstTime: "08:30", LastTime: "18:30", DisplayOrder: "2" }
    ]
  },
  "BTC": {
    name: "BTC",
    color: "EF8136",
    description: "KR-BT ↔ UTown (Express)",
    stops: ["KRB", "UTOWN"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:30", LastTime: "22:30", DisplayOrder: "1" },
      { DayType: "Sat", ScheduleType: "Term", FirstTime: "09:00", LastTime: "18:00", DisplayOrder: "2" }
    ]
  },
  "L": {
    name: "L",
    color: "BFBFBF",
    description: "Loop Service",
    stops: ["KRB", "UTOWN"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:30", LastTime: "22:30", DisplayOrder: "1" }
    ]
  },
  "E": {
    name: "E",
    color: "00B050",
    description: "Express Service",
    stops: ["KRB", "UTOWN"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:30", LastTime: "22:30", DisplayOrder: "1" }
    ]
  },
  "K": {
    name: "K",
    color: "345A9B",
    description: "Kent Ridge Service",
    stops: ["KRB", "UTOWN"],
    schedules: [
      { DayType: "Mon-Fri", ScheduleType: "Term", FirstTime: "07:30", LastTime: "22:30", DisplayOrder: "1" }
    ]
  }
};

// Generate mock buses
const vehiclePlates = [
  "PA1234A", "PA5678B", "PA9012C", "PA3456D", "PA7890E",
  "PB1111F", "PB2222G", "PB3333H", "PB4444I", "PB5555J",
  "PC6666K", "PC7777L", "PC8888M", "PC9999N", "PD0000O"
];

// Generate realistic arrival times (in seconds)
function getRandomArrival() {
  const arrivals = [-1, 60, 120, 180, 240, 300, 420, 600, 900];
  return arrivals[Math.floor(Math.random() * arrivals.length)];
}

function getPassengerLoad() {
  const loads = ["Low", "Medium", "High", ""];
  return loads[Math.floor(Math.random() * loads.length)];
}

// Generate active buses for a route
function generateActiveBuses(routeCode) {
  const route = routes[routeCode];
  if (!route) return [];
  
  const numBuses = Math.floor(Math.random() * 3) + 2; // 2-4 buses
  const activeBuses = [];
  
  for (let i = 0; i < numBuses; i++) {
    const stopIndex = Math.floor(Math.random() * route.stops.length);
    const stop = busStops.find(s => s.name === route.stops[stopIndex]);
    
    if (stop) {
      activeBuses.push({
        veh_plate: vehiclePlates[Math.floor(Math.random() * vehiclePlates.length)],
        lat: stop.latitude + (Math.random() - 0.5) * 0.002,
        lng: stop.longitude + (Math.random() - 0.5) * 0.002,
        speed: Math.floor(Math.random() * 40),
        direction: Math.random() > 0.5 ? 1 : 2
      });
    }
  }
  
  return activeBuses;
}

// Generate shuttle services for a bus stop
function generateShuttleServices(busStopName) {
  const stop = busStops.find(s => s.name === busStopName);
  if (!stop) return null;
  
  const shuttles = [];
  
  // Determine which routes serve this stop
  Object.keys(routes).forEach(routeCode => {
    const route = routes[routeCode];
    if (route.stops.includes(busStopName)) {
      const arrivalTime = getRandomArrival();
      const nextArrivalTime = arrivalTime === -1 ? getRandomArrival() : getRandomArrival() + 600;
      
      shuttles.push({
        name: routeCode,
        arrivalTime: arrivalTime.toString(),
        nextArrivalTime: nextArrivalTime.toString(),
        arrivalTime_veh_plate: vehiclePlates[Math.floor(Math.random() * vehiclePlates.length)],
        nextArrivalTime_veh_plate: vehiclePlates[Math.floor(Math.random() * vehiclePlates.length)],
        passengers: getPassengerLoad(),
        nextPassengers: getPassengerLoad()
      });
    }
  });
  
  return {
    name: stop.caption,
    caption: stop.caption,
    shuttles
  };
}

// Generate pickup points for a route
function generatePickupPoints(routeCode) {
  const route = routes[routeCode];
  if (!route) return [];
  
  const pickupPoints = [];
  let routeId = ["A1", "A2", "D1", "D2", "BTC"].indexOf(routeCode) + 1;
  
  route.stops.forEach(stopName => {
    const stop = busStops.find(s => s.name === stopName);
    if (stop) {
      pickupPoints.push({
        pickupname: stop.caption,
        busstopcode: stop.name,
        lat: stop.latitude,
        lng: stop.longitude,
        LongName: stop.LongName,
        ShortName: stop.ShortName,
        routeid: routeId
      });
    }
  });
  
  return pickupPoints;
}

// Generate checkpoints for a route
function generateCheckpoints(routeCode) {
  const route = routes[routeCode];
  if (!route) return [];
  
  const checkpoints = [];
  let routeId = ["A1", "A2", "D1", "D2", "BTC"].indexOf(routeCode) + 1;
  let pointId = 1;
  
  route.stops.forEach(stopName => {
    const stop = busStops.find(s => s.name === stopName);
    if (stop) {
      checkpoints.push({
        PointID: (pointId++).toString(),
        latitude: stop.latitude,
        longitude: stop.longitude,
        routeid: routeId
      });
    }
  });
  
  return checkpoints;
}

// Mock announcements
const announcements = [
  {
    ID: "1",
    Text: "Bus services operating normally today.",
    Status: "Enabled",
    Priority: "1",
    Created_By: "System",
    Created_On: new Date().toISOString(),
    Affected_Service_Ids: "A1,A2,D1,D2,BTC"
  },
  {
    ID: "2",
    Text: "Please plan your journey ahead during peak hours.",
    Status: "Enabled",
    Priority: "2",
    Created_By: "Admin",
    Created_On: new Date(Date.now() - 86400000).toISOString(),
    Affected_Service_Ids: ""
  }
];

// Mock ticker tapes
const tickerTapes = [
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

// Mock banners
const banners = [
  {
    id: 1,
    name: "Welcome Banner",
    description: "Welcome to NUS NextBus Mock API",
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

module.exports = {
  busStops,
  routes,
  vehiclePlates,
  generateActiveBuses,
  generateShuttleServices,
  generatePickupPoints,
  generateCheckpoints,
  announcements,
  tickerTapes,
  banners
};
