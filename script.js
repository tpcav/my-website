  // URL of the YAML file on GitHub
  const yamlFileUrl = 'https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml';

  // Element where you want to display the data
  const yamlDataElement = document.getElementById('yamlData');

  // Fetch the YAML file
  fetch(yamlFileUrl)
    .then((response) => response.text())
    .then((yamlText) => {
      // Parse the YAML data
      const yamlData = jsyaml.safeLoad(yamlText);

      // Display the YAML data in the HTML element
      yamlDataElement.textContent = JSON.stringify(yamlData, null, 2);
    })
    .catch((error) => {
      console.error('Error fetching or parsing YAML:', error);
    });