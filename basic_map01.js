/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_map_simple]
let map;

var position={lat: 18.79553, lng: 98.98394};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map,
  });
  var info = new google.maps.InfoWindow({
    content: '<div style="font-size: 15px;">Marker</div>'
  });
  google.maps.event.addListener(marker, 'click', function(){
    info.open(map,marker);
  });
}

window.initMap = initMap;
// [END maps_map_simple]
