<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Navbar stays at the top -->
    <AppNavbar />

    <main class="flex-grow">
      <router-view />
    </main>

    <footer class="bg-gray-800 text-white text-center p-4 mt-auto">
      <p>© 2024 My Blog. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import AppNavbar from "./components/BlogNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  margin-top: auto; 
}
</style>
