var map = L.map('map').setView([30,50], 3);

// Use OpenMapSurfer.Roads layer
// http://leaflet-extras.github.io/leaflet-providers/preview/index.html#filter=OpenMapSurfer.Roads
L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// get project data from google spreadsheet
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(function(){
  var queryString = encodeURIComponent('SELECT B,C,D,E,F,H,I,J,L WHERE E is not null OFFSET 4');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1hzj2e1CREa_V5HmJxOSehadHU08QzPC-IkqlA48QhpQ/gviz/tq?sheet=1stGen&tq=' + queryString);
  query.send(addMarkers);      
});

function addMarkers(response) {
  var data = response.getDataTable();
  var rows = data.getNumberOfRows();
  var markers = L.markerClusterGroup({
    showCoverageOnHover: false  
  });
  for (var i = 0; i < rows; i++) {
    var coords = data.getValue(i, 6).split(',');
    if (coords.length == 2) {
      var latLng = L.latLng(parseFloat(coords[0].trim()), parseFloat(coords[1].trim()));
      var popup = '<div><h1>' + data.getValue(i, 3) + '</h1>';
      if (data.getValue(i, 8) != null) {
        popup += '<img src="' + data.getValue(i, 8) + '">';
      }
      popup += '<p>' + data.getValue(i, 4) + '</p>';
      if (data.getValue(i, 5) != null) {
        popup += '<p><a href="' + data.getValue(i, 5) + '" target="_blank">read more</a></p>';
      }
      popup += '</div>';
      var options = {
        title: data.getValue(i, 1),
        icon: (data.getValue(i, 7) != null) ? L.icon({
          iconUrl: 'img/' + data.getValue(i, 7).trim(),
          iconSize: [50,50],
          className: 'marker-icon gen-' + data.getValue(i, 2)
        }) : new L.Icon.Default()
      };
      var marker = L.marker(latLng, options).bindPopup(popup);
      markers.addLayer(marker);
      //L.marker(latLng, options).addTo(map).bindPopup(popup);
    }
  }                
  map.addLayer(markers);
}