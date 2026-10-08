(function () {
  var DEF_W = 1280, DEF_H = 800, MIN_COL = 700;

  function setup(w) {
    if (w._simReady) return;
    w._simReady = true;
    var f = w.querySelector('iframe');
    if (!f) return;
    f.setAttribute('allow', 'fullscreen');
    f.setAttribute('allowfullscreen', '');
    var req = f.requestFullscreen || f.webkitRequestFullscreen;
    if (req) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = 'Pantalla completa';
      b.style.cssText = 'position:absolute;top:8px;right:8px;z-index:5;padding:4px 10px;font-size:12px;border:0;border-radius:6px;background:rgba(15,23,42,.85);color:#fff;cursor:pointer;';
      b.addEventListener('click', function () {
        (f.requestFullscreen || f.webkitRequestFullscreen).call(f);
      });
      w.appendChild(b);
    }
  }

  function fit(w) {
    var f = w.querySelector('iframe');
    if (!f) return;
    var W = +w.dataset.w || DEF_W;
    var H = +w.dataset.h || DEF_H;
    var L = +w.dataset.left || 0;

    var ws = w.style;
    ws.position = 'relative';
    ws.overflow = 'hidden';
    ws.width = '100%';
    ws.maxWidth = 'none';
    ws.minHeight = '0';
    ws.aspectRatio = 'auto';
    ws.margin = '16px 0';
    ws.borderRadius = '12px';
    ws.background = '#0b1220';

    var fs = f.style;
    fs.position = 'absolute';
    fs.top = '0';
    fs.right = 'auto';
    fs.bottom = 'auto';
    fs.border = '0';
    fs.maxWidth = 'none';
    fs.transformOrigin = '0 0';

    var cw = w.clientWidth;
    if (!cw) return;

    if (cw < MIN_COL) {
      ws.height = Math.round(window.innerHeight * 0.8) + 'px';
      fs.left = '0';
      fs.width = '100%';
      fs.height = '100%';
      fs.transform = 'none';
    } else {
      var s = cw / (W - L);
      fs.left = (-L * s) + 'px';
      fs.width = W + 'px';
      fs.height = H + 'px';
      fs.transform = 'scale(' + s + ')';
      ws.height = Math.round(H * s) + 'px';
    }
  }

  function run() {
    var list = document.querySelectorAll('.sim-wrap');
    for (var i = 0; i < list.length; i++) { setup(list[i]); fit(list[i]); }
  }

  window.addEventListener('load', run);
  window.addEventListener('resize', run);
  if (document.readyState !== 'loading') run();
  else document.addEventListener('DOMContentLoaded', run);
})();
