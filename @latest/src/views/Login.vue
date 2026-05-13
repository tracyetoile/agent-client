<template>
  <main class="auth-container">
    <div class="auth-card">
      <header class="auth-header">
        <h1>Welcome Back</h1>
        <p>Sign in to manage your agency operations</p>
      </header>

      <!-- Bind the form submission event to the handleLogin handler -->
      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="login-email">Email Address</label>
          <input 
            type="email" 
            id="login-email" 
            v-model="loginData.email" 
            placeholder="john.doe@agency.com" 
            required 
          />
        </div>

        <div class="form-group">
          <div class="label-row">
            <label for="login-password">Password</label>
            <a href="#" @click.prevent class="forgot-link">Forgot?</a>
          </div>
          <input 
            type="password" 
            id="login-password" 
            v-model="loginData.password" 
            placeholder="••••••••" 
            required 
          />
        </div>

        <button type="submit" class="auth-btn">Sign In</button>
      </form>

      <footer class="auth-footer">
        <p>Don't have an account? <router-link to="/registration">Register here</router-link></p>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { currentSession } from '../router/store'

const router = useRouter()

const loginData = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  if (loginData.value.email && loginData.value.password) {
    // Look up existing name or split email string to generate a clean display name
    const generatedName = currentSession.value.name || loginData.value.email.split('@')[0]
    
    currentSession.value = {
      name: generatedName.charAt(0).toUpperCase() + generatedName.slice(1),
      company: currentSession.value.company || 'Enterprise Partner Inc.',
      role: currentSession.value.role || 'client',
      email: loginData.value.email,
      password: loginData.value.password,
      phone: currentSession.value.phone || '+1 (555) 123-4567',
      location: currentSession.value.location || 'New York, NY',
      isAuthenticated: true // Mark user session as fully authenticated
    }

    alert("Login successful! Welcome back.");
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.auth-container {
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  font-family: sans-serif;
  padding: 2rem;
}

.auth-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.auth-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.auth-header h1 {
  font-size: 2.25rem;
  color: #111111;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.auth-header p {
  color: #666666;
  font-size: 1rem;
  margin: 0;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111111;
}

.forgot-link {
  font-size: 0.85rem;
  color: #1a73e8;
  text-decoration: none;
}

.form-group input {
  padding: 0.85rem 1.25rem;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
  width: 100%;
}

.form-group input:focus {
  border-color: #1a73e8;
}

.auth-btn {
  background-color: #1a73e8;
  color: #ffffff;
  border: none;
  padding: 0.9rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.15s;
  width: 100%;
}

.auth-btn:hover {
  background-color: #155cb4;
}

.auth-footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #555555;
}

.auth-footer a {
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
}

.auth-footer a:hover {
  text-decoration: underline;
}
</style>
