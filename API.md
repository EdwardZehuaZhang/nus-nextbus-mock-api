# API Documentation

Complete reference for all endpoints in the NUS NextBus Mock API.

---

## Base URL
```
Local: http://localhost:3000
Production: https://your-deployment-url.com
```

---

## Endpoints

### 1. Get Publicity Banners

Get publicity information including banners and display frequency.

**Endpoint:** `GET /publicity`

**Parameters:** None

**Response:**
```json
{
  "banners": [
    {
      "id": 1,
      "name": "Welcome Banner",
      "description": "Welcome to NUS NextBus Mock API",
      "type": "IMG",
      "img_url": "https://example.com/banner.jpg",
      "link_url": "",
      "enabled": true,
      "priority": 1,
      "begin": "2025-09-08T00:00:00.000Z",
      "end": "2025-11-08T00:00:00.000Z",
      "form": {
        "input_label1": "",
        "input_label2": ""
      }
    }
  ],
  "frequency": 60
}
```

---

### 2. Get Bus Stops

Get information about all bus stops on campus.

**Endpoint:** `GET /BusStops`

**Parameters:** None

**Response:**
```json
{
  "BusStopsResult": {
    "busstops": [
      {
        "name": "UTOWN",
        "caption": "University Town",
        "ShortName": "UTown",
        "LongName": "University Town",
        "latitude": 1.30373,
        "longitude": 103.77434
      }
    ]
  }
}
```

**Bus Stop Names:**
- `PGP` - Prince George's Park
- `KRB` - Kent Ridge Bus Terminal
- `LT13` - Lecture Theatre 13
- `AS5` - Faculty of Arts & Social Sciences
- `BIZ2` - Business School
- `CENLIB` - Central Library
- `LT27` - Lecture Theatre 27
- `UHALL` - University Hall
- `OPPUHALL` - Opposite University Hall
- `YIHHT` - Yusof Ishak House
- `MUSEUM` - NUS Museum
- `UTOWN` - University Town
- `RAFFLES` - Raffles Hall
- `KV` - Kent Vale
- `COM2` - School of Computing

---

### 3. Get Pickup Points

Get all pickup points (stops) for a specified route.

**Endpoint:** `GET /PickupPoint`

**Parameters:**
- `route_code` (required) - Bus route code (A1, A2, D1, D2, BTC)

**Example:** `/PickupPoint?route_code=A1`

**Response:**
```json
{
  "PickupPointResult": {
    "pickuppoint": [
      {
        "pickupname": "University Town",
        "busstopcode": "UTOWN",
        "lat": 1.30373,
        "lng": 103.77434,
        "LongName": "University Town",
        "ShortName": "UTown",
        "routeid": 1
      }
    ]
  }
}
```

**Errors:**
- `404` - Service not found! (invalid route_code)

---

### 4. Get Shuttle Service

Get all oncoming shuttle bus services at a specified stop.

**Endpoint:** `GET /ShuttleService`

**Parameters:**
- `busstopname` (required) - Name of the bus stop

**Example:** `/ShuttleService?busstopname=UTOWN`

**Response:**
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

**Arrival Time Values:**
- `-1` - No arrival estimate
- `60` - 1 minute
- `180` - 3 minutes
- `300` - 5 minutes
- `600` - 10 minutes
- etc.

**Passenger Load:**
- `Low` - Few passengers
- `Medium` - Moderate capacity
- `High` - Near full capacity
- `""` - Unknown

**Errors:**
- `404` - Bus stop not found!

---

### 5. Get Active Buses

Get all active buses on a specified route with their current positions.

**Endpoint:** `GET /ActiveBus`

**Parameters:**
- `route_code` (required) - Bus route code

**Example:** `/ActiveBus?route_code=A1`

**Response:**
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

**Direction:**
- `1` - Forward/Clockwise
- `2` - Reverse/Counter-clockwise

**Errors:**
- `404` - Service not found!

---

### 6. Get Bus Location

Get location information about a specific bus by vehicle plate.

**Endpoint:** `GET /BusLocation`

**Parameters:**
- `veh_plate` (required) - Vehicle plate number

**Example:** `/BusLocation?veh_plate=PA1234A`

**Response:**
```json
{
  "BusLocationResult": {
    "vehplate": "PA1234A",
    "lat": 1.30373,
    "lng": 103.77434,
    "speed": 25,
    "direction": 1,
    "status": "true"
  }
}
```

**Sample Vehicle Plates:**
- PA1234A, PA5678B, PA9012C, PA3456D, PA7890E
- PB1111F, PB2222G, PB3333H, PB4444I, PB5555J
- PC6666K, PC7777L, PC8888M, PC9999N, PD0000O

**Errors:**
- `500` - Internal Server Error (invalid vehicle plate)

---

### 7. Get Route Operating Hours

Get the minimum and maximum operating time of a route.

**Endpoint:** `GET /RouteMinMaxTime`

**Parameters:**
- `route_code` (required) - Bus route code

**Example:** `/RouteMinMaxTime?route_code=A1`

**Response:**
```json
{
  "RouteMinMaxTimeResult": {
    "RouteMinMaxTime": [
      {
        "DayType": "Mon-Fri",
        "ScheduleType": "Term",
        "FirstTime": "07:00",
        "LastTime": "23:00",
        "DisplayOrder": "1"
      },
      {
        "DayType": "Sat",
        "ScheduleType": "Term",
        "FirstTime": "08:30",
        "LastTime": "18:30",
        "DisplayOrder": "2"
      }
    ]
  }
}
```

**Day Types:**
- `Mon-Fri` - Weekdays
- `Sat` - Saturday
- `Sun/PH` - Sunday and Public Holidays

**Schedule Types:**
- `Term` - During semester
- `Vacation` - During breaks

**Errors:**
- `404` - Service not found!

---

### 8. Get Service Description

Get brief path descriptions for all routes.

**Endpoint:** `GET /ServiceDescription`

**Parameters:** None

**Response:**
```json
{
  "ServiceDescriptionResult": {
    "ServiceDescription": [
      {
        "Route": "A1",
        "RouteDescription": "PGP → KR-BT → LT13 → AS5 → BIZ2 → ..."
      },
      {
        "Route": "A2",
        "RouteDescription": "PGP → KR-BT → CENLIB → YIH → ..."
      }
    ]
  }
}
```

**Available Routes:**
- `A1` - Internal Loop (Clockwise)
- `A2` - Internal Loop (Counter-clockwise)
- `D1` - Around Campus (Clockwise)
- `D2` - Around Campus (Counter-clockwise)
- `BTC` - Express Kent Ridge ↔ UTown

---

### 9. Get Announcements

Get all system announcements.

**Endpoint:** `GET /Announcements`

**Parameters:** None

**Response:**
```json
{
  "AnnouncementsResult": {
    "TimeStamp": "2025-10-08T10:30:00.000Z",
    "Announcement": [
      {
        "ID": "1",
        "Text": "Bus services operating normally today.",
        "Status": "Enabled",
        "Priority": "1",
        "Created_By": "System",
        "Created_On": "2025-10-08T00:00:00.000Z",
        "Affected_Service_Ids": "A1,A2,D1,D2,BTC"
      }
    ]
  }
}
```

**Status:**
- `Enabled` - Active announcement
- `Disabled` - Inactive announcement

---

### 10. Get Ticker Tapes

Get all ticker tape messages.

**Endpoint:** `GET /TickerTapes`

**Parameters:** None

**Response:**
```json
{
  "TickerTapesResult": {
    "TimeStamp": "2025-10-08T10:30:00.000Z",
    "TickerTape": [
      {
        "ID": "1",
        "Message": "Welcome to NUS NextBus!",
        "Status": "Enabled",
        "Priority": "Low",
        "Display_From": "2025-09-08T00:00:00.000Z",
        "Display_To": "2025-11-08T00:00:00.000Z",
        "Created_By": "System",
        "Created_On": "2025-09-08T00:00:00.000Z",
        "Affected_Service_Ids": "",
        "Accident_Latitude": 0,
        "Accident_Longitude": 0
      }
    ]
  }
}
```

**Priority Levels:**
- `High` - Critical messages
- `Medium` - Important messages
- `Low` - General information

---

### 11. Get Checkpoints

Get all checkpoints (waypoints) of a specified route.

**Endpoint:** `GET /CheckPoint`

**Parameters:**
- `route_code` (required) - Bus route code

**Example:** `/CheckPoint?route_code=A1`

**Response:**
```json
{
  "CheckPointResult": {
    "CheckPoint": [
      {
        "PointID": "1",
        "latitude": 1.30373,
        "longitude": 103.77434,
        "routeid": 1
      }
    ]
  }
}
```

**Errors:**
- `404` - Service not found!

---

## Error Responses

### 400 Bad Request
Missing required parameter.

```json
{
  "error": "route_code parameter is required"
}
```

### 404 Not Found

**Service not found:**
```
Service not found!
```

**Bus stop not found:**
```
Bus stop not found!
```

### 500 Internal Server Error
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>500 Internal Server Error</title>
<h1>Internal Server Error</h1>
<p>The server encountered an internal error...</p>
```

---

## Authentication

Basic authentication is supported but **disabled by default** for easier testing.

**Header:**
```
Authorization: Basic base64(username:password)
```

---

## CORS

CORS is enabled for all origins by default. The API accepts requests from any domain.

---

## Rate Limiting

No rate limiting is implemented in this mock API. In production, you should implement rate limiting.

---

## Notes

- All timestamps are in ISO 8601 format
- Coordinates use WGS84 datum
- Arrival times are in seconds
- Mock data is dynamically generated on each request
- Data does not persist between server restarts

---

**For more information, see README.md**
