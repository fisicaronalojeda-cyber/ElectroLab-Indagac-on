---
widget: blank
headless: true
weight: 10
title: ""
design:
  columns: '1'
---

<div class="emlab">
<style>
  .emlab{
    --bg:#0B1220; --card:#141B2E;
    --border:rgba(255,255,255,0.08); --border-strong:rgba(255,255,255,0.14);
    --text:#E7ECF5; --text-soft:#8B93A7;
    --teal:#2DD4BF; --amber:#F5B700;
    --violet:#A78BFA; --pink:#F472B6; --green:#34D399; --blue:#60A5FA; --orange:#FB923C;
    display:block; background:var(--bg); color:var(--text);
    font-family:'Inter',sans-serif; line-height:1.6; border-radius:16px; overflow:hidden;
  }
  .emlab *{box-sizing:border-box;}
  .emlab h1, .emlab h2, .emlab h3{font-family:'Space Grotesk',sans-serif; margin:0; color:var(--text);}
  .emlab a{color:inherit; text-decoration:none;}
  .emlab .wrap{max-width:1180px; margin:0 auto; padding:0 28px;}

  .emlab .hero{padding:56px 0 48px;}
  .emlab .hero-grid{display:grid; grid-template-columns:1.05fr 1fr; gap:48px; align-items:center;}
  @media (max-width:900px){ .emlab .hero-grid{grid-template-columns:1fr;} }
  .emlab .eyebrow{display:inline-flex; align-items:center; gap:8px; font-size:12px; letter-spacing:0.1em; color:var(--teal); margin-bottom:18px;}
  .emlab .eyebrow .dot{width:6px; height:6px; border-radius:50%; background:var(--teal);}
  .emlab .hero h1{font-size:clamp(30px,4.6vw,46px); font-weight:700; line-height:1.1; letter-spacing:-0.02em;}
  .emlab .hero h1 .accent{color:var(--amber);}
  .emlab .hero p.lead{color:var(--text-soft); font-size:16px; max-width:480px; margin:20px 0 28px;}
  .emlab .cta-row{display:flex; gap:14px; flex-wrap:wrap;}
  .emlab .elab-btn{display:inline-flex; align-items:center; gap:8px; padding:13px 22px; border-radius:9px; font-weight:600; font-size:14px;}
  .emlab .elab-btn-primary{background:var(--teal); color:#04211D;}
  .emlab .elab-btn-outline{border:1px solid var(--border-strong); color:var(--text);}

  .emlab .hero-visual{position:relative; display:flex; flex-direction:column; align-items:center; gap:18px; min-height:auto;}
  .emlab .scene-glow{position:absolute; width:340px; height:340px; border-radius:50%; background:radial-gradient(circle, rgba(45,212,191,0.16), transparent 70%); filter:blur(6px); top:0; left:50%; transform:translateX(-50%);}
  .emlab .flow-dot{animation:emlab-flow 3.6s linear infinite;}
  .emlab .flow-dot.d2{animation-delay:1.2s;}
  .emlab .flow-dot.d3{animation-delay:2.4s;}
  @keyframes emlab-flow{
    0%{ offset-distance:0%; opacity:0; }
    8%{ opacity:1; }
    92%{ opacity:1; }
    100%{ offset-distance:100%; opacity:0; }
  }
  .emlab .pulse-ring{animation:emlab-pulse 2.4s ease-out infinite;}
  .emlab .pulse-ring.p2{animation-delay:1.2s;}
  @keyframes emlab-pulse{
    0%{ r:16; opacity:0.55; }
    100%{ r:46; opacity:0; }
  }
  .emlab .callout{position:static; width:100%; max-width:340px; background:var(--card); border:1px solid var(--border-strong); border-radius:12px; padding:16px 18px; box-shadow:0 20px 40px rgba(0,0,0,0.35);}
  .emlab .callout .ct-title{font-size:13px; font-weight:600; color:var(--amber); margin-bottom:6px; display:flex; align-items:center; gap:6px;}
  .emlab .callout p{font-size:12.5px; color:var(--text-soft); margin:0;}

  .emlab .route{padding:8px 0 40px;}
  .emlab .section-label{display:flex; align-items:center; gap:10px; font-size:12px; letter-spacing:0.08em; color:var(--text-soft); margin-bottom:24px;}
  .emlab .section-label b{color:var(--text);}
  .emlab .stations{display:grid; grid-template-columns:repeat(3,1fr); gap:14px;}
  @media (max-width:760px){ .emlab .stations{grid-template-columns:repeat(2,1fr);} }
  @media (max-width:480px){ .emlab .stations{grid-template-columns:1fr;} }
  .emlab .station{background:var(--card); border:1px solid var(--border); border-radius:12px; padding:20px 18px; display:block; transition:box-shadow 0.3s;}
  .emlab .station.is-complete{box-shadow:0 0 0 1px rgba(31,157,90,0.5);}
  .emlab .apr-num-row{display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;}
  .emlab .station .num{font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:22px;}
  .emlab .apr-check{display:none; font-size:18px; color:var(--green);}
  .emlab .station.is-complete .apr-check{display:inline;}
  .emlab .station h3{font-size:15px; letter-spacing:0.01em; margin-bottom:8px; line-height:1.3;}
  .emlab .station p{font-size:12.5px; color:var(--text-soft); margin:0 0 14px;}
  .emlab .apr-progress-row{display:flex; align-items:center; gap:10px;}
  .emlab .apr-bar-track{height:9px; border-radius:5px; background:rgba(255,255,255,0.1); overflow:hidden; flex:1;}
  .emlab .apr-bar-fill{height:100%; width:0%; background:linear-gradient(90deg, var(--teal), var(--amber)); border-radius:5px; transition:width 0.4s ease;}
  .emlab .station.is-complete .apr-bar-fill{background:var(--green);}
  .emlab .apr-pct{font-size:13px; font-weight:700; color:var(--amber); min-width:34px; text-align:right;}
  .emlab .station.is-complete .apr-pct{color:var(--green);}

  .emlab .features{padding:8px 0 48px;}
  .emlab .fgrid{display:grid; grid-template-columns:repeat(5,1fr); gap:14px;}
  @media (max-width:1050px){ .emlab .fgrid{grid-template-columns:repeat(3,1fr);} }
  @media (max-width:700px){ .emlab .fgrid{grid-template-columns:repeat(2,1fr);} }
  @media (max-width:480px){ .emlab .fgrid{grid-template-columns:1fr;} }
  .emlab .fcard{background:var(--card); border:1px solid var(--border); border-radius:14px; padding:18px; display:flex; flex-direction:column; gap:10px;}
  .emlab .fcard .ftitle{font-size:11.5px; letter-spacing:0.05em; font-weight:600;}
  .emlab .fcard .fthumb{height:62px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:24px;}
  .emlab .fcard p{font-size:12.5px; color:var(--text-soft); margin:0; flex:1;}
  .emlab .fcard .flink{font-size:12.5px; font-weight:600; display:inline-flex; align-items:center; gap:6px;}

  .emlab .badges{border-top:1px solid var(--border); padding:22px 0;}
  .emlab .badge-row{display:flex; gap:32px; flex-wrap:wrap; justify-content:center; font-size:12.5px; color:var(--text-soft);}
  .emlab .badge-row span{display:flex; align-items:center; gap:8px;}
</style>

<section class="hero" id="inicio">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow"><span class="dot"></span>FÍSICA · SECUNDARIA</div>
      <h1>Electrostática y electricidad<br><span class="accent">laboratorio de indagación</span></h1>
      <p class="lead">6 aprendizajes, cada uno con su propia ruta de indagación: observa, pregúntate, formula hipótesis, experimenta con simuladores reales y evalúa lo que descubriste.</p>
      <div class="cta-row">
        <a class="elab-btn elab-btn-primary" href="#aprendizajes">Ver los 6 aprendizajes</a>
        <a class="elab-btn elab-btn-outline" href="#recursos">Ir a recursos</a>
        <a class="elab-btn elab-btn-outline" href="/progreso/">Mi progreso</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="scene-glow"></div>
      <svg width="420" height="340" viewBox="0 0 420 340" fill="none" style="position:relative; z-index:1; max-width:100%; height:auto;">
        <g stroke="rgba(255,255,255,0.10)" stroke-width="1.5" fill="none">
          <path d="M20 40 H140 V90 H210"/>
          <path d="M400 60 H300 V120 H250"/>
          <path d="M30 300 H120 V250 H180"/>
          <path d="M390 290 H320 V230"/>
          <circle cx="20" cy="40" r="3" fill="rgba(255,255,255,0.25)"/>
          <circle cx="400" cy="60" r="3" fill="rgba(255,255,255,0.25)"/>
          <circle cx="30" cy="300" r="3" fill="rgba(255,255,255,0.25)"/>
          <circle cx="390" cy="290" r="3" fill="rgba(255,255,255,0.25)"/>
        </g>
        <g fill="none" stroke="url(#fieldGrad)" stroke-width="1.6" opacity="0.85">
          <path d="M150 110 C 190 40, 250 40, 290 110"/>
          <path d="M150 130 C 200 95, 240 95, 290 130"/>
          <path d="M150 150 C 210 150, 230 150, 290 150"/>
          <path d="M150 170 C 200 205, 240 205, 290 170"/>
          <path d="M150 190 C 190 260, 250 260, 290 190"/>
        </g>
        <circle r="3.2" fill="#F5B700" class="flow-dot"><animateMotion dur="3.6s" repeatCount="indefinite" path="M150 110 C 190 40, 250 40, 290 110"/></circle>
        <circle r="3.2" fill="#2DD4BF" class="flow-dot d2"><animateMotion dur="3.6s" repeatCount="indefinite" path="M150 150 C 210 150, 230 150, 290 150"/></circle>
        <circle r="3.2" fill="#F5B700" class="flow-dot d3"><animateMotion dur="3.6s" repeatCount="indefinite" path="M150 190 C 190 260, 250 260, 290 190"/></circle>
        <circle cx="150" cy="150" r="16" fill="none" stroke="#F5B700" stroke-width="1.5" class="pulse-ring"/>
        <circle cx="290" cy="150" r="16" fill="none" stroke="#2DD4BF" stroke-width="1.5" class="pulse-ring p2"/>
        <circle cx="150" cy="150" r="26" fill="#F5B700"/>
        <line x1="140" y1="150" x2="160" y2="150" stroke="#3A2900" stroke-width="3"/>
        <line x1="150" y1="140" x2="150" y2="160" stroke="#3A2900" stroke-width="3"/>
        <circle cx="290" cy="150" r="26" fill="#2DD4BF"/>
        <line x1="280" y1="150" x2="300" y2="150" stroke="#04211D" stroke-width="3"/>
        <defs>
          <linearGradient id="fieldGrad" x1="150" y1="150" x2="290" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#F5B700"/>
            <stop offset="1" stop-color="#2DD4BF"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="callout">
        <div class="ct-title">✨ ¿Sabías que?</div>
        <p>Las líneas que ves salir de la carga positiva y llegar a la negativa representan el campo eléctrico real entre ambas.</p>
      </div>
    </div>
  </div>
</section>

<section class="route" id="aprendizajes">
  <div class="wrap">
    <div class="section-label">◇ <b>6 APRENDIZAJES</b> — cada uno con su ruta de indagación completa</div>
    <div class="stations">
      <a class="station" data-apr="aprendizaje-1-carga-electrica" href="/course/aprendizaje-1-carga-electrica/" style="border-top:2px solid var(--blue);"><div class="apr-num-row"><div class="num" style="color:var(--blue)">01</div><i class="apr-check">✓</i></div><h3>Carga eléctrica</h3><p>Qué es la carga y cómo se transfiere entre objetos.</p><div class="apr-progress-row"><div class="apr-bar-track"><div class="apr-bar-fill"></div></div><span class="apr-pct">0%</span></div></a>
      <a class="station" data-apr="aprendizaje-2-ley-coulomb" href="/course/aprendizaje-2-ley-coulomb/" style="border-top:2px solid var(--amber);"><div class="apr-num-row"><div class="num" style="color:var(--amber)">02</div><i class="apr-check">✓</i></div><h3>Fuerza eléctrica — Ley de Coulomb</h3><p>Cómo se atraen y repelen las cargas, y con qué fuerza.</p><div class="apr-progress-row"><div class="apr-bar-track"><div class="apr-bar-fill"></div></div><span class="apr-pct">0%</span></div></a>
      <a class="station" data-apr="aprendizaje-3-campo-electrico" href="/course/aprendizaje-3-campo-electrico/" style="border-top:2px solid var(--teal);"><div class="apr-num-row"><div class="num" style="color:var(--teal)">03</div><i class="apr-check">✓</i></div><h3>Campo eléctrico — Líneas de campo</h3><p>Cómo visualizar la influencia de una carga en el espacio.</p><div class="apr-progress-row"><div class="apr-bar-track"><div class="apr-bar-fill"></div></div><span class="apr-pct">0%</span></div></a>
      <a class="station" data-apr="aprendizaje-4-potencial-electrico" href="/course/aprendizaje-4-potencial-electrico/" style="border-top:2px solid var(--violet);"><div class="apr-num-row"><div class="num" style="color:var(--violet)">04</div><i class="apr-check">✓</i></div><h3>Energía y potencial eléctrico</h3><p>Qué es el voltaje y de dónde viene.</p><div class="apr-progress-row"><div class="apr-bar-track"><div class="apr-bar-fill"></div></div><span class="apr-pct">0%</span></div></a>
      <a class="station" data-apr="aprendizaje-5-magnitudes-electricas" href="/course/aprendizaje-5-magnitudes-electricas/" style="border-top:2px solid var(--green);"><div class="apr-num-row"><div class="num" style="color:var(--green)">05</div><i class="apr-check">✓</i></div><h3>Magnitudes eléctricas</h3><p>Voltaje, corriente, resistencia y la ley de Ohm.</p><div class="apr-progress-row"><div class="apr-bar-track"><div class="apr-bar-fill"></div></div><span class="apr-pct">0%</span></div></a>
      <a class="station" data-apr="aprendizaje-6-circuitos-electricos" href="/course/aprendizaje-6-circuitos-electricos/" style="border-top:2px solid var(--pink);"><div class="apr-num-row"><div class="num" style="color:var(--pink)">06</div><i class="apr-check">✓</i></div><h3>Circuitos eléctricos</h3><p>Cómo se comportan los circuitos en serie y en paralelo.</p><div class="apr-progress-row"><div class="apr-bar-track"><div class="apr-bar-fill"></div></div><span class="apr-pct">0%</span></div></a>
    </div>
  </div>
</section>

<section class="features" id="recursos">
  <div class="wrap">
    <div class="section-label">◇ <b>RECURSOS DEL MÓDULO</b> — todo en un solo lugar</div>
    <div class="fgrid">
      <div class="fcard" id="apuntes">
        <div class="ftitle" style="color:var(--amber)">APUNTES / TEORÍA</div>
        <div class="fthumb" style="background:rgba(245,183,0,0.12)">📐</div>
        <p>La sección "Conceptualización abstracta" de cada aprendizaje explica el tema paso a paso.</p>
        <a class="flink" style="color:var(--amber)" href="/course/aprendizaje-2-ley-coulomb/fuerza-coulomb/03-conceptualizacion-abstracta/">Ver ejemplo →</a>
      </div>
      <div class="fcard" id="laboratorio">
        <div class="ftitle" style="color:var(--teal)">LABORATORIOS VIRTUALES</div>
        <div class="fthumb" style="background:rgba(45,212,191,0.12)">⚡</div>
        <p>Simuladores PhET y heroes propios integrados en la sección "Experimentación activa" de cada tema.</p>
        <a class="flink" style="color:var(--teal)" href="/course/aprendizaje-2-ley-coulomb/fuerza-coulomb/04-experimentacion-activa/">Ver ejemplo →</a>
      </div>
      <div class="fcard" id="actividades">
        <div class="ftitle" style="color:var(--orange)">ACTIVIDADES INTERACTIVAS</div>
        <div class="fthumb" style="background:rgba(251,146,60,0.12)">🎮</div>
        <p>Actividades en Genially para reforzar cada tema, dentro de "Experimentación activa".</p>
        <a class="flink" style="color:var(--orange)" href="/course/aprendizaje-6-circuitos-electricos/circuitos-electricos/04-experimentacion-activa/">Ver ejemplo →</a>
      </div>
      <div class="fcard" id="evaluacion">
        <div class="ftitle" style="color:var(--violet)">EVALUACIÓN</div>
        <div class="fthumb" style="background:rgba(167,139,250,0.12)">📋</div>
        <p>Cada uno de los 9 temas cierra con su propia evaluación de aprendizajes.</p>
        <a class="flink" style="color:var(--violet)" href="/course/aprendizaje-2-ley-coulomb/fuerza-coulomb/05-evaluacion/">Ver ejemplo →</a>
      </div>
      <div class="fcard" id="guias">
        <div class="ftitle" style="color:var(--pink)">GUÍAS DESCARGABLES</div>
        <div class="fthumb" style="background:rgba(244,114,182,0.12)">📥</div>
        <p>Guías de laboratorio en PDF con tablas para registrar tus datos.</p>
        <a class="flink" style="color:var(--pink)" href="/guias_laboratorio.pdf">Descargar guías →</a>
      </div>
    </div>
  </div>
</section>

<div class="badges">
  <div class="wrap badge-row">
    <span>🖱️ 100% interactivo</span>
    <span>🧪 Aprendizaje por indagación</span>
    <span>⭐ Basado en competencias</span>
    <span>🔓 Recursos abiertos</span>
  </div>
</div>

<div style="border-top:1px solid var(--border); padding:22px 0; text-align:center;">
  <p style="margin:0 0 4px; font-size:13px; font-weight:700; letter-spacing:0.03em; color:var(--text);">COLEGIO EL PARAÍSO DE MANUELA BELTRÁN</p>
  <p style="margin:0; font-size:12px; color:var(--text-soft);">"Página Web" creada por Ronald Steven Ojeda Peña</p>
</div>
</div>
<script src="/js/progreso.js"></script>
