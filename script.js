//your JS code here. If required.
// Function to determine the DOM level of the element with the ID "level"
function findDOMLevel() {
    // Get the element with ID 'level'
    const element = document.getElementById('level');
    
    // Initialize the level count to 1 (starting at the element itself)
    let level = 1;

    // Traverse up the DOM tree until we reach the <html> element
    let currentElement = element.parentElement;
    while (currentElement) {
        level++; // Increment the level for each parent element
        currentElement = currentElement.parentElement;
    }

    // Display the result in an alert
    alert(`The level of the element is: ${level}`);
}

// Call the function to determine the DOM level
findDOMLevel();
