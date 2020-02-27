function initMap() {
	// add your code here
	L.mapquest.key = 'FwzD5MFPa8GMf02sCitGqEurGAZxS8om';

	// 'map' refers to a <div> element with the ID map
  	var map = L.mapquest.map('map', {
  	center: [32.8805, -117.2394],
  	layers: L.mapquest.tileLayer('map'),
  	zoom: 12,
  	zoomControl: false 
	});

	//Add a marker to the map
	L.marker([32.8805, -117.2394]).addTo(map);
}