document.addEventListener('DOMContentLoaded', function () {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  async function submitForm() {
    const fetchJsonData = async () => {
      const response = await fetch('./contents/fetch-page-jsons/tc-form.json'); 
      const jsonData = await response.json();
      return jsonData;
    };

    const validateInput = (admissionNumber, jsonData) => {
      const matchingData = jsonData.find(data => data.admissionNo === admissionNumber);
      return !!matchingData;
    };

    const updateHiddenInput = () => {
      const currentDateTime = new Date().toLocaleString();
      document.getElementById('form-date-time').value = currentDateTime;
    };    

    const showPleaseWait = () => {
      // Hide submit button on click
      document.getElementById('tc-form-btn').classList.add('hidden');
      document.getElementById('tc-form-please').classList.remove('hidden');
    };

    const showSuccessMessage = () => {
      // Hide Form after showing Success message
      hideAllMessages();
      document.getElementById('tc-form-success').classList.remove('hidden');
      setTimeout(() => {
        document.forms['tc-application-form'].reset();
        hideAllMessages();
        document.getElementById('tc-form-btn').classList.remove('hidden');
      }, 10000);
    };

    const showErrorMessage = (errorId) => {
      hideAllMessages();
      document.getElementById(errorId).classList.remove('hidden');

      setTimeout(() => {
        document.forms['tc-application-form'].reset();
        hideAllMessages();
        document.getElementById('tc-form-btn').classList.remove('hidden');
      }, 5000);
    };

    const hideAllMessages = () => {
      const messageIds = ['tc-form-please', 'tc-form-success', 'tc-form-invalid-input-error', 'tc-form-submit-error'];
      messageIds.forEach(id => {
        document.getElementById(id).classList.add('hidden');
      });
    };

    const handleFormSubmission = async (form) => {
      updateHiddenInput();
      showPleaseWait();

      const googleSheetScriptUrl = 'https://script.google.com/macros/s/AKfycbweG-z1JZ6f8NgiKmXCNQ2Tk5IDg3PMrs3GoLrc2LHHG9DIO6qy5Bk8wCGMnp5Yt3yt6g/exec'; 
      const formData = new FormData(form);

      try {
        const response = await fetch(googleSheetScriptUrl, { method: 'POST', body: formData });

        if (response.ok) {
          showSuccessMessage();
        } else {
          showErrorMessage('tc-form-submit-error');
        }
      } catch (error) {
        showErrorMessage('tc-form-submit-error');
      }
    };

    const form = document.forms['tc-application-form'];
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      showPleaseWait(); // Show Please wait immediately after clicking submit button

      const admissionNumber = document.getElementById('admission-number').value;
      const jsonData = await fetchJsonData();
      const isValid = validateInput(admissionNumber, jsonData);

      if (isValid) {
        // Proceed with form submission
        await handleFormSubmission(form);
      } else {
        // If admission number is not in JSON, show error, clear form, and bring back submit button
        showErrorMessage('tc-form-invalid-input-error');
      }
    });
  }

  // Call the submitForm function when the button is clicked
  document.getElementById('tc-form-btn').addEventListener('click', submitForm);
});
