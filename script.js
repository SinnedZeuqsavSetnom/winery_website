const form = document.getElementById('contact-form');

if (form) {
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
}

document.querySelectorAll('.carousel').forEach((carousel) => {
  const images = JSON.parse(carousel.dataset.images);
  const alts = JSON.parse(carousel.dataset.alts);
  const img = carousel.querySelector('img');
  const leftBtn = carousel.querySelector('.carousel-arrow.left');
  const rightBtn = carousel.querySelector('.carousel-arrow.right');
  let index = 0;

  function update() {
    img.style.opacity = 0;
    window.setTimeout(() => {
      img.src = images[index];
      img.alt = alts[index];
      img.style.opacity = 1;
    }, 250);
    leftBtn.disabled = index === 0;
    rightBtn.disabled = index === images.length - 1;
  }

  leftBtn.addEventListener('click', () => {
    if (index > 0) {
      index -= 1;
      update();
    }
  });

  rightBtn.addEventListener('click', () => {
    if (index < images.length - 1) {
      index += 1;
      update();
    }
  });
});
