var map = L.map('map').setView([30,50], 3);

// Use OpenMapSurfer.Roads layer
// http://leaflet-extras.github.io/leaflet-providers/preview/index.html#filter=OpenMapSurfer.Roads
L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// map legend
var legend = L.control({position: 'bottomleft'});
legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'legend');
  div.innerHTML = '<table><tr><td><img src="../shared/img/marker-icon-blue.png"></td><td>1st Gen</td></tr><tr><td><img src="../shared/img/marker-icon-green.png"></td><td>2nd Gen</td></tr></table>';
  return div;
};
legend.addTo(map);

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
  for (var i = 0; i < rows; i++) {
    var coords = data.getValue(i, 6).split(',');
    if (coords.length == 2) {
      var latLng = L.latLng(parseFloat(coords[0].trim()), parseFloat(coords[1].trim()));
      var popup = '<div>' + data.getValue(i, 0) + '<h2>' + data.getValue(i, 3) + '</h2>';
      if (data.getValue(i, 8) != null) {
        popup += '<img src="img/' + data.getValue(i, 8) + '">';
      }
      popup +=  '<p>' + data.getValue(i, 4) + '</p>';
      if (data.getValue(i, 5) != null) {
        popup += '<p><a href="' + data.getValue(i, 5) + '" target="_blank">read more</a></p>';
      }
      popup += '</div>';
      var icon = (data.getValue(i, 2) == 2) ? new L.Icon({iconUrl: '../shared/img/marker-icon-green.png'}) : new L.Icon.Default();
      L.marker(latLng, {title: data.getValue(i, 1), icon: icon}).addTo(map).bindPopup(popup, {keepInView: true, autoPan: true});
    }
  }                
}