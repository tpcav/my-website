        // Read the contents of name.txt and set it as the content of the 'namePlaceholder' span
        fetch('name.txt')
            .then(response => response.text())
            .then(name => {
                document.getElementById('namePlaceholder').textContent = name;
            })
            .catch(error => {
                console.error('Error reading name.txt:', error);
            });