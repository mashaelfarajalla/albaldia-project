// console.log("map");

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     // center: { lat: -34.397, lng: 150.644 },
//     center: new google.maps.LatLng(-33.92, 151.25),

//     zoom: 8,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//   });

//   var locations = [
//     ["Bondi Beach", -33.890542, 151.274856, 4],
//     ["Coogee Beach", -33.923036, 151.259052, 5],
//     ["Cronulla Beach", -34.028249, 151.157507, 3],
//     ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
//     ["Maroubra Beach", -33.950198, 151.259302, 1],
//   ];
//   var infowindow = new google.maps.InfoWindow();

//   var marker, i;

//   for (i = 0; i < locations.length; i++) {
//     marker = new google.maps.Marker({
//       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//       map: map,
//     })();

//     google.maps.event.addListener(
//       marker,
//       "click",
//       (function (marker, i) {
//         return function () {
//           infowindow.setContent(locations[i][0]);
//           infowindow.open(map, marker);
//         };
//       })(marker, i)
//     );
//   }
// }

// window.initMap = initMap;

// setTimeout(() => {
//   initMap();
// }, 1000);

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: -33.9, lng: 151.2 },
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
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
}

window.initMap = initMap;
setTimeout(() => {
  initMap();
}, 1000);

