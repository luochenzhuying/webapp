// app.js
document.getElementById('filterButton').addEventListener('click', function() {
    // Get all the checkboxes
    const categories = document.querySelectorAll('input[name="category"]:checked');
    let selectedCategories = [];
    
    // Get selected category values
    categories.forEach((checkbox) => {
      selectedCategories.push(checkbox.value);
    });
  
    // Get all blog posts
    const posts = document.querySelectorAll('.post');
  
    // Loop through the posts and filter based on selected categories
    posts.forEach((post) => {
      const postCategory = post.classList[1]; // The second class represents the category
      if (selectedCategories.length === 0 || selectedCategories.includes(postCategory)) {
        post.style.display = 'block'; // Show post
      } else {
        post.style.display = 'none'; // Hide post
      }
    });
  });

  