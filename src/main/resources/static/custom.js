let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });

    // let image = {url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", 
    // scaledSize: new google.maps.Size(50, 50)};
	
    for (let i=0; i<busLocations.length; i++){
        let marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
        });
    }

    let contentString = '<h2>' + address + ', ' + city + '</h2>';

    let infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}