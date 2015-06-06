var iconData = {
  "in": { width: 24, height: 14 },
  "flag-shadow": { width: 40, height: 30 },
  "house": { width: 32, height: 32 },
  "house-shadow": { width: 59, height: 32 },
  "headquarters": { width: 32, height: 32 },
  "headquarters-shadow": { width: 59, height: 32 }
};

var officeLayer = [
  {
    "zoom": [0, 3],
    "places": [
      {
        "name": "India Offices",
        "icon": ["in", "flag-shadow"],
        "posn": [20.593684, 78.962880]
      },
    ]
  },
  {
    "zoom": [4, 6],
    "places": [
	   {
        "name": "kolkata",
        "icon": ["house", "house-shadow"],
        "posn": [22.572646, 88.363895]
      },
      {
        "name": "Delhi",
        "icon": ["house", "house-shadow"],
        "posn": [28.613939, 77.209021]
      },
      {
        "name": "Mumbai",
        "icon": ["house", "house-shadow"],
        "posn": [19.075984, 72.877656]
      },
      {
        "name": "Chennai",
        "icon": ["house", "house-shadow"],
        "posn": [13.082680, 80.270718]
      }
    ]
  },
  {
    "zoom": [7, 17],
    "places": [
	  {
        "name": "kolkata",
        "posn": [22.572646, 88.363895]
      },
      {
        "name": "Delhi",
        "posn": [28.613939, 77.209021]
      },
      {
        "name": "Mumbai",
        "posn": [19.075984, 72.877656]
      },
      {
        "name": "Chennai",
        "posn": [13.082680, 80.270718]
      }
    ]
  }
];


