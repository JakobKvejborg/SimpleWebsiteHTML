// Create a function to handle button click
function openGoogle() {
    window.open('https://www.google.com', '_blank');
}

// Create the button element
const myButton = document.createElement('button');
myButton.textContent = 'Go to Google'; // Set the button text
myButton.classList.add('button'); // Add the 'button' class for styling

// Add click event listener to the button
myButton.addEventListener('click', openGoogle);

// Append the button to the body of the document
document.body.appendChild(myButton);
