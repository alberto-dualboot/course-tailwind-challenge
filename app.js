// You can use this function to open an close the navbar menu on small screens when the menu is collapsed
function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle('hidden');
  document.getElementById(collapseID).classList.toggle('block');
}

function showResponsiveMenu() {
  var nav = document.getElementsByTagName('nav')[0];
  var burguer = document.getElementById('burguer');
  
  if (nav.style.display === "block") {
    nav.style.display = "none";
    burguer.innerHTML = '<i class="fa fa-bars"></i>';
  } else {
    nav.style.display = "block";
    burguer.innerHTML = '<i class="fa fa-times"></i>';
  }
}

