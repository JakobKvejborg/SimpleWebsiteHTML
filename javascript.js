// Create a function to handle button click
function openGoogle() {
    window.open('https://www.google.com', '_blank');
}

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.createElement('button');
    myButton.textContent = 'Go to Google';
    myButton.classList.add('button'); // Adding the 'button' class for styling

    myButton.addEventListener('click', openGoogle);

    // Append the button to the body of the document
    document.body.appendChild(myButton);
});
