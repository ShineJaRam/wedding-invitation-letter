export const useVh = () => {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setScreenSize();
  window.addEventListener('resize', setScreenSize);
};
