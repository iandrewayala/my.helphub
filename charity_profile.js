
function displayCharityDetails() {
    const charityDetails = document.createElement('p');
    charityDetails.textContent = 'Charity: By donating in this charity, you will make the world a better place. We use our funds to directly link them to the organization.';
    document.body.appendChild(charityDetails);
}

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.addEventListener('mouseover', function() {
        displayCharityDetails();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('number').value;
        alert('Thank you for volunteering! A confirmation email will be sent to ' + email);
    });
});