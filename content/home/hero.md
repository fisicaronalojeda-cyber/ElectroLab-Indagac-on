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
  .emlab .btn{display:inline-flex; align-items:center; gap:8px; padding:13px 22px; border-radius:9px; font-weight:600; font-size:14px;}
  .emlab .btn-primary{background:var(--teal); color:#04211D;}
  .emlab .btn-outline{border:1px solid var(--border-strong); color:var(--text);}

  .emlab .hero-visual{position:relative; display:flex; align-items:center; justify-content:center; min-height:320px;}
  .emlab .scene-glow{position:absolute; width:340px; height:340px; border-radius:50%; background:radial-gradient(circle, rgba(45,212,191,0.16), transparent 70%); filter:blur(6px);}
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
  .emlab .callout{position:absolute; bottom:-6px; right:-4px; max-width:250px; background:var(--card); border:1px solid var(--border-strong); border-radius:12px; padding:16px 18px; box-shadow:0 20px 40px rgba(0,0,0,0.35);}
  .emlab .callout .ct-title{font-size:13px; font-weight:600; color:var(--amber); margin-bottom:6px; display:flex; align-items:center; gap:6px;}
  .emlab .callout p{font-size:12.5px; color:var(--text-soft); margin:0;}

  .emlab .route{padding:8px 0 40px;}
  .emlab .section-label{display:flex; align-items:center; gap:10px; font-size:12px; letter-spacing:0.08em; color:var(--text-soft); margin-bottom:24px;}
  .emlab .section-label b{color:var(--text);}
  .emlab .stations{display:grid; grid-template-columns:repeat(7,1fr); gap:12px;}
  @media (max-width:1000px){ .emlab .stations{grid-template-columns:repeat(4,1fr);} }
  @media (max-width:640px){ .emlab .stations{grid-template-columns:repeat(2,1fr);} }
  .emlab .station{background:var(--card); border:1px solid var(--border); border-radius:12px; padding:18px 16px;}
  .emlab .station .num{font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:20px; margin-bottom:10px;}
  .emlab .station .icon{font-size:20px; margin-bottom:10px; display:block;}
  .emlab .station h3{font-size:13px; letter-spacing:0.03em; margin-bottom:6px;}
  .emlab .station p{font-size:12px; color:var(--text-soft); margin:0;}

  .emlab .features{padding:8px 0 48px;}
  .emlab .fgrid{display:grid; grid-template-columns:repeat(4,1fr); gap:16px;}
  @media (max-width:900px){ .emlab .fgrid{grid-template-columns:repeat(2,1fr);} }
  @media (max-width:560px){ .emlab .fgrid{grid-template-columns:1fr;} }
  .emlab .fcard{background:var(--card); border:1px solid var(--border); border-radius:14px; padding:20px; display:flex; flex-direction:column; gap:12px;}
  .emlab .fcard .ftitle{font-size:12px; letter-spacing:0.06em; font-weight:600;}
  .emlab .fcard .fthumb{height:74px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:26px;}
  .emlab .fcard p{font-size:13px; color:var(--text-soft); margin:0; flex:1;}
  .emlab .fcard .flink{font-size:13px; font-weight:600; display:inline-flex; align-items:center; gap:6px;}

  .emlab .badges{border-top:1px solid var(--border); padding:22px 0;}
  .emlab .badge-row{display:flex; gap:32px; flex-wrap:wrap; justify-content:center; font-size:12.5px; color:var(--text-soft);}
  .emlab .badge-row span{display:flex; align-items:center; gap:8px;}
</style>

<section class="hero" id="inicio">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow"><span class="dot"></span>FÍSICA · SECUNDARIA</div>
      <h1>Electrostática y circuitos<br><span class="accent">laboratorio de indagación</span></h1>
      <p class="lead">Explora fenómenos, formula preguntas, experimenta con simuladores reales, analiza datos y construye tus propias explicaciones sobre cómo interactúan las cargas eléctricas.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#ruta">Comenzar secuencia</a>
        <a class="btn btn-outline" href="#laboratorio">Ir al laboratorio</a>
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

<section class="route" id="ruta">
  <div class="wrap">
    <div class="section-label">◇ <b>RUTA DE INDAGACIÓN</b> — 7 estaciones</div>
    <div class="stations">
      <div class="station" style="border-top:2px solid var(--blue);"><div class="num" style="color:var(--blue)">01</div><span class="icon">🔍</span><h3>OBSERVA</h3><p>Observa el fenómeno y recoge información.</p></div>
      <div class="station" style="border-top:2px solid var(--orange);"><div class="num" style="color:var(--orange)">02</div><span class="icon">❓</span><h3>PREGUNTA</h3><p>Plantea preguntas de indagación.</p></div>
      <div class="station" style="border-top:2px solid var(--amber);"><div class="num" style="color:var(--amber)">03</div><span class="icon">💡</span><h3>HIPÓTESIS</h3><p>Formula hipótesis y predicciones.</p></div>
      <div class="station" style="border-top:2px solid var(--green);"><div class="num" style="color:var(--green)">04</div><span class="icon">🧪</span><h3>EXPERIMENTA</h3><p>Diseña y realiza experimentos.</p></div>
      <div class="station" style="border-top:2px solid var(--teal);"><div class="num" style="color:var(--teal)">05</div><span class="icon">📊</span><h3>ANALIZA</h3><p>Organiza y analiza tus datos.</p></div>
      <div class="station" style="border-top:2px solid var(--violet);"><div class="num" style="color:var(--violet)">06</div><span class="icon">🧠</span><h3>EXPLICA</h3><p>Construye explicaciones propias.</p></div>
      <div class="station" style="border-top:2px solid var(--pink);"><div class="num" style="color:var(--pink)">07</div><span class="icon">🎯</span><h3>EVALÚA</h3><p>Evalúa y comunica tus conclusiones.</p></div>
    </div>
  </div>
</section>

<section class="features">
  <div class="wrap fgrid">
    <div class="fcard" id="laboratorio">
      <div class="ftitle" style="color:var(--teal)">SIMULACIONES INTERACTIVAS</div>
      <div class="fthumb" style="background:rgba(45,212,191,0.12)">⚡</div>
      <p>Explora con PhET: ley de Coulomb, líneas de campo, equipotenciales y circuitos.</p>
      <a class="flink" style="color:var(--teal)" href="/hero-cargas-puntuales.html">Ir al laboratorio →</a>
    </div>
    <div class="fcard" id="actividades">
      <div class="ftitle" style="color:var(--orange)">ACTIVIDADES INTERACTIVAS</div>
      <div class="fthumb" style="background:rgba(251,146,60,0.12)">🎮</div>
      <p>Actividades en Genially y formularios para poner a prueba lo aprendido.</p>
      <a class="flink" style="color:var(--orange)" href="/course/electrostatica/">Explorar actividades →</a>
    </div>
    <div class="fcard" id="recursos">
      <div class="ftitle" style="color:var(--amber)">CONCEPTOS CLAVE</div>
      <div class="fthumb" style="background:rgba(245,183,0,0.12)">📐</div>
      <p>Repasa carga, fuerza de Coulomb, campo eléctrico, potencial y ley de Ohm.</p>
      <a class="flink" style="color:var(--amber)" href="/course/electrostatica/03-teoria-coulomb/">Ver conceptos →</a>
    </div>
    <div class="fcard" id="evaluacion">
      <div class="ftitle" style="color:var(--violet)">EVALUACIÓN</div>
      <div class="fthumb" style="background:rgba(167,139,250,0.12)">📋</div>
      <p>Prueba previa, post prueba y actividad integradora final.</p>
      <a class="flink" style="color:var(--violet)" href="/course/electrostatica/08-post-prueba/">Ir a evaluación →</a>
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
</div>
