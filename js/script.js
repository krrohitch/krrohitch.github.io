// Preloader
var timer;
var container = document.getElementById("container");
var navbar = document.getElementById("right-nav");
var menubtn = document.getElementById("btn-menu");

function preloader() {
	timer = setTimeout(showPage, 1600);
}

function showPage() {
	document.getElementById("preloader").style.display = "none";
	container.style.display = "block";
}

// Menu
function openMenu() {
	menubtn.style.display = "none";
	navbar.style.display = "flex";
	navbar.style.opacity = "1";
	navbar.style.height = "100vh";
	container.style.position = "fixed";
}

function closeMenu() {
	if (document.documentElement.clientWidth < 800) {
		menubtn.style.display = "block";
		navbar.style.display = "none";
		navbar.style.opacity = "0";
		navbar.style.height = "0";
		container.style.position = "initial";
	}
}

// Project
var modal = document.getElementById("modal-is");
var btn = document.getElementById("proj-is");
var span = document.getElementsByClassName("close-proj")[0];

btn.onclick = function() {
  modal.style.display = "block";
	container.style.position = "fixed";
}
span.onclick = function() {
  modal.style.display = "none";
	container.style.position = "initial";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
		container.style.position = "initial";
  }
}

// Scroll to top
var topScroll = document.getElementById("scroll-top")

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2200) {
		topScroll.style.display = "block";
	} else {
		topScroll.style.display = "none";
	}
}