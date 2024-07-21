// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the existing loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element for each user
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            
            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });
        
        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Clear existing content
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Add an event listener to run fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
