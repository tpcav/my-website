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

            // Check if the 'name' key exists in the YAML data
            if (yamlData && yamlData.code) {
                // Create an <h1> element and set its text content to the 'name' property value
                const nameElement = document.createElement('h1');
                nameElement.innerHTML = yamlData.code;
                
                // Append the <h1> element to the yamlCodeElement
                yamlCodeElement.appendChild(nameElement);
            } else {
                // Display an error message if 'name' key is not found
                yamlCodeElement.textContent = 'Name not found in YAML data';
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
