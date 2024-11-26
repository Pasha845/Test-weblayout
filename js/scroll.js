function scrollToContent (link) {
  const href = link.getAttribute('href').substring(1);

  if (Boolean(href)) {
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  };
};

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
  
    scrollToContent(this, false);
  });
});