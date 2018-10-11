// Initialize Peru map
var peruMap = L.map('peru-map').setView([-12.19, -73.02], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.outdoors',
  accessToken: 'pk.eyJ1IjoiYWR2dSIsImEiOiJjam4zdDVlOGQyeGpxM2tvMmphOGJxYW1lIn0.gtW-IChpLU7NKuoe2SPt8w'
}).addTo(peruMap);

//add circle to Peru map
var circle = L.circle([-12.19, -73.02], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 300000
}).addTo(peruMap);

//add popup to Peru map circle when clicked
circle.bindPopup("Eight thousand years ago in South America, high atop the Andes, the Incans were the first to cultivate the potato.");