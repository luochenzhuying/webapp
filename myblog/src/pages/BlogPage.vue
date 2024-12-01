<template>
  <div>
    
    <div class="container mx-auto px-4">
      <!-- Search Input -->
      <input
        type="text"
        placeholder="Search blogs..."
        v-model="localFilter" 
        class="search-input"
      />

      <!-- Display Blogs Based on Filter -->
      <BlogList :blogs="filteredBlogs" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import BlogList from '../components/BlogList.vue';


export default {
  components: { BlogList },
  data() {
    return {
      localFilter: this.$store.state.filter, // Initialize localFilter with Vuex store's filter value
    };
  },
  computed: {
    ...mapState(['filter']), // Access filter from state
    ...mapGetters(['filteredBlogs']), // Access filteredBlogs getter
  },
  methods: {
    ...mapMutations(['setFilter']), // Map the setFilter mutation
  },
  watch: {
    localFilter(value) {
      this.setFilter(value); // Update filter in store when localFilter changes
    },
  },
};
</script>

<style scoped>
/* Search Bar Styling */
.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  font-size: 1rem;
}
</style>
