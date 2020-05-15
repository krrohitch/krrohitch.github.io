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
var modal = document.getElementsByClassName("modal");
var btn = document.getElementsByClassName("proj-box");
var span = document.getElementsByClassName("close-proj");

for (var i = 0; i < btn.length; i++) {
	var thisBtn = btn[i];
	var thisSpan = span[i];

	thisBtn.onclick = function() {
		var thisModal = document.getElementById(this.dataset.modal);
		thisModal.style.display = "block";
		container.style.position = "fixed";
	}

	thisSpan.onclick = function() {
		var thisModal = document.getElementById(this.dataset.modal);
		thisModal.style.display = "none";
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