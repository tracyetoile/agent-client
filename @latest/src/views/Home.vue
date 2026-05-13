<template>
  <main class="home-container">
    <!-- Hero Banner Component Area -->
    <section class="hero-block">
      <div class="badge-chip">Now Live: Version 2.0</div>
      <h1>Next-gen client ops <br><span class="gradient-text">built for modern teams.</span></h1>
      <p class="subtitle">
        Automate your agency workflows, track real-time revenue cycles, and unify client communication on an enterprise-grade platform.
      </p>
      <div class="cta-row">
        <router-link to="/registration" class="primary-cta">Start Free Trial</router-link>
        <router-link to="/about" class="secondary-cta">See How It Works →</router-link>
      </div>
    </section>

    <!-- Elevated Multi-Feature Card Matrix -->
    <section class="features-matrix">
      <div class="feature-card">
       
        <h3>Unified Workspace</h3>
        <p>Jump into a single, intuitive hub to manage ongoing tasks, deliverables, and critical milestones without switching tabs.</p>
      </div>

      <div class="feature-card">
        
        <h3>Predictive Analytics</h3>
        <p>Monitor pipeline visibility, financial trends, and team margins using automated intelligence tools built into your panel.</p>
      </div>

      <div class="feature-card">
        
        <h3>Enterprise Guard</h3>
        <p>Keep sensitive organizational files, documents, and client configurations locked down with hardware-grade safety matrices.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.hero-block {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;
}

.badge-chip {
  background: rgba(15, 98, 254, 0.08);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
}

.hero-block h1 {
  font-size: 4rem;
  line-height: 1.15;
  color: var(--text-main);
  letter-spacing: -0.03em;
  margin: 0 0 1.75rem 0;
  font-weight: 700;
}

.gradient-text {
  background: linear-gradient(135deg, #0f62fe 0%, #8a3ffc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.35rem;
  color: var(--text-muted);
  max-width: 720px;
  line-height: 1.6;
  margin: 0 0 3rem 0;
}

.cta-row {
  display: flex;
  gap: 1.25rem;
}

.primary-cta {
  background-color: var(--primary);
  color: #000000;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: var(--radius-btn);
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.primary-cta:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(15, 98, 254, 0.4);
}

.secondary-cta {
  color: var(--text-main);
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: var(--radius-btn);
  font-weight: 600;
  font-size: 1.05rem;
  transition: background-color 0.2s ease;
}

.secondary-cta:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.features-matrix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.feature-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-card);
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 32px rgba(0, 0, 0, 0.06);
}

.icon-wrapper {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.blue-zone { background: rgba(15, 98, 254, 0.08); }
.green-zone { background: rgba(36, 161, 72, 0.08); }
.purple-zone { background: rgba(138, 63, 252, 0.08); }

.feature-card h3 {
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.feature-card p {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}


@media (max-width: 992px) {
  .features-matrix {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .hero-block h1 {
    font-size: 2.75rem;
    line-height: 1.2;
  }
  .home-container {
    padding: 3rem 1.5rem;
  }
}

</style>
