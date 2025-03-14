document.addEventListener("DOMContentLoaded", function () {
  const discographyHeader = document.querySelector(".discography-header");
  const discographyList = document.querySelector(".albums-container");
  const icon = discographyHeader.querySelector("i");

  discographyHeader.addEventListener("click", function () {
    if (
      discographyList.style.display === "none" ||
      discographyList.style.display === ""
    ) {
      discographyList.style.display = "flex";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      discographyList.style.display = "none";
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});
