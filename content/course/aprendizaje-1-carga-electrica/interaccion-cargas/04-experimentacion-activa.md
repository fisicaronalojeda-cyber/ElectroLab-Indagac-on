---
title: "4 · Experimentación activa"
weight: 4
type: book
---
<div class="apr-theme apr-1">
<div class="etapa-badge exp-activa"><span class="eb-icon">🧪</span>Experimentación activa</div>
<div id="emlab-aviso-slot"></div>

## 4.1 Laboratorio virtual / simulador

Usa el hero interactivo de arreglos de cargas puntuales para experimentar libremente con distintas combinaciones de signos.

<iframe src="/hero-cargas-puntuales.html" width="100%" height="480" style="border:none;"></iframe>

### 4.1.2 Guía

1. Coloca dos cargas positivas y observa la dirección de la fuerza que se dibuja sobre cada una.
2. Cambia una de las cargas a negativa y compara.
3. Agrega una tercera carga y observa cómo cambia la fuerza neta sobre las otras dos (superposición).
4. Registra en una tabla: combinación de signos → atracción o repulsión.

## 4.2 Actividad interactiva

Crea una actividad de arrastrar y soltar en Genially donde el estudiante deba clasificar pares de cargas como 'se atraen' o 'se repelen'.
<div id="emlab-javalab-electroscope" style="position:relative; width:100%; overflow:hidden; border-radius:12px; background:#f0f0f0;"></div>
<script>
(function(){
  var REF_WIDTH = 1905;   // ancho de referencia donde medimos la página de Javalab
  var CROP_LEFT = 0;
  var CROP_WIDTH = 1230;  // ancho de la zona útil (sin el panel de la derecha con el QR y los grados)
  var CROP_TOP = 260;     // dónde empieza la simulación (ya sin el menú de arriba)
  var CROP_HEIGHT = 790;  // hasta dónde llega, incluyendo los controles "Charged with (+)/(-)"
  var PAGE_HEIGHT = 1600; // alto que cargamos del iframe (de sobra para cubrir la zona)

  var wrap = document.getElementById('emlab-javalab-electroscope');

  function render(){
    var w = wrap.offsetWidth;
    var scale = w / CROP_WIDTH;
    wrap.style.height = (CROP_HEIGHT * scale) + 'px';
    wrap.innerHTML =
      '<iframe src="https://javalab.org/en/electroscope_en/" scrolling="no" ' +
      'sandbox="allow-scripts allow-same-origin allow-downloads" allow="fullscreen" ' +
      'style="position:absolute; top:' + (-CROP_TOP * scale) + 'px; left:' + (-CROP_LEFT * scale) + 'px; ' +
      'width:' + REF_WIDTH + 'px; height:' + PAGE_HEIGHT + 'px; border:none; ' +
      'transform:scale(' + scale + '); transform-origin: top left;"></iframe>';
  }
  render();
  window.addEventListener('resize', render);
})();
</script>

<!-- Pega aquí tu iframe de Genially -->

<div id="emlab-boton-slot"></div>
<script src="/js/progreso.js"></script>
</div>
