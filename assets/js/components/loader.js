// Loading Page
(function(){
  const loader = document.querySelector('.loader');
  const app = document.getElementById('app');

  if (!loader) return;

  const transLoading = 800; 
  const delayLoading = 3000;

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  document.body.style.height = "100vh";
  document.documentElement.style.height = "100vh";

  function hideAfterDelay() {
    setTimeout(() => {
      loader.classList.add('hide');

      setTimeout(() => {
        loader.style.display = 'none';

          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          document.body.style.height = "";
          document.documentElement.style.height = "";

        if (app) app.style.opacity = '1';
      }, transLoading);

    }, delayLoading);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideAfterDelay);
  } else {
    hideAfterDelay();
  }
})();
