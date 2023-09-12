// Function to fetch and parse YAML from a URL
async function fetchAndParseYAML(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const yamlText = await response.text();
    const yamlData = jsyaml.load(yamlText);

    if (!yamlData || !yamlData.inputs || !yamlData.inputs.name) {  // Update to 'name'
      throw new Error('Name not found in YAML data');  // Update the error message
    }

    return yamlData.inputs.name;  // Update to 'name'
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Element where you want to display the YAML content
const yamlCodeElement = document.getElementById('namePlaceholder');

// URL of the YAML file on GitHub
const yamlFileUrl =
  'https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml';

// Fetch and display the YAML code
fetchAndParseYAML(yamlFileUrl)
  .then((name) => {  // Update to 'name'
    displayCodeInElement(name, yamlCodeElement);  // Update to 'name'
  })
  .catch((error) => {
    yamlCodeElement.textContent = `Error: ${error.message}`;
  });
