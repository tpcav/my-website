document.addEventListener("DOMContentLoaded", function () {
  // Access the 'name' input value from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");

  // Get the HTML element where you want to display the name
  const nameDisplayElement = document.getElementById("nameDisplay");

  if (nameDisplayElement) {
      // Update the content of the element with the name value
      nameDisplayElement.textContent = name;
  }
});