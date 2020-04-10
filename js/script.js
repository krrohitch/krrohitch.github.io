// Preloader
var timer;

function preloader() {
	timer = setTimeout(showPage, 2000);
}

function showPage() {
	document.getElementById("preloader").style.display = "none";
	document.getElementById("container").style.display = "block";
}

//  Menu
function openMenu() {
	document.getElementById("btn-menu").style.display = "none";
	document.getElementById("btn-close").style.display = "block";
	document.getElementById("right-nav").style.display = "flex";
	document.getElementById("right-nav").style.opacity = "1";
	document.getElementById("right-nav").style.height = "100vh";
	document.getElementById("container").style.position = "fixed";
}

function closeMenu() {
	if (document.documentElement.clientWidth < 800) {
		document.getElementById("btn-menu").style.display = "block";
		document.getElementById("btn-close").style.display = "none";
		document.getElementById("right-nav").style.display = "none";
		document.getElementById("right-nav").style.opacity = "0";
		document.getElementById("right-nav").style.height = "0";
		document.getElementById("container").style.position = "initial";
	}
}

// Smooth scroll
$(".smoothScroll").on("click", function (evt) {
	var href = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(href).offset().top + 120
	}, 800);
	evt.preventDefault();
});

// Scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2200) {
		document.getElementById("topScroll").style.display = "block";
	} else {
		document.getElementById("topScroll").style.display = "none";
	}
}

$("#topScroll").on("click", function (evt) {
	var href = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(href).offset().top
	}, 800);
	evt.preventDefault();
});