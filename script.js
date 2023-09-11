  // URL of the YAML file on GitHub
  const yamlFileUrl = 'https://raw.githubusercontent.com/tpcav/my-website/main/.github/workflows/hello.world.yaml';

 // Element where you want to display the HTML code
 const yamlCodeElement = document.getElementById('yamlCode');

 // Fetch the YAML file
 fetch(yamlFileUrl)
     .then((response) => response.text())
     .then((yamlText) => {
         // Parse the YAML data
         const yamlData = jsyaml.load(yamlText);

         // Check if the 'code' key exists in the YAML data
         if (yamlData.hasOwnProperty('code')) {
             // Display the 'code' property value in the HTML element as text
             yamlCodeElement.textContent = yamlData.code;
         } else {
             yamlCodeElement.textContent = 'Code not found in YAML data';
         }
     })
     .catch((error) => {
         console.error('Error fetching or parsing YAML:', error);
     });