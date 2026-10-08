(function () {
  function fit() {
    document.querySelectorAll('.sim-wrap').forEach(function (w) {
      var W = +w.dataset.w, H = +w.dataset.h, L = +(w.dataset.left || 0);
      var f = w.querySelector('iframe');
      var s = w.clientWidth / (W - L);
      f.style.width = W + 'px';
      f.style.height = H + 'px';
      f.style.transform = 'scale(' + s + ')';
      f.style.left = (-L * s) + 'px';
      w.style.height = (H * s) + 'px';
    });
  }
  window.addEventListener('load', fit);
  window.addEventListener('resize', fit);
  fit();
})();
