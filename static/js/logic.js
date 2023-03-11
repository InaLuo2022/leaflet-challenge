// Creating the map object
let EarthQuakeMap = L.map("map", {
  center: [61.8251, -149.6045],
  zoom: 4
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(EarthQuakeMap);

// Use this link to get the GeoJSON data.
let link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";


// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
d3.json(link).then(function(data) {

    for (let i = 0; i < data.features.length; i++) {

        let earthquake_lan = data.features[i].geometry.coordinates[1];
        let earthquake_lon = data.features[i].geometry.coordinates[0];
        let earthquake_mag = data.features[i].properties.mag;

        //let circle_color = [];
        let circle_fillColor = [];
        let circle_radius = 30000 * earthquake_mag;

        if (earthquake_mag < 2.5) {
            //circle_color = 'dark';
            circle_fillColor = '#ecf542';
            }
        else if (earthquake_mag < 5.4 & earthquake_mag >=2.5 ) {
            //circle_color = '#2eab51';
            circle_fillColor = '#2eab51';
            }
        else if (earthquake_mag < 6.0 & earthquake_mag >=5.5 ) {
            //circle_color = '#101078';
            circle_fillColor = '#101078';
            }
        else if (earthquake_mag < 6.9 & earthquake_mag >=6.1 ) {
            //circle_color = '#570c12';
            circle_fillColor = '#570c12';
            }
        else if (earthquake_mag >= 7.0 ) {
            //circle_color = '#0d0101';
            circle_fillColor = '#0d0101';
            }

        let circles = L.circle([earthquake_lan, earthquake_lon], {
            color: circle_fillColor,
            fillColor: circle_fillColor,
            fillOpacity: 1,
            radius: circle_radius,
        }).addTo(EarthQuakeMap);

        circles.bindPopup("Earthquake Magnitude:" + earthquake_mag);
    };

});