function openNav() {
  document.getElementById("mySidenav").style.width = "10rem";
  document.getElementById("main").style.marginLeft = "10rem";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}