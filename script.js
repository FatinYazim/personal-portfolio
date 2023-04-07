// navbar 
let menuToggle = document.querySelector('#menu-toggle');
let navUl = document.querySelector('.hamburger');


menuToggle.addEventListener('click', () => {
  navUl.classList.add('show');
});

//   fixed header while  scrolling 
window.onscroll = function() {myFunction()};

let header = document.querySelector("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// email me 
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form values
    let name = document.querySelector('#contact-form [name="name"]').value;
    let email = document.querySelector('#contact-form [name="email_address"]').value;
    let message = document.querySelector('#contact-form [name="message"]').value;
  
    // Validate form input
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }
  
    if (email.trim() === '') {
      alert('Please enter your email address');
      return;
    }
  
    if (message.trim() === '') {
      alert('Please enter your message');
      return;
    }
  
    // Construct email body
    const subject = `New contact form submission from ${name}`;
    const body = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;
  
    // Open user's default email client and populate fields
    let mailtoLink = `mailto:fatin_yazim@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  
    // Clear form input
    document.querySelector('#contact-form').reset();
  }

