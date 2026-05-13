<template>
  <div class="settings-wrapper">
    <!-- Account Settings Block Group -->
    <section class="settings-card">
      <h2 class="card-title">Account Settings</h2>
      
      <div class="form-container">
        <!-- Notification Preferences -->
        <div class="form-section">
          <h3>Email Notifications</h3>
          <label class="checkbox-label">
            <input 
              type="checkbox" 
              v-model="localSettings.notifications" 
            />
            <span class="custom-checkbox"></span>
            Receive weekly summary emails
          </label>
        </div>

        <!-- Language Select Picker -->
        <div class="form-section">
          <label for="language-select" class="field-label">Language</label>
          <div class="select-wrapper">
            <select 
              id="language-select" 
              v-model="localSettings.language" 
              class="form-select"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        <!-- Timezone Select Picker -->
        <div class="form-section">
          <label for="timezone-select" class="field-label">Timezone</label>
          <div class="select-wrapper">
            <select 
              id="timezone-select" 
              v-model="localSettings.timezone" 
              class="form-select"
            >
              <option value="est">Eastern Time (ET)</option>
              <option value="cst">Central Time (CT)</option>
              <option value="pst">Pacific Time (PT)</option>
            </select>
          </div>
        </div>
        
        <!-- Save Preference Settings Button -->
        <div class="form-section">
          <button type="button" @click="saveAccountSettings" class="save-btn">
            Save Preferences
          </button>
        </div>
      </div>
    </section>

    <!-- Security Preferences Card Block -->
    <section class="settings-card">
      <h2 class="card-title">Security</h2>
      
      <div class="form-container">
        <!-- Main Form Trigger Actions Row -->
        <div v-if="!isChangingPassword" class="form-section">
          <p class="security-status">Your password was last configured during authorization registration setup.</p>
          <button type="button" @click="isChangingPassword = true" class="action-btn">
            Change Password
          </button>
        </div>

        <!-- Hidden Interactive Form Workspace Panel Box -->
        <form v-else @submit.prevent="updatePassword" class="password-form">
          <div class="form-field">
            <label for="current-pwd">Current System Password</label>
            <input type="password" id="current-pwd" v-model="passwords.current" placeholder="••••••••" required />
          </div>

          <div class="form-field">
            <label for="new-pwd">New Secure Password</label>
            <input type="password" id="new-pwd" v-model="passwords.new" placeholder="••••••••" required />
          </div>

          <div class="form-field">
            <label for="confirm-pwd">Confirm New Password</label>
            <input type="password" id="confirm-pwd" v-model="passwords.confirm" placeholder="••••••••" required />
          </div>

          <div class="button-row">
            <button type="submit" class="save-btn">Save New Password</button>
            <button type="button" @click="cancelPasswordUpdate" class="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { currentSession } from '../../router/store'

// Setup editable component form copy tracking our store
const localSettings = ref({
  notifications: true,
  language: 'en',
  timezone: 'est'
})

// Trigger save message and log changes to your global user state context
const saveAccountSettings = () => {
  alert(`Preferences updated! Language set to ${localSettings.value.language.toUpperCase()} and Timezone to ${localSettings.value.timezone.toUpperCase()}.`)
}

const isChangingPassword = ref(false)
const passwords = ref({
  current: '',
  new: '',
  confirm: ''
})

const cancelPasswordUpdate = () => {
  isChangingPassword.value = false
  passwords.value = { current: '', new: '', confirm: '' }
}

const updatePassword = () => {
  if (passwords.value.current !== currentSession.value.password) {
    alert("Error: The current password you entered is incorrect.")
    return
  }

  if (passwords.value.new !== passwords.value.confirm) {
    alert("Error: New passwords do not match.")
    return
  }

  if (passwords.value.new.length < 8) {
    alert("Error: New password must be at least 8 characters long.")
    return
  }

  currentSession.value.password = passwords.value.new
  alert("Success! Your password has been changed.")
  cancelPasswordUpdate()
}
</script>

<style scoped>
.settings-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: sans-serif;
}

.settings-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.card-title {
  font-size: 1.75rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 700;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-section h3 {
  font-size: 1.1rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 600;
}

.field-label {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #111111;
  margin-bottom: 0.75rem;
}

/* Custom Checkbox Configuration Styles */
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.05rem;
  color: #111111;
  cursor: pointer;
  user-select: none;
}

.checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.custom-checkbox {
  height: 18px;
  width: 18px;
  background-color: #ffffff;
  border: 2px solid #333333;
  border-radius: 4px;
  display: inline-block;
  position: relative;
}

.checkbox-label input:checked ~ .custom-checkbox {
  background-color: #1a73e8;
  border-color: #1a73e8;
}

.custom-checkbox:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-label input:checked ~ .custom-checkbox:after {
  display: block;
}

/* Selector Component styling */
.select-wrapper {
  position: relative;
  max-width: 400px;
}

.form-select {
  width: 100%;
  padding: 0.85rem 1.25rem;
  font-size: 1.05rem;
  color: #111111;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
}

.select-wrapper::after {
  content: "";
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #444444;
  pointer-events: none;
}

/* Interactive Action Buttons styling */
.security-status {
  color: #525252;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.password-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111111;
}

.form-field input {
  padding: 0.85rem 1.25rem;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
}

.form-field input:focus {
  border-color: #1a73e8;
}

.button-row {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.action-btn, .save-btn {
  background-color: #1a73e8;
  color: #ffffff;
  border: none;
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.15s;
}

.action-btn:hover, .save-btn:hover {
  background-color: #155cb4;
}

.cancel-btn {
  background-color: transparent;
  border: 1px solid #cccccc;
  color: #333333;
  padding: 0.85rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .settings-card {
    padding: 1.75rem;
  }
  .form-select, .select-wrapper {
    max-width: 100%;
  }
}

</style>
