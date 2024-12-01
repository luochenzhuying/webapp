<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue';

export default {
  props: ['blogs'],
  components: { BlogCard },
};
</script>
