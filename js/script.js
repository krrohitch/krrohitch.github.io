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
$('.smoothScroll').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top + 120
      }, 800);
    return false;
    }
  }
});

// Scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}