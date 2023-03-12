// Creating the map object
let EarthQuakeMap_2 = L.map("map", {
    center: [34.8812, 14.153],
    zoom: 2
  });

//Define variables for tile layers.
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

//Only one base layer can be shown at a time.
let baseMaps = {
    Street: street,
    Topography: topo
};

// Use this link to get the GeoJSON data.
let url_earthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
let url_
