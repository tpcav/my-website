// Function to fetch and parse YAML from a URL
async function fetchAndParseYAML(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const yamlText = await response.text();
    const yamlData = jsyaml.load(yamlText);

    if (!yamlData || !yamlData.inputs || !yamlData.inputs.code) {
      throw new Error('Code not found in YAML data');
    }

    return yamlData.inputs.code;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Function to display code in an element
function displayCodeInElement(code, element) {
  const h1Element = document.createElement('h1');
  h1Element.textContent = code;
  element.appendChild(h1Element);
}

// Element where you want to display the YAML content
const yamlCodeElement = document.getElementById('yamlCode');

// URL of the YAML file on GitHub
const yamlFileUrl =
  'https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml';

// Fetch and display the YAML code
fetchAndParseYAML(yamlFileUrl)
  .then((code) => {
    displayCodeInElement(code, yamlCodeElement);
  })
  .catch((error) => {
    yamlCodeElement.textContent = `Error: ${error.message}`;
  });
