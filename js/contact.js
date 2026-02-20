// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link for contact page
    const contactLink = document.querySelector('a[href="contact.html"]');
    if (contactLink) {
        contactLink.classList.add('active');
    }
});

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    // Basic validation
    if (!name || !email || !subject || !message) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.className = 'form-note error';
        formMessage.style.display = 'block';
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-note error';
        formMessage.style.display = 'block';
        return;
    }

    // In a real application, this would send to a backend server
    // For now, we'll show a success message
    const contactData = {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
    };

    // Simulate storing in a database (localStorage for demo)
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contactData);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Show success message
    formMessage.textContent = `Thank you, ${name}! We've received your message and will get back to you shortly at ${email}.`;
    formMessage.className = 'form-note success';
    formMessage.style.display = 'block';

    // Reset form
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}
