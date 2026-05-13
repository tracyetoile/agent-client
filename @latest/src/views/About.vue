<template>
  <main class="about-wrapper">
    <!-- Split Layout Grid Header Block -->
    <section class="intro-grid">
      <div class="title-space">
        <span class="section-tag">Who We Are</span>
        <h1>We design infrastructure <br><span class="gradient-text">for scaling digital operations.</span></h1>
      </div>
      <div class="desc-space">
        <p>
          Founded on operational efficiency, AgencyPortal delivers clean automation loops and client transparency layouts. We eliminate friction so business executives can build relationships that scale sustainably.
        </p>
      </div>
    </section>

    <!-- Structural Values and Blueprint Columns Grid -->
    <section class="blueprint-row">
      <div class="blueprint-card info-hero">
        <span class="card-tag">Our Intent</span>
        <h2>To unlock global productivity constraints.</h2>
        <p>We build layout frameworks that eliminate mundane cross-platform data mapping, letting builders create exceptional value without structural boundaries.</p>
      </div>

      <div class="blueprint-card lists-hero">
        <h2>Our Core Values</h2>
        <div class="pill-stack">
          <div class="value-pill">
            <span class="pill-dot blue"></span>
            <div class="pill-content">
              <strong>Iterative Innovation</strong>
              <p>Continuous enhancement cycles keep systems performant.</p>
            </div>
          </div>
          <div class="value-pill">
            <span class="pill-dot purple"></span>
            <div class="pill-content">
              <strong>Radical Transparency</strong>
              <p>Clear data loops build trust across distributed teams.</p>
            </div>
          </div>
          <div class="value-pill">
            <span class="pill-dot green"></span>
            <div class="pill-content">
              <strong>Excellence in Execution</strong>
              <p>High standard outputs ensure operational longevity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.section-tag, .card-tag {
  color: var(--primary);
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 1rem;
}

.intro-grid h1 {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
}

.gradient-text {
  background: linear-gradient(135deg, #0f62fe 0%, #8a3ffc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desc-space p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0;
}

.blueprint-row {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3rem;
}

.blueprint-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-card);
  padding: 3.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.01);
}

.info-hero h2 {
  font-size: 2rem;
  line-height: 1.3;
  margin: 0 0 1.5rem 0;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.info-hero p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

.blueprint-card h2 {
  font-size: 2rem;
  margin: 0 0 2rem 0;
  font-weight: 700;
}

.pill-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.value-pill {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1rem;
  border-radius: var(--radius-btn);
  transition: background-color 0.2s ease;
}

.value-pill:hover {
  background-color: var(--bg-app);
}

.pill-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 0.4rem;
  flex-shrink: 0;
}

.pill-dot.blue { background-color: #0f62fe; }
.pill-dot.purple { background-color: #8a3ffc; }
.pill-dot.green { background-color: #24a148; }

.pill-content strong {
  font-size: 1.1rem;
  color: var(--text-main);
  display: block;
  margin-bottom: 0.25rem;
}

.pill-content p {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.4;
}


@media (max-width: 992px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .blueprint-row {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .blueprint-card {
    padding: 2.5rem;
  }
  .about-wrapper {
    padding: 3rem 1.5rem;
  }
}

</style>
