




var layer = new L.StamenTileLayer("toner");
var map = new L.Map("mapid", {
    center: new L.LatLng(37.7, -122.4),
    zoom: 12
});
map.addLayer(layer);

