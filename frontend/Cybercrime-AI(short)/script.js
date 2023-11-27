document.addEventListener('DOMContentLoaded', function () {
  const textboxes = document.querySelectorAll('.text-box');

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;

      textboxes.forEach((box, index) => {
          const boxOffset = box.offsetTop - window.innerHeight + 50;

          if (scrollPosition > boxOffset) {
              box.classList.add('visible');
          } else {
              box.classList.remove('visible');
          }
      });
  });
});
