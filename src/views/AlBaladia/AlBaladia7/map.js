function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -33.9, lng: 151.2 },
  });

  setMarkers(map);
}
const beaches = [
  ["Bondi Beach", 31.5075659339788, 34.464420823310356],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", -33.950198, 151.259302, 1],
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
      // icon: image,
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

function drop() {
  console.log("click");
  // map.setZoom(9);
}

// var a = document.getElementsByClassName("amap");
// console.log(a);
// var i;

// for (i = 0; i < a.length; i++) {
//   a[i].addEventListener("click", function () {
//     console.log("click");
//   });
// }

window.initMap = initMap;
setTimeout(() => {
  initMap();
}, 1000);
