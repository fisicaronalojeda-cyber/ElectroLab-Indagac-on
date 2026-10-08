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

## ELECTROSCOPIO EN 3D

<div class="sketchfab-embed-wrapper"> <iframe title="Gold Leaf Electroscope" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1d7ce32ae2ff4c1496ec280ea00eff8a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/gold-leaf-electroscope-1d7ce32ae2ff4c1496ec280ea00eff8a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Gold Leaf Electroscope </a> by <a href="https://sketchfab.com/vishnu27990" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> vishnu </a> on <a href="https://sketchfab.com" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div> 



<!-- Pega aquí tu iframe de Genially -->
Interacción de un chorro de agua con un objeto cargado. 
<div id="emlab-javalab- polarity_of_water" style="position:relative; width:100%; overflow:hidden; border-radius:12px; background:#f0f0f0;"></div>
<script>
(function(){
  var REF_WIDTH = 1905;   // ancho de referencia donde medimos la página de Javalab
  var CROP_LEFT = 0;
  var CROP_WIDTH = 1230;  // ancho de la zona útil (sin el panel de la derecha con el QR y los grados)
  var CROP_TOP = 260;     // dónde empieza la simulación (ya sin el menú de arriba)
  var CROP_HEIGHT = 790;  // hasta dónde llega, incluyendo los controles "Charged with (+)/(-)"
  var PAGE_HEIGHT = 1600; // alto que cargamos del iframe (de sobra para cubrir la zona)
  var wrap = document.getElementById('emlab-javalab- polarity_of_water');
 function render(){
    var w = wrap.offsetWidth;
    var scale = w / CROP_WIDTH;
    wrap.style.height = (CROP_HEIGHT * scale) + 'px';
    wrap.innerHTML =
      '<iframe src="https://javalab.org/en/polarity_of_water_en/" scrolling="no" ' +
      'sandbox="allow-scripts allow-same-origin allow-downloads" allow="fullscreen" ' +
      'style="position:absolute; top:' + (-CROP_TOP * scale) + 'px; left:' + (-CROP_LEFT * scale) + 'px; ' +
      'width:' + REF_WIDTH + 'px; height:' + PAGE_HEIGHT + 'px; border:none; ' +
      'transform:scale(' + scale + '); transform-origin: top left;"></iframe>';
  }
  render();
  window.addEventListener('resize', render);
})();
</script>

<div id="emlab-boton-slot"></div>
<script src="/js/progreso.js"></script>
</div>
