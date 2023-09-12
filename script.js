document.addEventListener("DOMContentLoaded", function () {
  // Fetch the YAML content from an external source (e.g., GitHub raw content)
  fetch('https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml')
      .then(response => response.text())
      .then(yamlText => {
          // Parse the YAML content using js-yaml
          const yamlData = jsyaml.load(yamlText);

          // Access and display specific data from the YAML, e.g., inputs.name
          const name = yamlData.on.workflow_dispatch.inputs.name;

          // Get the HTML element where you want to display the name
          const nameDisplayElement = document.getElementById("nameDisplay");

          if (nameDisplayElement) {
              // Update the content of the element with the name value
              nameDisplayElement.textContent = name;
          }
      })
      .catch(error => {
          console.error('Error fetching or parsing YAML:', error);
      });
});
