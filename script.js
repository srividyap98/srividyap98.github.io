const links = [...document.querySelectorAll('nav a')];
const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((link) => link.removeAttribute('aria-current'));
      const active = links.find(
        (link) => link.getAttribute('href') === `#${entry.target.id}`,
      );
      if (active) active.setAttribute('aria-current', 'page');
    }
  },
  { rootMargin: '-35% 0px -55% 0px' },
);

sections.forEach((section) => observer.observe(section));
