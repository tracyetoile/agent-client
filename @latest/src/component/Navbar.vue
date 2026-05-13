<template>
  <header class="header">
    <div class="header-inner">
      <div class="logo">
        <span class="logo-dot"></span>
        AgencyPortal
      </div>
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active-link">Home</router-link>
        <router-link to="/about" active-class="active-link">About</router-link>
        <router-link to="/contact" active-class="active-link">Contact</router-link>
        
        <!-- Only visible when user is successfully authenticated -->
        <router-link v-if="currentSession.isAuthenticated" to="/dashboard" active-class="active-link">Dashboard</router-link>
        <router-link v-if="currentSession.isAuthenticated" to="/profile" active-class="active-link">Profile</router-link>
        
        <!-- Authentication state toggle visibility switch row elements -->
        <router-link v-if="!currentSession.isAuthenticated" to="/login" active-class="active-link">Login</router-link>
        <router-link v-if="!currentSession.isAuthenticated" to="/registration" class="register-btn">Get Started</router-link>
        
        <!-- Action trigger to drop active authentication token memory tracking state -->
        <a v-else href="#" @click.prevent="handleLogout" class="logout-link">Logout</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { currentSession } from '../router/store'

const router = useRouter()

const handleLogout = () => {
  // Reset everything back to unauthenticated defaults instantly
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
  background: rgba(255, 255, 255, 0.8);
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
  transition: color 0.2s ease, transform 0.2s ease;
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

.register-btn:hover {
  background-color: #0f62fe;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(15, 98, 254, 0.2);
}

.logout-link {
  color: #da1e28 !important;
  font-weight: 600;
  cursor: pointer;
}

.logout-link:hover {
  text-decoration: underline;
}
</style>
