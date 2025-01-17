// Add your code here

function submitData(name, email) {
    // Create an object with the data to be sent
    const formData = {
      name: name,
      email: email,
    };
  
    // Configuration object for the fetch request
    const configurationObject = {
      method: "POST", // Set the HTTP verb
      headers: {
        "Content-Type": "application/json", // Specify content type as JSON
        "Accept": "application/json",       // Specify acceptable response format
      },
      body: JSON.stringify(formData),       // Convert the data to a JSON string
    };
  
    // Make the POST request and handle the response
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        // Append the new user's ID to the DOM
        const idElement = document.createElement("p");
        idElement.textContent = `ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch((error) => {
        // Handle errors and display error messages on the DOM
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  
