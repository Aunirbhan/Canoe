const scrollLinks = document.querySelectorAll(".scroll-link");

const setLinkHighlight = (selectedLink) => {
  scrollLinks.forEach((link) => {
    if (link === selectedLink) {
      link.dataset.selected = "true";
    } else {
      link.dataset.selected = "false";
    }
  });
};

let inViewport = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const parent = entry.target.closest(".canoe-year");
      const link = document.querySelector(`[href="#${parent.id}"]`);
      setLinkHighlight(link);
    } else {
      if (entry.boundingClientRect.top > 0) {
        entry.target.dataset.view = "below";
      } else {
        entry.target.dataset.view = "above";
      }
    }
  });
});

document.querySelectorAll(".canoe-content").forEach((el) => {
  inViewport.observe(el);
});
