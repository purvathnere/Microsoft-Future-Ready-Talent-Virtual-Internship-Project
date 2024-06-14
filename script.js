document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');
    const confirmationModal = document.getElementById('confirmation');
    const closeModal = document.getElementById('closeConfirmation');

    appointmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;

        if (name && email && phone && date && time && service) {
            const confirmationDetails = document.getElementById('confirmationDetails');
            confirmationDetails.innerHTML = `
                <p>Your appointment has been successfully booked with the following details:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Service:</strong> ${service}</p>
            `;

            confirmationModal.style.display = 'block'; // Show the modal
            appointmentForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    closeModal.addEventListener('click', function () {
        confirmationModal.style.display = 'none'; // Close the modal when the close icon inside the modal is clicked
    });

    // Add an event listener to the "Book Appointment" link to open the appointment form
    const openFormLink = document.getElementById('bookLink');
    openFormLink.addEventListener('click', function (e) {
        e.preventDefault();
        const appointmentContainer = document.getElementById('appointmentContainer');
        appointmentContainer.style.display = 'block';
    });

    // Add an event listener to the "Close" button inside the form to hide the form
    const closeFormButton = document.getElementById('closeForm');
    closeFormButton.addEventListener('click', function () {
        const appointmentContainer = document.getElementById('appointmentContainer');
        appointmentContainer.style.display = 'none';
    });
});

//  Javascript clock

function updateTime() {
    const date = new Date();
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const m = hours > 12 ? "PM" : "AM";
    const f = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedHours = f < 10 ? `0${f}` : f;
  
    const clock = document.getElementById("clock");
    clock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${m}`;
  
    const red = Math.round((255 / 12) * formattedHours).toString(16);
    const green = Math.round((255 / 60) * minutes).toString(16);
    const blue = Math.round((255 / 60) * seconds).toString(16);
  
    const color = `#${red}${green}${blue}`;
  
    clock.style.color = color;
  }
  
  setInterval(updateTime, 1000);
  
