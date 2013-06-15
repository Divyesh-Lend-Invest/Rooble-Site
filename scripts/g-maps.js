function initialize() {

	var rb = new google.maps.LatLng(53.378750, -1.468300);

	var myOptions = {
          center: new google.maps.LatLng(53.378350, -1.468075),
          zoom:18,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
        };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
  

  
  

var image = new google.maps.MarkerImage('images/rooble_map_marker.png',

        // This marker is 129 pixels wide by 42 pixels tall.

        new google.maps.Size(150, 150),

        // The origin for this image is 0,0.

        new google.maps.Point(0,0)

    );

 

    // Add Marker

    var marker1 = new google.maps.Marker({

        position: new google.maps.LatLng(53.378700, -1.468400),
         animation: google.maps.Animation.DROP,
        map: map,

        icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin

    });
    google.maps.event.addListener(marker, 'click', toggleBounce);

		function toggleBounce() {

		  if (marker.getAnimation() != null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}



}


