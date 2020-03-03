// Preloader
var timer;

function preloader() {
	timer = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

// Menu bar
function openMenu() {
  document.getElementById("btn-menu").style.display = "none";
  document.getElementById("btn-close").style.display = "block";
  document.getElementById("right-nav").style.display = "flex";
}

function closeMenu() {
  document.getElementById("btn-menu").style.display = "block";
  document.getElementById("btn-close").style.display = "none";
  document.getElementById("right-nav").style.display = "none";
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
  if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
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