function showSection(sectionId) {
  var sections = ["resume", "portfolio", "blog", "about"];
  sections.forEach(function (id) {
    var element = document.getElementById(id);
    if (id === sectionId) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
}

window.onload = function () {
  // Display the portfolio section by default when the page loads
  showSection("portfolio");
};
