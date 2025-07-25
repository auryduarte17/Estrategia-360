
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else{
        entry.target.classList.remove('visible');
    }
  });
});

document.querySelectorAll('.scroll-fade').forEach(el => {
  observer.observe(el);
});

