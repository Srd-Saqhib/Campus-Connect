// JavaScript for form submission and interactivity

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Optional: Add interactivity for the search bar
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function() {
    console.log(`User is searching for: ${this.value}`);
});
