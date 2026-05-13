<template>
  <div id="app-container">
    <!-- Render Navbar Component at the top -->
    <Navbar />
    
    <!-- Render Current Route View component here -->
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from './component/Navbar.vue'
</script>
