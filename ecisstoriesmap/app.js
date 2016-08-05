var map = L.map('map').setView([30,50], 3);

// Use OpenMapSurfer.Roads layer
// http://leaflet-extras.github.io/leaflet-providers/preview/index.html#filter=OpenMapSurfer.Roads
L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markers = L.markerClusterGroup({
  showCoverageOnHover: false  
});

$.getScript('https://www.gstatic.com/charts/loader.js', function(){
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(function(){
      var queryString = encodeURIComponent('SELECT B,C,D,E,F,H,I,J,L WHERE E is not null OFFSET 4');
      var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1hzj2e1CREa_V5HmJxOSehadHU08QzPC-IkqlA48QhpQ/gviz/tq?sheet=1stGen&tq=' + queryString);
      query.send(addMarkers);      
    });
});

function addMarkers(response) {
  var data = response.getDataTable();
  var rows = data.getNumberOfRows();
  for (var i = 0; i < rows; i++) {
    var coords = data.getValue(i, 6).split(',');
    if (coords.length == 2) {
      var latLng = L.latLng(parseFloat(coords[0].trim()), parseFloat(coords[1].trim()));
      var options = {
        title: data.getValue(i, 3),
        icon: (data.getValue(i, 7) != null) ? L.icon({
          iconUrl: 'thumbs/' + data.getValue(i, 7).trim(),
          iconSize: [75,75],
          className: 'marker-icon'
        }) : new L.Icon.Default()
      };
      markers.addLayer(L.marker(latLng, options));
    }
  }                
  map.addLayer(markers);
}