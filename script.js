function showSection(sectionId) {
  var sections = ["resume", "portfolio", "blog"];
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
  showSection("portfolio"); // Automatically display the Portfolio section when the page loads
};
