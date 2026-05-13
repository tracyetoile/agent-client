<template>
  <div id="app-wrapper">
    <!-- Render Navbar globally at the top layer -->
    <Navbar />
    
    <!-- Render Current Interactive Route view template content area -->
    <div class="main-workspace-content">
      <router-view></router-view>
    </div>

    <!-- Render Footer globally at the bottom boundary layout line -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './component/Navbar.vue'
import Footer from './component/Footer.vue' // Connect footer layout injection
</script>

<style>
/* Configure full height structural flex context behavior */
#app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-workspace-content {
  flex: 1;
}
</style>
