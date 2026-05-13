<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <span class="logo-dot"></span>
        AgencyPortal
      </div>
      
      <!-- Mobile Menu Toggle Hamburger Layout -->
      <button 
        class="mobile-toggle" 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        :class="{ 'is-open': isMobileMenuOpen }"
        aria-label="Toggle navigation menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Navigation Tracking Menu Container Links Block -->
      <nav class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
        <router-link to="/" exact-active-class="active-link" @click="isMobileMenuOpen = false">Home</router-link>
        <router-link to="/about" active-class="active-link" @click="isMobileMenuOpen = false">About</router-link>
        <router-link to="/contact" active-class="active-link" @click="isMobileMenuOpen = false">Contact</router-link>
        
        <router-link v-if="currentSession.isAuthenticated" to="/dashboard" active-class="active-link" @click="isMobileMenuOpen = false">Dashboard</router-link>
        <router-link v-if="currentSession.isAuthenticated" to="/profile" active-class="active-link" @click="isMobileMenuOpen = false">Profile</router-link>
        
        <router-link v-if="!currentSession.isAuthenticated" to="/login" active-class="active-link" @click="isMobileMenuOpen = false">Login</router-link>
        <router-link v-if="!currentSession.isAuthenticated" to="/registration" class="register-btn" @click="isMobileMenuOpen = false">Get Started</router-link>
        
        <a v-else href="#" @click.prevent="handleLogout" class="logout-link">Logout</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { currentSession } from '../router/store'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const handleLogout = () => {
  isMobileMenuOpen.value = false
  currentSession.value = {
    name: '',
    company: '',
    role: 'client',
    email: '',
    password: '',
    phone: 'Not Specified',
    location: 'Not Specified',
    isAuthenticated: false
  }
  alert("You have logged out of your session securely.")
  router.push('/')
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid #e0e0e0;
}

.header-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
}

.logo {
  font-size: 1.35rem;
  font-weight: 700;
  color: #161616;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: -0.02em;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background-color: #0f62fe;
  border-radius: 50%;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.25rem;
}

.nav-links a {
  text-decoration: none;
  color: #525252;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
  padding: 0.25rem 0;
}

.nav-links a:not(.register-btn):hover {
  color: #161616;
}

.nav-links a:not(.register-btn).active-link {
  color: #0f62fe;
  font-weight: 600;
}

.nav-links a:not(.register-btn).active-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #0f62fe;
  border-radius: 2px;
}

.register-btn {
  background-color: #161616;
  color: #ffffff !important;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.logout-link {
  color: #da1e28 !important;
  font-weight: 600;
}

/* Responsive Mobile Navigation Styles Overlay Rules */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1001;
}

.mobile-toggle .bar {
  width: 24px;
  height: 2px;
  background-color: #161616;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

@media (max-width: 850px) {
  .mobile-toggle {
    display: flex;
  }

  .mobile-toggle.is-open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .mobile-toggle.is-open .bar:nth-child(2) {
    opacity: 0;
  }

  .mobile-toggle.is-open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #ffffff;
    flex-direction: column;
    align-items: stretch;
    padding: 2.5rem;
    gap: 1.75rem;
    box-sizing: border-box;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
  }

  .nav-links.mobile-open {
    transform: translateX(0);
  }

  .nav-links a:not(.register-btn).active-link::after {
    display: none;
  }

  .register-btn {
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
