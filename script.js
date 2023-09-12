// URL of the YAML file on GitHub
const yamlFileUrl = 'https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml';

// Element where you want to display the YAML content
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

            // Check if the 'inputs' object exists in the YAML data and has a 'code' property
            if (yamlData && yamlData.inputs && yamlData.inputs.code) {
                // Create an <h1> element and set its text content to the 'code' property value
                const h1Element = document.createElement('h1');
                h1Element.textContent = yamlData.inputs.code;

                // Append the <h1> element to the yamlCodeElement
                yamlCodeElement.appendChild(h1Element);
            } else {
                // Display an error message if 'inputs.code' is not found in YAML data
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
