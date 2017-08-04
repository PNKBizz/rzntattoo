function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 && rect.left >= 0 &&
    (window.innerHeight || html.clientHeight) - rect.top >= 0 &&
    (window.innerWidth || html.clientWidth) - rect.right >= 0
  );
}

export default {
  bind(el, binding) {
    document.addEventListener('scroll', () => {
      if (isInViewport(el)) {
        el.src = binding.value;
      }
    });
  },
  inserted(el, binding) {
    if (isInViewport(el)) {
      el.src = binding.value;
    }
  },
};
