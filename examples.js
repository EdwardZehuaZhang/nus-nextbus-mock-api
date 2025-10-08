// Example usage of the NUS NextBus Mock API

const API_BASE_URL = 'http://localhost:3000';

// Example 1: Get all bus stops
async function getAllBusStops() {
  try {
    const response = await fetch(`${API_BASE_URL}/BusStops`);
    const data = await response.json();
    console.log('Bus Stops:', data.BusStopsResult.busstops);
    return data.BusStopsResult.busstops;
  } catch (error) {
    console.error('Error fetching bus stops:', error);
  }
}

// Example 2: Get shuttle service at a specific stop
async function getShuttleService(busStopName) {
  try {
    const response = await fetch(`${API_BASE_URL}/ShuttleService?busstopname=${busStopName}`);
    const data = await response.json();
    console.log(`Shuttles at ${busStopName}:`, data.ShuttleServiceResult.shuttles);
    return data.ShuttleServiceResult;
  } catch (error) {
    console.error('Error fetching shuttle service:', error);
  }
}

// Example 3: Get active buses on a route
async function getActiveBuses(routeCode) {
  try {
    const response = await fetch(`${API_BASE_URL}/ActiveBus?route_code=${routeCode}`);
    const data = await response.json();
    console.log(`Active buses on ${routeCode}:`, data.ActiveBusResult.activebus);
    return data.ActiveBusResult;
  } catch (error) {
    console.error('Error fetching active buses:', error);
  }
}

// Example 4: Get route schedules
async function getRouteSchedule(routeCode) {
  try {
    const response = await fetch(`${API_BASE_URL}/RouteMinMaxTime?route_code=${routeCode}`);
    const data = await response.json();
    console.log(`Schedule for ${routeCode}:`, data.RouteMinMaxTimeResult.RouteMinMaxTime);
    return data.RouteMinMaxTimeResult;
  } catch (error) {
    console.error('Error fetching route schedule:', error);
  }
}

// Example 5: Get all service descriptions
async function getAllServiceDescriptions() {
  try {
    const response = await fetch(`${API_BASE_URL}/ServiceDescription`);
    const data = await response.json();
    console.log('Service Descriptions:', data.ServiceDescriptionResult.ServiceDescription);
    return data.ServiceDescriptionResult;
  } catch (error) {
    console.error('Error fetching service descriptions:', error);
  }
}

// Example 6: Get pickup points for a route
async function getPickupPoints(routeCode) {
  try {
    const response = await fetch(`${API_BASE_URL}/PickupPoint?route_code=${routeCode}`);
    const data = await response.json();
    console.log(`Pickup points for ${routeCode}:`, data.PickupPointResult.pickuppoint);
    return data.PickupPointResult;
  } catch (error) {
    console.error('Error fetching pickup points:', error);
  }
}

// Example 7: Get bus location by vehicle plate
async function getBusLocation(vehiclePlate) {
  try {
    const response = await fetch(`${API_BASE_URL}/BusLocation?veh_plate=${vehiclePlate}`);
    const data = await response.json();
    console.log(`Location of ${vehiclePlate}:`, data.BusLocationResult);
    return data.BusLocationResult;
  } catch (error) {
    console.error('Error fetching bus location:', error);
  }
}

// Example 8: Get announcements
async function getAnnouncements() {
  try {
    const response = await fetch(`${API_BASE_URL}/Announcements`);
    const data = await response.json();
    console.log('Announcements:', data.AnnouncementsResult.Announcement);
    return data.AnnouncementsResult;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
}

// Run examples (uncomment to test)
// getAllBusStops();
// getShuttleService('UTOWN');
// getActiveBuses('A1');
// getRouteSchedule('A1');
// getAllServiceDescriptions();
// getPickupPoints('A1');
// getBusLocation('PA1234A');
// getAnnouncements();

module.exports = {
  getAllBusStops,
  getShuttleService,
  getActiveBuses,
  getRouteSchedule,
  getAllServiceDescriptions,
  getPickupPoints,
  getBusLocation,
  getAnnouncements
};
