import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import BlogPage from '../pages/BlogPage.vue';
import AboutPage from '../pages/AboutPage.vue';
import BlogDetail from '../pages/BlogDetail.vue';  // Add this import

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/blogs', name: 'Blogs', component: BlogPage },
  {
    path: '/blogs/:id',  // Dynamic route for individual blog post
    name: 'BlogDetail',
    component: BlogDetail,  // Component to display the blog details
    props: true,  // Pass the route params as props to the component
  },
  { path: '/about', name: 'About', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

