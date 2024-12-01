<template>
  <nav class="navbar bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo or Title -->
      <router-link to="/" class="text-2xl font-bold hover:text-gray-400">
        My Blog
      </router-link>

      <!-- Navigation Links -->
      <ul class="flex space-x-6">
        <li>
          <router-link
            to="/"
            class="hover:text-gray-400"
            :class="{ 'text-gray-400': isActive('/') }"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/blogs"
            class="hover:text-gray-400"
            :class="{ 'text-gray-400': isActive('/blogs') }"
          >
            Blogs
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="hover:text-gray-400"
            :class="{ 'text-gray-400': isActive('/about') }"
          >
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #a7b0bd; 
}
</style>
