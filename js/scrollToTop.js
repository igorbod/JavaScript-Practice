const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener('click', function () {
  // window.scrollTo(0, 0); //Simple use without animation

  window.scrollTo ({  //Simple use with smoth scroll
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});