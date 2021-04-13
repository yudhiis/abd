// fungsi initialize untuk mempersiapkan peta
function initialize() {
  var propertiPeta = {
    center: new google.maps.LatLng(-7.7522215, 110.3739157),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-7.7522215, 110.3739157),
    map: peta,
    animation: google.maps.Animation.BOUNCE,
  });
}

// event jendela di-load
google.maps.event.addDomListener(window, "load", initialize);
