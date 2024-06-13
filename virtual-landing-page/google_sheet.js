const scriptURL = 'https://script.google.com/macros/s/AKfycbxlccpyoOgePJ5iT3K9lVBsebGNbbQVcE_IF5S2QQbc5MVhPsc_xEp4jIAm9C-6ONwM/exec';
const form = document.forms['contact_form'];
const modal = document.getElementById('successModal');
const closeButton = document.querySelector('.close-button');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            modal.style.display = 'block'; // Show the modal
            console.log(response); // Log the response to check for issues
        })
        .catch(error => console.error('Error!', error.message));
});

// Close the modal when the user clicks the close button
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of the modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
