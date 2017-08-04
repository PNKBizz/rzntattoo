let images = [];

document.addEventListener('scroll', () => {
  for (let image of images) {
    checkEl(image.el, image.binding)
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const html = document.documentElement;
  return (
    rect.top >= 0 &&
    (window.innerHeight || html.clientHeight) - rect.top >= 0
  );
}

function checkEl(el, binding) {
  if (isInViewport(el)) {
    el.src = binding.value;
  }
}

export default {
  bind(el, binding) {
    images.push({ el, binding })
  },
  inserted(el, binding) {
    checkEl(el, binding);
  }
};
