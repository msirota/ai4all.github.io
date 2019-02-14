function toggleNav() {
  var x = document.getElementById("responsiveNav");
  if (x.className === "responsive-nav") {
    x.className += " responsive";
  } else {
    x.className = "responsive-nav";
  }
}
