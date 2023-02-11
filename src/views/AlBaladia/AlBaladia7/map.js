var map;
var mapObj = null;
var marker;
var a;
var x;

const beaches = [
  ["Bondi Beach", 31.5075659339788, 34.464420823310356],
  ["Coogee Beach", 31.5316946, 34.4678445, 5],
  ["Cronulla Beach", 31.5616946, 34.4618445, 3],
  ["Manly Beach", 31.5916946, 34.4648445, 2],
  ["Maroubra Beach", 31.5716946, 34.4678445, 1],
];
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 31.5075659339788, lng: 34.464420823310356 },
  });
  mapObj = map;
  setMarkers(map);

  a = document.getElementsByClassName("amap");

  for (x = 0; x < a.length; x++) {
    a[x].addEventListener("click", function () {
      console.log("click");
      console.log(x);
      // beaches.forEach()
      var latlng = new google.maps.LatLng(31.5075659339788, 34.464420823310356);
      mapObj.setCenter(latlng);
      mapObj.setZoom(14, true);
      setTimeout(() => {
        mapObj.setZoom(18, true);
      }, 500);
    });
  }

  function clickZoom(event) {
    console.log("click");
    // console.log(event.target);

    // console.log(a[0]);

    // console.log(a[0].data);
    // console.log(e.target);
    // console.log(mapObj);
    // for (let i = 0; i < beaches.length; i++) {
    //   const beach = beaches[i];
    //   var latlng = new google.maps.LatLng(beach[1], beach[2]);

    //   mapObj.setCenter(latlng);
    //   mapObj.setZoom(14, true);
    //   setTimeout(() => {
    //     mapObj.setZoom(18, true);
    //   }, 500);
    // }
  }
}

function setMarkers(map) {
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];

    marker = new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });

    // beach.addEventListener("click", function () {
    //   console.log("marker");
    // });

    google.maps.event.addListener(marker, "click", function () {
      console.log("marker");
      var model = (document.getElementById("exampleModelMap").style.display =
        "block");
      console.log(model);
    });
    var close = document.getElementById("closeModel");
    close.addEventListener("click", function () {
      document.getElementById("exampleModelMap").style.display = "none";
    });
  }
}

window.initMap = initMap;
setTimeout(() => {
  initMap();
}, 1000);
