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
            if (yamlData && yamlData.hasOwnProperty('jobs') && yamlData.jobs.hasOwnProperty('build') && yamlData.jobs.build.hasOwnProperty('steps')) {
                // Find the 'run' step and extract the 'inputs.code' value
                const runStep = yamlData.jobs.build.steps.find(step => step.hasOwnProperty('run'));
                if (runStep && runStep.run.hasOwnProperty('inputs') && runStep.run.inputs.hasOwnProperty('code')) {
                    const htmlCode = runStep.run.inputs.code;

                    // Set the innerHTML of the yamlCodeElement to the HTML code
                    yamlCodeElement.innerHTML = htmlCode;
                } else {
                    yamlCodeElement.textContent = 'Code not found in YAML data';
                }
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