<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pricing — WanderlustFin</title>
  <meta name="description" content="Choose your path to wealth clarity. Every tier includes total visibility and zero judgment. Start your awakening today.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Pricing — WanderlustFin">
  <meta property="og:description" content="Wealth technology for a new era. Plans starting at $37/month.">
  <meta property="og:type" content="website">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <style>
/* =============================================
   WANDERLUSTFIN — GLOBAL STYLES
   Color Palette: Amalfi Coast / Italy Inspired
   ============================================= */

:root {
  /* Core Palette */
  --cream: #F5F2ED;
  --cream-warm: #FAF8F5;
  --sand: #EBE6DF;
  --stone-light: #E2DDD5;
  --stone: #C9C2B8;
  --stone-warm: #B8AFA3;
  --taupe: #9A9086;
  
  /* Hydrangea Blues */
  --hydrangea-light: #B8C5D4;
  --hydrangea: #8FA3B8;
  --hydrangea-deep: #6B839C;
  
  /* Sage Greens */
  --sage-light: #A8B89A;
  --sage: #6B7B5E;
  --sage-deep: #5A6B4E;
  
  /* Darks */
  --slate: #4A5058;
  --iron: #3D4248;
  --charcoal: #2C3035;
  
  /* Warm Accents */
  --wood-light: #A68B6A;
  --wood: #8B6B4A;
  
  /* Semantic */
  --text-primary: var(--iron);
  --text-secondary: var(--slate);
  --text-muted: var(--taupe);
  --bg-primary: var(--cream);
  --bg-card: var(--cream-warm);
  --accent-primary: var(--hydrangea-deep);
  --accent-secondary: var(--sage);
  
  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Jost', sans-serif;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-3xl: 8rem;
}

/* Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-primary);
  background: var(--bg-primary);
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

h1 { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 300; }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
h4 { font-size: clamp(1.25rem, 2vw, 1.5rem); }

p {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

em {
  font-style: italic;
  color: var(--accent-primary);
}

a {
  color: var(--accent-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--sage);
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.container-narrow {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.section {
  padding: var(--space-2xl) 0;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto var(--space-xl);
}

.section-header h2 {
  margin-bottom: var(--space-sm);
}

.section-header p {
  font-size: 1.15rem;
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-md) 0;
  background: rgba(245, 242, 237, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--stone-light);
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.logo span {
  color: var(--hydrangea-deep);
}

.nav-links {
  display: flex;
  gap: var(--space-lg);
  list-style: none;
}

.nav-links a {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--hydrangea-deep);
}

.nav-cta {
  padding: 0.75rem 1.5rem;
  background: var(--hydrangea-deep);
  color: var(--cream-warm) !important;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.nav-cta:hover {
  background: var(--iron);
  color: var(--cream-warm) !important;
}

/* Mobile Nav Toggle */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--iron);
  margin: 5px 0;
  transition: 0.3s;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
}

.btn-primary {
  background: var(--hydrangea-deep);
  color: var(--cream-warm);
}

.btn-primary:hover {
  background: var(--iron);
  color: var(--cream-warm);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--hydrangea-deep);
  border: 1px solid var(--hydrangea-deep);
}

.btn-secondary:hover {
  background: var(--hydrangea-deep);
  color: var(--cream-warm);
}

.btn-sage {
  background: var(--sage);
  color: var(--cream-warm);
}

.btn-sage:hover {
  background: var(--sage-deep);
  color: var(--cream-warm);
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--stone);
}

.btn-ghost:hover {
  border-color: var(--hydrangea-deep);
  color: var(--hydrangea-deep);
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 0.85rem;
}

/* Cards */
.card {
  background: var(--bg-card);
  padding: var(--space-lg);
  transition: all 0.4s ease;
}

.card:hover {
  box-shadow: 0 10px 40px rgba(61, 66, 72, 0.08);
}

/* Forms */
.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-xs);
}

.form-input {
  width: 100%;
  padding: 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-primary);
  background: var(--cream-warm);
  border: 1px solid var(--stone-light);
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--hydrangea-deep);
  box-shadow: 0 0 0 3px rgba(107, 131, 156, 0.1);
}

.form-input::placeholder {
  color: var(--taupe);
}

textarea.form-input {
  min-height: 150px;
  resize: vertical;
}

/* Eyebrow Text */
.eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--hydrangea-deep);
  margin-bottom: var(--space-sm);
}

/* Divider */
.divider {
  width: 60px;
  height: 1px;
  background: var(--stone);
  margin: var(--space-lg) auto;
}

/* Hero Sections */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--space-3xl) 0;
  position: relative;
}

.hero-content {
  max-width: 700px;
}

.hero h1 {
  margin-bottom: var(--space-md);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: var(--space-lg);
}

/* Page Headers (non-hero) */
.page-header {
  padding: calc(var(--space-3xl) + 60px) 0 var(--space-xl);
  text-align: center;
  background: var(--cream-warm);
}

.page-header h1 {
  margin-bottom: var(--space-sm);
}

.page-header p {
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Footer */
footer {
  background: var(--iron);
  color: var(--cream-warm);
  padding: var(--space-xl) 0 var(--space-lg);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-xl);
}

.footer-brand .logo {
  color: var(--cream-warm);
  font-size: 1.3rem;
  margin-bottom: var(--space-md);
  display: block;
}

.footer-brand p {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
}

.footer-links h5 {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: var(--space-md);
  color: var(--sage-light);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--space-xs);
}

.footer-links a {
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: var(--cream-warm);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: var(--space-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
}

.footer-bottom a {
  color: rgba(255,255,255,0.5);
}

.footer-bottom a:hover {
  color: var(--cream-warm);
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-0 { margin-bottom: 0; }
.mb-sm { margin-bottom: var(--space-sm); }
.mb-md { margin-bottom: var(--space-md); }
.mb-lg { margin-bottom: var(--space-lg); }
.mb-xl { margin-bottom: var(--space-xl); }

.mt-0 { margin-top: 0; }
.mt-sm { margin-top: var(--space-sm); }
.mt-md { margin-top: var(--space-md); }
.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }

.bg-cream { background: var(--cream); }
.bg-warm { background: var(--cream-warm); }
.bg-sage { background: var(--sage); color: var(--cream-warm); }
.bg-slate { background: var(--slate); color: var(--cream-warm); }
.bg-iron { background: var(--iron); color: var(--cream-warm); }

/* Responsive */
@media (max-width: 968px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--cream-warm);
    flex-direction: column;
    padding: var(--space-md);
    gap: var(--space-md);
    border-bottom: 1px solid var(--stone-light);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding: calc(var(--space-3xl) + 40px) 0 var(--space-2xl);
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}

</style>
  
  <style>
    .pricing-hero {
      background: var(--cream-warm);
      padding: calc(var(--space-3xl) + 60px) 0 var(--space-xl);
      text-align: center;
    }

    .pricing-hero h1 {
      margin-bottom: var(--space-sm);
    }

    .pricing-hero p {
      font-size: 1.15rem;
      max-width: 550px;
      margin: 0 auto;
    }

    .pricing-section {
      padding: var(--space-xl) 0 var(--space-2xl);
      background: var(--cream-warm);
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-lg);
      align-items: start;
      max-width: 1100px;
      margin: 0 auto;
    }

    .pricing-card {
      background: var(--cream);
      padding: var(--space-xl);
      position: relative;
      transition: all 0.4s ease;
    }

    .pricing-card:hover {
      box-shadow: 0 20px 50px rgba(61, 66, 72, 0.1);
    }

    .pricing-card.featured {
      background: var(--slate);
      color: var(--cream-warm);
      transform: scale(1.03);
      box-shadow: 0 30px 60px rgba(44, 44, 44, 0.2);
    }

    .pricing-badge {
      position: absolute;
      top: 0;
      right: var(--space-md);
      background: var(--wood);
      color: var(--cream-warm);
      padding: 0.5rem 1rem;
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .tier-name {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--hydrangea-deep);
      margin-bottom: var(--space-xs);
    }

    .pricing-card.featured .tier-name {
      color: var(--hydrangea-light);
    }

    .tier-title {
      font-family: var(--font-display);
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: var(--space-sm);
    }

    .tier-tagline {
      font-style: italic;
      font-family: var(--font-display);
      font-size: 1rem;
      opacity: 0.8;
      margin-bottom: var(--space-md);
    }

    .price {
      font-family: var(--font-display);
      font-size: 2.8rem;
      font-weight: 300;
      margin-bottom: var(--space-xs);
    }

    .pricing-card.featured .price {
      color: var(--cream-warm);
    }

    .price span {
      font-size: 1rem;
      opacity: 0.7;
    }

    .price-annual {
      font-size: 0.85rem;
      opacity: 0.7;
      margin-bottom: var(--space-lg);
    }

    .pricing-card.featured .price-annual {
      color: var(--cream-warm);
    }

    .features-list {
      list-style: none;
      margin-bottom: var(--space-lg);
      border-top: 1px solid var(--stone-light);
      padding-top: var(--space-md);
    }

    .pricing-card.featured .features-list {
      border-color: rgba(255,255,255,0.2);
    }

    .features-list li {
      padding: var(--space-xs) 0;
      font-size: 0.9rem;
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
    }

    .features-list li::before {
      content: '✓';
      color: var(--sage);
      font-weight: 500;
      flex-shrink: 0;
    }

    .pricing-card.featured .features-list li::before {
      color: var(--sage-light);
    }

    .pricing-card .btn {
      width: 100%;
      text-align: center;
    }

    .pricing-card.featured .btn-primary {
      background: var(--cream-warm);
      color: var(--slate);
    }

    .pricing-card.featured .btn-primary:hover {
      background: white;
    }

    /* Comparison Table */
    .comparison-section {
      padding: var(--space-2xl) 0;
      background: var(--cream);
    }

    .comparison-section h2 {
      text-align: center;
      margin-bottom: var(--space-xl);
    }

    .comparison-table {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      border-collapse: collapse;
    }

    .comparison-table th,
    .comparison-table td {
      padding: var(--space-sm) var(--space-md);
      text-align: center;
      border-bottom: 1px solid var(--stone-light);
    }

    .comparison-table th {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 400;
      background: var(--cream-warm);
    }

    .comparison-table th:first-child {
      text-align: left;
    }

    .comparison-table td:first-child {
      text-align: left;
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .comparison-table .check {
      color: var(--sage);
      font-size: 1.1rem;
    }

    .comparison-table .dash {
      color: var(--stone);
    }

    /* FAQ Section */
    .pricing-faq {
      padding: var(--space-2xl) 0;
      background: var(--cream-warm);
    }

    .pricing-faq h2 {
      text-align: center;
      margin-bottom: var(--space-xl);
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
      max-width: 900px;
      margin: 0 auto;
    }

    .faq-item {
      padding-bottom: var(--space-md);
      border-bottom: 1px solid var(--stone-light);
    }

    .faq-question {
      font-family: var(--font-display);
      font-size: 1.15rem;
      color: var(--text-primary);
      margin-bottom: var(--space-xs);
    }

    .faq-answer {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    /* Guarantee */
    .guarantee-section {
      padding: var(--space-xl) 0;
      background: var(--sage);
      color: var(--cream-warm);
      text-align: center;
    }

    .guarantee-section h3 {
      color: var(--cream-warm);
      margin-bottom: var(--space-sm);
    }

    .guarantee-section p {
      color: rgba(255,255,255,0.9);
      max-width: 600px;
      margin: 0 auto;
    }

    /* CTA */
    .pricing-cta {
      padding: var(--space-2xl) 0;
      text-align: center;
      background: var(--cream);
    }

    .pricing-cta h2 {
      margin-bottom: var(--space-md);
    }

    .pricing-cta p {
      font-size: 1.1rem;
      margin-bottom: var(--space-lg);
    }

    @media (max-width: 968px) {
      .pricing-grid {
        grid-template-columns: 1fr;
        max-width: 450px;
      }

      .pricing-card.featured {
        transform: none;
        order: -1;
      }

      .faq-grid {
        grid-template-columns: 1fr;
      }

      .comparison-table {
        font-size: 0.85rem;
      }

      .comparison-table th,
      .comparison-table td {
        padding: var(--space-xs) var(--space-sm);
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <div class="container">
      <a href="index.html" class="logo">Wanderlust<span>Fin</span></a>
      <button class="nav-toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="features.html">Features</a></li>
        <li><a href="https://app.wanderlustfin.com/pricing">Pricing</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Resources</a></li>
        <li><a href="quiz.html" class="nav-cta">Take the Quiz</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero -->
  <section class="pricing-hero">
    <div class="container">
      <p class="eyebrow">Simple Pricing</p>
      <h1>Choose your path to <em>wealth clarity</em></h1>
      <p>Every tier includes our core promise: total visibility, zero judgment.</p>
    </div>
  </section>

  <!-- Pricing Cards -->
  <section class="pricing-section">
    <div class="container">
      <div class="pricing-grid">
        
        <!-- Awakening Tier -->
        <div class="pricing-card">
          <p class="tier-name">Foundation</p>
          <h3 class="tier-title">The Awakening</h3>
          <p class="tier-tagline">"I finally know where I stand."</p>
          <p class="price">$37<span>/month</span></p>
          <p class="price-annual">or $297/year (save $147)</p>
          <ul class="features-list">
            <li>Connect up to 3 accounts via Plaid</li>
            <li>Sync checking, savings, stocks, HYSA</li>
            <li>Basic dashboard & tracking</li>
            <li>Monthly snapshot summaries</li>
            <li>Wealth identity quiz + archetype</li>
            <li>1 savings goal with progress</li>
            <li>Mobile app access</li>
          </ul>
          <a href="https://app.wanderlustfin.com/pricing" class="btn btn-secondary">Start Your Awakening</a>
        </div>

        <!-- Expansion Tier -->
        <div class="pricing-card featured">
          <span class="pricing-badge">Most Popular</span>
          <p class="tier-name">Growth</p>
          <h3 class="tier-title">The Expansion</h3>
          <p class="tier-tagline">"I'm building wealth on purpose."</p>
          <p class="price">$67<span>/month</span></p>
          <p class="price-annual">or $547/year (save $257)</p>
          <ul class="features-list">
            <li>Everything in Awakening, plus:</li>
            <li>Unlimited Plaid account connections</li>
            <li>Stocks, insurance, HYSA, all synced</li>
            <li>Multiple savings goals</li>
            <li>1 Business Goal Tracker</li>
            <li>AI Advisor — monthly insights</li>
            <li>Spending pattern analysis</li>
            <li>Reserves builder + recommendations</li>
            <li>Year-over-year comparisons</li>
            <li>Priority support</li>
          </ul>
          <a href="https://app.wanderlustfin.com/pricing" class="btn btn-primary">Begin Your Expansion</a>
        </div>

        <!-- Embodiment Tier -->
        <div class="pricing-card">
          <p class="tier-name">Legacy</p>
          <h3 class="tier-title">The Embodiment</h3>
          <p class="tier-tagline">"I'm not tracking wealth—I'm embodying it."</p>
          <p class="price">$127<span>/month</span></p>
          <p class="price-annual">or $997/year (save $527)</p>
          <ul class="features-list">
            <li>Everything in Expansion, plus:</li>
            <li>Portfolio + investment tracking</li>
            <li>AI Advisor — weekly insights</li>
            <li>Unlimited Business Goal Trackers</li>
            <li>Allocation recommendations</li>
            <li>Quarterly wealth check-ins</li>
            <li>Stripe + booking integration</li>
            <li>Early access to new features</li>
            <li>Founding member badge</li>
          </ul>
          <a href="https://app.wanderlustfin.com/pricing" class="btn btn-secondary">Embody Your Legacy</a>
        </div>

      </div>
    </div>
  </section>

  <!-- Guarantee -->
  <section class="guarantee-section">
    <div class="container">
      <h3>14-Day Clarity Guarantee</h3>
      <p>If WanderlustFin doesn't bring you more clarity about your finances within 14 days, we'll refund your first month. No questions, no hard feelings.</p>
    </div>
  </section>

  <!-- Feature Comparison -->
  <section class="comparison-section">
    <div class="container">
      <h2>Compare Plans</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Awakening</th>
            <th>Expansion</th>
            <th>Embodiment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plaid Account Connections</td>
            <td>Up to 3</td>
            <td>Unlimited</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Wealth Identity Quiz</td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Dashboard & Tracking</td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Mobile App</td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Savings Goals</td>
            <td>1</td>
            <td>Multiple</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>Business Goal Tracker</td>
            <td><span class="dash">—</span></td>
            <td>1</td>
            <td>Unlimited</td>
          </tr>
          <tr>
            <td>AI Advisor Insights</td>
            <td><span class="dash">—</span></td>
            <td>Monthly</td>
            <td>Weekly</td>
          </tr>
          <tr>
            <td>Spending Pattern Analysis</td>
            <td><span class="dash">—</span></td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Reserves Builder</td>
            <td><span class="dash">—</span></td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Portfolio Tracking</td>
            <td><span class="dash">—</span></td>
            <td><span class="dash">—</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Stripe Integration</td>
            <td><span class="dash">—</span></td>
            <td><span class="dash">—</span></td>
            <td><span class="check">✓</span></td>
          </tr>
          <tr>
            <td>Priority Support</td>
            <td><span class="dash">—</span></td>
            <td><span class="check">✓</span></td>
            <td><span class="check">✓</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- FAQ -->
  <section class="pricing-faq">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <p class="faq-question">Can I switch plans later?</p>
          <p class="faq-answer">Absolutely. Upgrade or downgrade anytime from your account settings. Changes take effect on your next billing cycle.</p>
        </div>
        <div class="faq-item">
          <p class="faq-question">Is my financial data secure?</p>
          <p class="faq-answer">Yes. We use Plaid for bank connections — the same technology used by Venmo, Robinhood, and thousands of financial apps. We never store your bank credentials.</p>
        </div>
        <div class="faq-item">
          <p class="faq-question">What's the difference between savings goals and business goals?</p>
          <p class="faq-answer">Savings goals track specific amounts you're saving toward (emergency fund, vacation). Business Goal Tracker helps you monitor revenue targets, program launches, or business milestones.</p>
        </div>
        <div class="faq-item">
          <p class="faq-question">Do you offer refunds?</p>
          <p class="faq-answer">Yes — our 14-Day Clarity Guarantee means if you don't find value in the first two weeks, we'll refund your first month, no questions asked.</p>
        </div>
        <div class="faq-item">
          <p class="faq-question">What types of accounts can I connect?</p>
          <p class="faq-answer">Via Plaid, you can connect checking accounts, savings accounts, high-yield savings (HYSA), investment/brokerage accounts, credit cards, and some insurance accounts.</p>
        </div>
        <div class="faq-item">
          <p class="faq-question">Is there a free trial?</p>
          <p class="faq-answer">We don't offer a free trial, but our 14-day guarantee means you can try risk-free. If it's not for you, just let us know.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="pricing-cta">
    <div class="container">
      <h2>Not sure which plan is right for you?</h2>
      <p>Take our free Wealth Archetype Quiz to discover your relationship with money — and which tier matches your current season.</p>
      <a href="quiz.html" class="btn btn-primary btn-large">Take the Free Quiz</a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">Wanderlust<span>Fin</span></a>
          <p>Your Wealth Identity Operating System. Clarity, not anxiety. Expansion, not restriction.</p>
        </div>
        <div class="footer-links">
          <h5>Product</h5>
          <ul>
            <li><a href="features.html">Features</a></li>
            <li><a href="https://app.wanderlustfin.com/pricing">Pricing</a></li>
            <li><a href="quiz.html">Take the Quiz</a></li>
            <li><a href="https://app.wanderlustfin.com/pricing">Get Started</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="blog.html">Resources</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h5>Legal</h5>
          <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 WanderlustFin LLC. All rights reserved.</p>
        <p><a href="mailto:hello@wanderlustfin.com">hello@wanderlustfin.com</a></p>
      </div>
    </div>
  </footer>

  <script>
    document.querySelector('.nav-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('active');
    });
  </script>

</body>
</html>
