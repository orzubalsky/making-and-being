// Party like it's 2013 (I dont want to manage a transpiler)
var HAS_SIGNED_UP = 'signed-up';

(function() {
  var popupEl = null;

  function resetPopup() {
    var downloadLinkEl = popupEl.querySelector('.download-link');

    downloadLinkEl.removeAttribute('href');

    const classList = popupEl.classList;
    classList.add('needs-signup');
    classList.remove('download-ready');
  }

  function hideSignupShowDownload() {
    var classList = popupEl.classList;
    classList.remove('needs-signup');
    classList.add('download-ready');
  }

  function closePopup() {
    const classList = popupEl.classList;
    classList.add('hidden');
    resetPopup();
  }

  function showPdfInterstitial(pdfUrl) {
    var downloadLinkEl = popupEl.querySelector('.download-link');
    downloadLinkEl.setAttribute('href', pdfUrl);
    popupEl.classList.remove('hidden');
  }

  function bind() {
    document.querySelectorAll('.scrim, .popup .close-button')
      .forEach(function (el) {
        el.addEventListener('click', function(e) {
          if (e.target !== this) return;
          closePopup();
        }, true);
      })

    popupEl.querySelector('.signup-link')
      .addEventListener('click', function() {
        Cookie.set(HAS_SIGNED_UP, true, { expires: 3650 })
        hideSignupShowDownload();
      });

    popupEl.querySelector('.download-link')
      .addEventListener('click', function() {
        // The timeout is needed because the link wont work if it's been hidden.
        setTimeout(closePopup, 0);
      });
  };

  document.addEventListener('DOMContentLoaded', function () {
    popupEl = document.querySelector('.popup');
    bind();
    closePopup();
  });


  window.showPdfInterstitial = showPdfInterstitial;
})();
