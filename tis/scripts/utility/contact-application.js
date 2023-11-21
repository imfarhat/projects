document.addEventListener('DOMContentLoaded', function () {
  const form = document.forms['contact-application-form'];
  const submitButton = document.getElementById('contact-form-btn');
  const pleaseWaitMessage = document.getElementById('contact-form-please-wait');
  const successMessage = document.getElementById('contact-form-success');
  const submitErrorMessage = document.getElementById('contact-form-submit-error');
  const formDateTimeInput = document.getElementById('form-date-time');

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Hide submit button and show "Please Wait" message
    submitButton.classList.add('hidden');
    pleaseWaitMessage.classList.remove('hidden');

    // Add local date and time to the hidden input field
    const localDateTime = new Date().toLocaleString();
    formDateTimeInput.value = localDateTime;

    // Prepare form data for submission
    const formData = new FormData(form);

    try {
      // Perform the form submission using Fetch API
      const response = await fetch('https://script.google.com/macros/s/AKfycbz_rfMbuuO8p6lHX-AhtctINTjurIl6AwPhKgRiBe74ip1DckVbvzjZpXUQpi2n_U4u2A/exec', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      // Handle success response
      pleaseWaitMessage.classList.add('hidden');
      successMessage.classList.remove('hidden');
      await delay(10000); // Wait for 10 seconds
      successMessage.classList.add('hidden');
      submitButton.classList.remove('hidden');
      
      // Clear form fields
      form.reset();
    } catch (error) {
      // Handle error response
      pleaseWaitMessage.classList.add('hidden');
      submitErrorMessage.classList.remove('hidden');
      await delay(5000); // Wait for 5 seconds
      submitErrorMessage.classList.add('hidden');
      submitButton.classList.remove('hidden');

      // Clear form fields
      form.reset();
    }
  });

  // Prevent form resubmission on page refresh
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
});
