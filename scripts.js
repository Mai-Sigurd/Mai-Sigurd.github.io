function loadPage(page) {
  fetch(`sites/${page}.html`)
    .then((response) => response.text())
    .then((data) => (document.getElementById("content").innerHTML = data))
    .catch((error) => console.error("Error loading page:", error));
}

window.onload = function () {
  loadPage("about"); // Change 'home' to any default page you want
};
