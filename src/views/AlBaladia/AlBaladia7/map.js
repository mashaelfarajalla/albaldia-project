var map;
// var elevator;
// var myOptions = {
//   zoom: 6,
//   center: new google.maps.LatLng(46.87916, -3.3291),
//   mapTypeId: "terrain",
// };
// map = new google.maps.Map($("#map")[0], myOptions);

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -33.9, lng: 151.2 },
  });
  setMarkers(map);
}
const beaches = [
  ["Bondi Beach", 31.5075659339788, 34.464420823310356],
  ["Coogee Beach", 31.5316946, 34.4678445, 5],
  ["Cronulla Beach", 31.5316946, 34.4678445, 3],
  ["Manly Beach", 31.5316946, 34.4678445, 2],
  ["Maroubra Beach", 31.5316946, 34.4678445, 1],
];

function setMarkers(map) {
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }

  var a = document.getElementsByClassName("amap");
  console.log(a);
  var i;

  for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", drop);
  }
}

function drop(e) {
  console.log("click");
  console.log(map);
  // console.log(e.target);
  var latlng = new google.maps.LatLng(31.5075659339788, 34.464420823310356);
  // mmm.panTo(latng);
  // console.log(mmm);
  map.setZoom(10);
  // mmm.setZoom(9);
}

window.initMap = initMap;
setTimeout(() => {
  initMap();
}, 1000);
