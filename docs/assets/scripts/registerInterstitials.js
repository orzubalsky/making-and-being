DEMO = true;
document.addEventListener('DOMContentLoaded', function () {
  const els = document.querySelectorAll('a[data-use-interstitial]');
  els.forEach(function(el) {
    el.addEventListener('click', function(e) {
      if (!DEMO && document.cookie.indexOf('signed-up=true') !== -1) return true;
      window.showPdfInterstitial(el.getAttribute('href'));
      e.preventDefault();
    });
  });
});