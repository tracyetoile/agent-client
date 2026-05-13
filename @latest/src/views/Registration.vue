<template>
  <main class="auth-container">
    <div class="auth-card">
      <header class="auth-header">
        <h1>Create Account</h1>
        <p>Get started with your agency portal dashboard</p>
      </header>

      <form @submit.prevent="handleRegistrationSubmit" class="auth-form">
        <div class="form-group">
          <label for="reg-name">Full Name</label>
          <input type="text" id="reg-name" v-model="registrationData.name" placeholder="John Doe" required />
        </div>

        <div class="form-group">
          <label for="reg-company">Company Name</label>
          <input type="text" id="reg-company" v-model="registrationData.company" placeholder="Creative Agency Inc." required />
        </div>

        <!-- New Professional Profile Role Dropdown Selection Field -->
        <div class="form-group">
          <label for="reg-role">Account Role</label>
          <div class="select-wrapper">
            <select id="reg-role" v-model="registrationData.role" class="form-select" required>
              <option value="" disabled selected>Select your portal role</option>
              <option value="agent">Agent (Manager)</option>
              <option value="client">Client (Customer)</option>
              <option value="admin">System Administrator</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="reg-email">Email Address</label>
          <input type="email" id="reg-email" v-model="registrationData.email" placeholder="john.doe@agency.com" required />
        </div>

        <div class="form-group">
          <label for="reg-password">Password</label>
          <input type="password" id="reg-password" v-model="registrationData.password" placeholder="At least 8 characters" required />
        </div>

        <button type="submit" class="auth-btn">Register</button>
      </form>

      <footer class="auth-footer">
        <p>Already have an account? <router-link to="/login">Login here</router-link></p>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { currentSession } from '../router/store'

const router = useRouter()

const registrationData = ref({
  name: '',
  company: '',
  role: '' as 'agent' | 'client' | 'admin' | '',
  email: '',
  password: ''
})

const handleRegistrationSubmit = () => {
  if (
    registrationData.value.name &&
    registrationData.value.company &&
    registrationData.value.role &&
    registrationData.value.email &&
    registrationData.value.password
  ) {
    // Populate the store with the real user input data
    currentSession.value = {
      name: registrationData.value.name,
      company: registrationData.value.company,
      role: registrationData.value.role,
      email: registrationData.value.email,
      password: registrationData.value.password,
      phone: '+1 (555) 000-0000', // Default placeholder until edited
      location: 'Global Platform', // Default placeholder until edited
      isAuthenticated: true // Set authentication flag to true
    }

    alert(`Welcome, ${registrationData.value.name}! Account created successfully.`);
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
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111111;
}

.form-group input,
.form-select {
  padding: 0.85rem 1.25rem;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  background-color: #ffffff;
  font-family: inherit;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus,
.form-select:focus {
  border-color: #1a73e8;
}

/* Custom styling layout adjustments for select arrow placement */
.select-wrapper {
  position: relative;
  width: 100%;
}

.form-select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}

.select-wrapper::after {
  content: "";
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #444444;
  pointer-events: none;
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
