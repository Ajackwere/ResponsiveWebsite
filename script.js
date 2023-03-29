// Get the elements we'll be modifying
const greeting = document.querySelector('#greeting h1');
const message = document.querySelector('#greeting p');
const body = document.querySelector('body');

// Get the form and submit button
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get the values from the form inputs
  const name = document.querySelector('#name').value;
  const customMessage = document.querySelector('#message').value;
  const color = document.querySelector('#color').value;
  
  // Update the greeting and message
  greeting.textContent = `Hello ${name}!`;
  message.textContent = customMessage;
  
  // Update the background color
  body.style.backgroundColor = color;
});