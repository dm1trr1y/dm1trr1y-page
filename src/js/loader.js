window.onload = function () {
  //hide the preloader
  const loader = document.querySelector(".loader-container");

  loader.classList.add("hide");

  this.setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
};
