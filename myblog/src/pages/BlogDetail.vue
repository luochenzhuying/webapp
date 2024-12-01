<template>
  <div v-if="blog">
    <h1 class="text-3xl font-semibold">{{ blog.title }}</h1>
    <p class="text-gray-600">{{ blog.content }}</p>
    <p><strong>Tags:</strong> {{ blog.tags.join(', ') }}</p>
    <p><strong>Date:</strong> {{ blog.date }}</p>
  </div>
  <div v-else>
    <p>Blog not found!</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['id'],
  computed: {
    ...mapState(['blogs']),
    blog() {
      return this.blogs.find(blog => blog.id === parseInt(this.id));
    },
  },
  created() {
    if (!this.blog) {
      this.$router.push('/blogs'); // Redirect to blogs list if the blog is not found
    }
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 1em;
}
</style>
