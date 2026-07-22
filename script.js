const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';
  status.className = 'form-status';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form),
    });
    const result = await response.json();

    if (result.success) {
      status.textContent = "Thanks — your message is on its way. We'll get back to you soon.";
      status.className = 'form-status success';
      form.reset();
    } else {
      status.textContent = 'Something went wrong. Please try again.';
      status.className = 'form-status error';
    }
  } catch (err) {
    status.textContent = 'Something went wrong. Please try again.';
    status.className = 'form-status error';
  }
});
