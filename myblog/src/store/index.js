import { createStore } from 'vuex';
import blogData from './blogs.json';

export default createStore({
  state: {
    blogs: blogData.blogs,
    filter: '',
  },
  mutations: {
    setFilter(state, payload) {
      state.filter = payload;
    },
  },
  getters: {
    filteredBlogs: (state) => {
      return state.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});
