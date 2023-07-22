require('dotenv').config()

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form values from each section
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const jobType = document.getElementById('jobType').value;
  const jobSource = document.getElementById('jobSource').value;
  const jobDescription = document.getElementById('jobDescription').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zipCode = document.getElementById('zipCode').value;
  const area = document.getElementById('area').value;
  const startDate = document.getElementById('startDate').value;
  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;
  const testSelect = document.getElementById('testSelect').value;

  // Create an object with all the form data
  const formData = {
    firstName,
    lastName,
    phone,
    email,
    jobType,
    jobSource,
    jobDescription,
    address,
    city,
    state,
    zipCode,
    area,
    startDate,
    startTime,
    endTime,
    testSelect,
  };

  console.log(formData);
}

document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to the form submit button
  const jobForm = document.getElementById('jobForm');
  jobForm.addEventListener('submit', handleSubmit);
});
