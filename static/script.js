const heartButton = document.getElementById("heart-button");

heartButton.addEventListener("click", function () {
  heartButton.classList.toggle("active");
});

heartButton.addEventListener("mouseover", function () {
  heartButton.classList.add("hover");
});

heartButton.addEventListener("mouseout", function () {
  heartButton.classList.remove("hover");
});
