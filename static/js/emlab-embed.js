(function () {
  function showError(box, src, msg) {
    box.innerHTML = '<p style="color:#fca5a5;margin:8px 0">No se pudo cargar la actividad (' + msg +
      '). <a href="' + src + '" target="_blank" rel="noopener" style="color:#f5b942">Ábrela en otra pestaña</a>.</p>';
  }
  function load(box) {
    if (box.getAttribute('data-ready')) return;
    box.setAttribute('data-ready', '1');
    var src = box.getAttribute('data-src');
    var h = box.getAttribute('data-h') || '640';
    var f = document.createElement('iframe');
    f.style.cssText = 'display:block;width:100%;height:' + h + 'px;border:0;border-radius:12px;background:#0b1220;';
    f.setAttribute('title', box.getAttribute('data-title') || 'Actividad interactiva');
    f.setAttribute('allowfullscreen', '');
    box.appendChild(f);
    fetch(src, { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error('error ' + r.status); return r.text(); })
      .then(function (t) {
        var base = '<base href="' + new URL(src, location.href).href + '">';
        if (/<head[^>]*>/i.test(t)) t = t.replace(/<head[^>]*>/i, function (m) { return m + base; });
        else if (/<html[^>]*>/i.test(t)) t = t.replace(/<html[^>]*>/i, function (m) { return m + '<head>' + base + '</head>'; });
        else t = base + t;
        f.srcdoc = t;
      })
      .catch(function (e) { box.removeChild(f); showError(box, src, e.message); });
  }
  function run() {
    var a = document.querySelectorAll('.emlab-embed');
    for (var i = 0; i < a.length; i++) load(a[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
