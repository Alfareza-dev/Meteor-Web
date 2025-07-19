document.addEventListener('DOMContentLoaded', () => {
  const text = "Hello, I'm Alfareza 🚀";
  const typingElement = document.getElementById('typing-text');
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();

  const createMeteor = () => {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    const variant = 'variant' + (Math.floor(Math.random() * 3) + 1);
    meteor.classList.add(variant);

    meteor.style.top = Math.random() * window.innerHeight / 2 + 'px';
    meteor.style.left = window.innerWidth - 50 + 'px';
    meteor.style.animationDuration = (Math.random() * 1 + 1.5) + 's';

    document.body.appendChild(meteor);
    setTimeout(() => meteor.remove(), 3000);
  }

  setInterval(createMeteor, 600);
});
