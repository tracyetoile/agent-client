<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Column 1: Core Company Meta Brand Pitch -->
      <div class="footer-brand-col">
        <div class="logo">
          <span class="logo-dot"></span>
          AgencyPortal
        </div>
        <p class="brand-desc">
          Automate your agency workflows, track real-time revenue cycles, and unify client communication on an enterprise platform.
        </p>
      </div>

      <!-- Column 2: Platform Internal Links Navigation Navigation Tracks -->
      <div class="footer-links-col">
        <h3>Platform</h3>
        <nav class="footer-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
          <router-link to="/contact">Contact Support</router-link>
        </nav>
      </div>

      <!-- Column 3: Shortcuts to Role Dashboards -->
      <div class="footer-links-col">
        <h3>Workspace Portals</h3>
        <nav class="footer-nav">
          <router-link to="/login">Agent Operations</router-link>
          <router-link to="/login">Client Project Board</router-link>
          <router-link to="/login">System Admin Control</router-link>
        </nav>
      </div>

      <!-- Column 4: Support Contact Channels Info Grid -->
      <div class="footer-links-col">
        <h3>Contact Channels</h3>
        <ul class="contact-info-list">
          <li><strong>Email:</strong> support@agencyportal.com</li>
          <li><strong>HQ:</strong> 100 Innovation Way, Suite 400</li>
          <li><strong>Hours:</strong> Mon - Fri, 9AM - 5PM EST</li>
        </ul>
      </div>
    </div>

    <!-- Bottom Attribution Copyright Rules Row Bar Line -->
    <div class="footer-bottom-bar">
      <div class="bottom-bar-inner">
        <p class="copyright-text">
          &copy; {{ new Date().getFullYear() }} AgencyPortal Inc. All rights reserved.
        </p>
        <div class="legal-links">
          <a href="#" @click.prevent>Privacy Policy</a>
          <a href="#" @click.prevent>Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  font-family: sans-serif;
  margin-top: auto; /* Pushes footer down on short viewports */
  padding-top: 5rem;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 4rem;
  
}

.logo {
  font-size: 1.35rem;
  font-weight: 700;
  color: #161616;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background-color: #0f62fe;
  border-radius: 50%;
}

.brand-desc {
  color: #525252;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  max-width: 320px;
}

.footer-links-col h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #161616;
  margin-top: 0;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-nav a {
  color: #525252;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.15s ease;
  width: fit-content;
}

.footer-nav a:hover {
  color: #0f62fe;
}

.contact-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #525252;
  font-size: 0.95rem;
  line-height: 1.5;
}

.contact-info-list strong {
  color: #161616;
}

/* Bottom Bar Separation Rules Layout line */
.footer-bottom-bar {
  border-top: 1px solid #f0f0f0;
  padding: 1.75rem 2rem;
}

.bottom-bar-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright-text {
  color: #6f6f6f;
  font-size: 0.85rem;
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a {
  color: #6f6f6f;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.15s ease;
}

.legal-links a:hover {
  color: #0f62fe;
}

/* Fluid Scalability Media Query Breakpoints Layout Rules */
@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (max-width: 550px) {
  .footer {
    padding-top: 3.5rem;
  }
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .bottom-bar-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }
  .legal-links {
    gap: 1.5rem;
  }
}
</style>
