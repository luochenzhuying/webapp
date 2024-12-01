<template>
  <div class="blog-card">
    <h2 class="text-xl font-bold">{{ blog.title }}</h2>
    <p class="text-sm text-gray-500">{{ blog.date }}</p>
    <p class="mt-2">{{ blog.content.slice(0, 100) }}...</p>
    <router-link :to="'/blogs/' + blog.id" class="btn-secondary mt-4">Read More</router-link>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
  }
};
</script>

<style scoped>
.blog-card {
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
}
</style>
