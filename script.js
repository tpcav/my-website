  // URL of the YAML file on GitHub
  const yamlFileUrl = 'https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml';

 // Element where you want to display the HTML code
 const yamlCodeElement = document.getElementById('yamlCode');

// Fetch the YAML file
fetch(yamlFileUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then((yamlText) => {
        try {
            // Parse the YAML data
            const yamlData = jsyaml.load(yamlText);

            // Check if the 'code' key exists in the YAML data
            if (yamlData && yamlData.hasOwnProperty('name')) {
                // Set the innerHTML of the yamlCodeElement to the 'code' property value
                yamlCodeElement.innerHTML = yamlData.name;
            } else {
                yamlCodeElement.textContent = 'Code not found in YAML data';
            }
        } catch (error) {
            console.error('Error parsing YAML:', error);
            yamlCodeElement.textContent = 'Error parsing YAML data';
        }
    })
    .catch((error) => {
        console.error('Error fetching YAML:', error);
        yamlCodeElement.textContent = 'Error fetching YAML data';
    });