console.log("mashael");
var btnContainer = document.getElementById("myDIV");

var footerlink = document.getElementsByClassName("footerlink");
console.log(footerlink);

for (var i = 0; i < footerlink.length; i++) {
  footerlink[i].addEventListener("click", function () {
    console.log("click");

    console.log(footerlink[i]);

    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
