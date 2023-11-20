document.addEventListener('DOMContentLoaded', function () {
  const textBox = document.getElementById('textBox');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      // Parallax effect for the first image
      image1.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';

      // Fade in the text box when it reaches the top
      const textBoxOffset = textBox.offsetTop - window.innerHeight + 50;
      if (scrollPosition > textBoxOffset) {
          textBox.style.opacity = 1;
          textBox.style.transform = 'translateY(0)';
      }

      // Switch images when the text box is at the top
      const switchImageOffset = textBox.offsetTop - window.innerHeight;
      if (scrollPosition > switchImageOffset) {
          image1.style.display = 'none';
          image2.style.display = 'block';
      } else {
          image1.style.display = 'block';
          image2.style.display = 'none';
      }
  });
});
