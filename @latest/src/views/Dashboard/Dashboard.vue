<template>
  <div class="dashboard-container">
    <!-- Role-Based Navigation Sidebar Card Panel -->
    <aside class="dashboard-sidebar">
      <div class="role-badge" :class="currentSession.role">
        {{ currentSession.role.toUpperCase() }} PORTAL
      </div>
      <h2>Navigation</h2>
      
      <nav class="sidebar-links">
        <router-link to="/dashboard" exact-active-class="active">Overview</router-link>
        <router-link to="/dashboard/settings" active-class="active">Settings</router-link>
        <router-link to="/dashboard/reports" active-class="active">Reports</router-link>
      </nav>
    </aside>

    <!-- Content Workspace Area Container -->
    <main class="dashboard-workspace">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { currentSession } from '../../router/store'
</script>

<style scoped>
.dashboard-container {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  gap: 3rem;
  font-family: sans-serif;
  min-height: calc(100vh - 90px);
}

.dashboard-sidebar {
  width: 260px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  height: fit-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.role-badge {
  display: inline-block;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.role-badge.client { background-color: #e8f0fe; color: #1a73e8; }
.role-badge.admin { background-color: #fce8e6; color: #d93025; }
.role-badge.agent { background-color: #e6f4ea; color: #137333; }

.dashboard-sidebar h2 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #777777;
  margin: 0 0 1rem 0;
  padding-left: 0.5rem;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-links a {
  text-decoration: none;
  color: #444444;
  padding: 0.85rem 1.25rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.sidebar-links a:hover {
  background-color: #f5f5f5;
  color: #000000;
}

.sidebar-links a.active {
  background-color: #1a73e8;
  color: #ffffff !important;
}

.dashboard-workspace {
  flex: 1;
}

@media (max-width: 992px) {
  .dashboard-container { flex-direction: column; padding: 2rem; gap: 2rem; }
  .dashboard-sidebar { width: auto; }
}
</style>
