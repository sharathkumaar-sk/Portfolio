// submit.js

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check form validation before showing the popup
  if (validateForm()) {
    // If validation passes, show the popup
    showPopup();
  }
});

function showPopup() {
  // Get the overlay and popup elements
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  // Add the 'show-overlay' and 'show-popup' classes to display them
  overlay.classList.add('show-overlay');
  popup.classList.add('show-popup');

  // Disable interaction with the body and navbar
  document.body.classList.add('disable-interaction');
  document.getElementById('navbar').classList.add('disable-interaction');
}

function hidePopup(event) {
  event.preventDefault(); // Prevent the default behavior of the anchor tag
  document.getElementById('popup').classList.remove('show-popup');
  document.getElementById('overlay').classList.remove('show-overlay');
  document.body.classList.remove('disable-interaction');
  document.getElementById('navbar').classList.remove('disable-interaction');
}

function validateForm() {
  // Add your form validation logic here
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name === '' && email === '' && message === '') {
    showErrorMessage('Please fill in all fields.');
    return false;
  } else if (name === '') {
    showErrorMessage('Please fill in the name field.');
    return false;
  } else if (email === '') {
    showErrorMessage('Please fill in the email field.');
    return false;
  } else if (message === '') {
    showErrorMessage('Please fill in the message field.');
    return false;
  } else if (!isValidEmail(email)) {
    showErrorMessage('Please enter a valid email address.');
    return false;
  }

  clearErrorMessage();

  // Submit the form
  submitForm(name, email, message);

  // Return false to prevent default form submission
  return true;
}

function isValidEmail(email) {
  // Regular expression to check if the email is in a valid format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showErrorMessage(errorMessage) {
  // Add your error message display logic here
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');
  var errorMessageContainer = document.getElementById('error-message-container');
  var popupTitle = document.getElementById('popup-title');
  var popupMessage = document.getElementById('popup-message');

  // Set the error message text
  errorMessageContainer.innerText = errorMessage;

  // Apply the same styling as h5 elements
  errorMessageContainer.style.fontSize = '1.3rem'; // Adjust the font size as needed
  errorMessageContainer.style.fontWeight = 'bold'; // Adjust the font weight as needed
  errorMessageContainer.style.color = 'white'; // Adjust the color as needed

  // Adjust popup content for the error message
  popupTitle.innerText = 'Error';
  popupMessage.style.display = 'none';
  errorMessageContainer.style.display = 'block';

  // Show overlay and error message
  overlay.classList.add('show-overlay');
  popup.classList.add('show-popup');
  document.body.classList.add('disable-interaction');
}

function clearErrorMessage() {
  // Reset form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');
  var errorMessageContainer = document.getElementById('error-message-container');

  // Reset popup content
  var popupTitle = document.getElementById('popup-title');
  var popupMessage = document.getElementById('popup-message');

  popupTitle.innerText = 'Thanks!';
  popupMessage.style.display = 'block';
  errorMessageContainer.style.display = 'none';
}

function submitForm(name, email, message) {
  // Prepare the form data
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Use Fetch API to send a POST request to Formspree
  fetch('https://formspree.io/f/mwkgvqyw', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    }
  })
  .then(response => {
    // Handle the response as needed
    if (response.ok) {
      // Successful submission, you can show a success message or perform additional actions
    } else {
      // Handle errors if any
    }
  })
  .catch(error => {
    // Handle errors from the fetch request
  });
}
