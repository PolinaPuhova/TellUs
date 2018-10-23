function initMap() {
  //координаты Минска
  var lat = 53.9045398;
  var lng = 27.5615244;


  var centerLatLng = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    center: centerLatLng,
    zoom: 13,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("map-container"), mapOptions);

  // Добавляем маркер
  addMarker(map, 53.93365545, 27.6384287, 1);
  addMarker(map, 53.89563992, 27.53259659, 2);

  var infowindow = new google.maps.InfoWindow({
   content: content
});

  google.maps.event.addDomListener(window, "load", initMap);
}

//  id_address = id адреса такое же как номер адреса в id <article class="org-address" --
//  id="address-4">
function addMarker(map, marker_lat, marker_lng, id_address) {
  var image = "resources/img/marker.png";
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(marker_lat, marker_lng), // Координаты расположения маркера.
    map: map,
    icon: image
  });

  //Находим нужный адрес
  var address = $("#address-"+id_address).html();

  //Копируем адрес на маркере
  $(".infoWindowPopap .org-address").empty();
  var content = $(".infoWindowPopap").html(address);

  var infowindow = new google.maps.InfoWindow({
   content:"'" + content.html() + "'"
  });

  google.maps.event.addListener(marker, 'click', function() {
     marker.setAnimation(null);
     infowindow.close();
     infowindow.open(map,marker);
  });

  google.maps.event.addListener(map, 'click', function() {
     infowindow.close();
  });


  google.maps.event.addListener(marker, 'mouseover', function() {
     marker.setAnimation(google.maps.Animation.BOUNCE);
     setTimeout (function() {
       marker.setAnimation(null);
     }, 790);
  });

  google.maps.event.addListener(marker, 'mouseout', function() {
   setTimeout (function() {
      marker.setAnimation(null);
    }, 790);
  });
}




function onMarkermouseover(id_address)  {
  var marker = new google.maps.Marker({
	 map: theMap,
	 draggable: true,
	 position: new google.maps.LatLng(49.47216, -123.76307),
	 visible: true
	});

	var myOptions = {
		 content: info_window
		,disableAutoPan: false
		,maxWidth: 0
		,pixelOffset: new google.maps.Size(-140, 0)
		,zIndex: null
		,closeBoxMargin: "10px 2px 2px 2px"
		,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
		,infoBoxClearance: new google.maps.Size(1, 1)
		,isHidden: false
		,pane: "floatPane"
		,enableEventPropagation: false
	};

	var ib = new InfoBox(myOptions);
	ib.open(theMap, marker);

}
