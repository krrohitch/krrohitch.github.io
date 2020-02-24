// Preloader
var timer;

function preloader() {
	timer = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("container").style.display = "block";
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