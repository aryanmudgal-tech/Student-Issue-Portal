// public/script.js

// Fetch and display posts
async function fetchPosts() {
    try {
      const response = await fetch('/posts');
      const posts = await response.json();
      const postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = '';
  
      posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-block';
  
        postDiv.innerHTML = `
          <h2 class="post-title">${post.title}</h2>
          <p class="post-university"><strong>University:</strong> ${post.university_name}</p>
          <p class="post-issue">${post.issue}</p>
          <div class="post-footer">
            <p class="post-likes">Likes: <span id="likes-${post.id}">${post.likes}</span></p>
            <button class="like-button" onclick="likePost(${post.id})">Like</button>
          </div>
        `;
  
        postsDiv.appendChild(postDiv);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  // Like a post
  async function likePost(id) {
    try {
      const response = await fetch(`/posts/${id}/like`, {
        method: 'PUT',
      });
      if (response.ok) {
        const updatedPost = await response.json();
        document.getElementById(`likes-${id}`).innerText = updatedPost.likes;
      } else {
        console.error('Error liking post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Initial fetch
  fetchPosts();
  