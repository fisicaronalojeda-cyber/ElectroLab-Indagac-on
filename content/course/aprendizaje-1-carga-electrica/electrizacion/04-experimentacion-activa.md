---
title: "4 · Experimentación activa"
weight: 4
type: book
---
<div class="apr-theme apr-1">
<div class="etapa-badge exp-activa"><span class="eb-icon">🧪</span>Experimentación activa</div>
<div id="emlab-aviso-slot"></div>

## 4.1 Laboratorio virtual / simulador

Explora el simulador de Cargas y Campos de PhET, activando la opción de 'sensores E-field' para ver cómo un objeto neutro se polariza cerca de una carga.

<iframe src="https://phet.colorado.edu/es/simulations/charges-and-fields" width="100%" height="480" style="border:none;"></iframe>

### 4.1.2 Guía

1. Coloca una carga positiva y un sensor de campo cerca de un objeto neutro (o usa una segunda carga muy pequeña como 'testigo').
2. Observa cómo cambia la orientación/posición del testigo al acercarlo o alejarlo.
3. Compara el efecto de un conductor y un aislante si el simulador lo permite.
4. Anota tus observaciones sobre inducción vs. contacto directo.

## 4.2 Actividad interactiva

Crea una tabla comparativa en Genially o Actividades de los tres tipos de electrización, con un ejemplo cotidiano para cada uno.

## 4.2.1 Electrización  por Inducción
La inducción electrostática es una redistribución de la carga eléctrica en un objeto causada por la influencia de cargas cercanas. 

<div id="emlab-javalab- electrostatic_induction" style="position:relative; width:100%; overflow:hidden; border-radius:12px; background:#f0f0f0;"></div>
<script>
(function(){
  var REF_WIDTH = 1905;   // ancho de referencia donde medimos la página de Javalab
  var CROP_LEFT = 0;
  var CROP_WIDTH = 1240;  // ancho de la zona útil (sin el panel de la derecha con el QR y los grados)
  var CROP_TOP = 260;     // dónde empieza la simulación (ya sin el menú de arriba)
  var CROP_HEIGHT = 790;  // hasta dónde llega, incluyendo los controles "Charged with (+)/(-)"
  var PAGE_HEIGHT = 1600; // alto que cargamos del iframe (de sobra para cubrir la zona)
  var wrap = document.getElementById('emlab-javalab- electrostatic_induction');
  function render(){
    var w = wrap.offsetWidth;
    var scale = w / CROP_WIDTH;
    wrap.style.height = (CROP_HEIGHT * scale) + 'px';
    wrap.innerHTML =
      '<iframe src="https://javalab.org/en/electrostatic_induction_en/" scrolling="no" ' +
      'sandbox="allow-scripts allow-same-origin allow-downloads" allow="fullscreen" ' +
      'style="position:absolute; top:' + (-CROP_TOP * scale) + 'px; left:' + (-CROP_LEFT * scale) + 'px; ' +
      'width:' + REF_WIDTH + 'px; height:' + PAGE_HEIGHT + 'px; border:none; ' +
      'transform:scale(' + scale + '); transform-origin: top left;"></iframe>';
  }
  render();
  window.addEventListener('resize', render);
})();
</script>

Objeto cargado cerca a un metal.
<div id="emlab-javalab- electrostatic_induction_bonding" style="position:relative; width:100%; overflow:hidden; border-radius:12px; background:#f0f0f0;"></div>
<script>
(function(){
  var REF_WIDTH = 1905;   // ancho de referencia donde medimos la página de Javalab
  var CROP_LEFT = 0;
  var CROP_WIDTH = 1230;  // ancho de la zona útil (sin el panel de la derecha con el QR y los grados)
  var CROP_TOP = 260;     // dónde empieza la simulación (ya sin el menú de arriba)
  var CROP_HEIGHT = 790;  // hasta dónde llega, incluyendo los controles "Charged with (+)/(-)"
  var PAGE_HEIGHT = 1600; // alto que cargamos del iframe (de sobra para cubrir la zona)
  var wrap = document.getElementById('emlab-javalab- electrostatic_induction_bonding');
  function render(){
    var w = wrap.offsetWidth;
    var scale = w / CROP_WIDTH;
    wrap.style.height = (CROP_HEIGHT * scale) + 'px';
    wrap.innerHTML =
      '<iframe src="https://javalab.org/en/electrostatic_induction_metal_bonding_en/" scrolling="no" ' +
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
