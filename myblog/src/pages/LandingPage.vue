<template>
  <div class="landing-page">
    <div class="content">
      <h1 class="text-4xl font-bold text-white">Welcome to My Blog</h1>
      <p class="mt-4 text-lg text-white">This is my personal Blog.</p>
      <p class="mt-4 text-lg text-white">Explore stories, tutorials, and insights.</p>
      <router-link to="/blogs" class="btn-primary mt-6">Explore Blogs</router-link>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  height: 100vh;
  width: 100%;
  background-image: url('../assets/image.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;
}

.content {
  background: rgba(240, 236, 236, 0.5); 
  padding: 2rem;
  border-radius: 8px;
}
</style>
