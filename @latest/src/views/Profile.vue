<template>
  <main class="profile-container">
    <h1 class="page-title">User Profile</h1>

    <div class="profile-card">
      <header class="profile-hero">
        <div class="avatar-circle">{{ userInitials }}</div>
        <div class="hero-details">
          <h2>{{ currentSession.name }}</h2>
          <p class="profile-email">{{ currentSession.email }}</p>
        </div>
      </header>

      <hr class="card-divider" />

      <section class="details-grid">
        <div class="meta-block">
          <span class="meta-label">Company</span>
          <p class="meta-value">{{ currentSession.company }}</p>
        </div>

        <div class="meta-block">
          <span class="meta-label">Role</span>
          <p class="meta-value" style="text-transform: capitalize;">{{ currentSession.role }}</p>
        </div>

        <div class="meta-block">
          <span class="meta-label">Phone</span>
          <p class="meta-value">{{ currentSession.phone }}</p>
        </div>

        <div class="meta-block">
          <span class="meta-label">Location</span>
          <p class="meta-value">{{ currentSession.location }}</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { currentSession } from '../router/store'

// Calculate two-letter badge initials automatically from active user name string
const userInitials = computed(() => {
  if (!currentSession.value.name) return '??'
  return currentSession.value.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
})
</script>

<style scoped>
.profile-container { max-width: 1200px; margin: 0 auto; padding: 4rem; font-family: sans-serif; }
.page-title { font-size: 3rem; color: #111111; margin-bottom: 2.5rem; font-weight: 700; }
.profile-card { background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 16px; padding: 3rem; box-shadow: 0 4px 12px rgba(0,0,0,0.01); }
.profile-hero { display: flex; align-items: center; gap: 2rem; }
.avatar-circle { width: 100px; height: 100px; background-color: #1a73e8; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.25rem; font-weight: 600; }
.hero-details h2 { font-size: 2rem; margin: 0 0 0.5rem 0; font-weight: 600; }
.profile-email { font-size: 1.15rem; color: #666666; margin: 0; }
.card-divider { border: none; border-top: 1px solid #f0f0f0; margin: 2.5rem 0; }
.details-grid { display: grid; grid-template-columns: repeat(2, 1fr); row-gap: 2.5rem; column-gap: 4rem; }
.meta-block { display: flex; flex-direction: column; gap: 0.5rem; }
.meta-label { font-size: 1rem; color: #777777; font-weight: 500; }
.meta-value { font-size: 1.15rem; color: #111111; font-weight: 600; margin: 0; }
</style>
