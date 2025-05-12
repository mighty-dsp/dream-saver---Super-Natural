document.getElementById('communityForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('user').value;
    const thought = document.getElementById('thought').value;

    // Create a new post object
    const post = {
        user: user,
        thought: thought,
        timestamp: new Date().toLocaleString()
    };

    // Get existing posts from localStorage
    const posts = JSON.parse(localStorage.getItem('communityPosts')) || [];

    // Add the new post to the array
    posts.push(post);

    // Save the updated posts array to localStorage
    localStorage.setItem('communityPosts', JSON.stringify(posts));

    // Update the post list display
    displayPosts();

    // Clear the form
    document.getElementById('communityForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
});

function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    // Get posts from localStorage
    const posts = JSON.parse(localStorage.getItem('communityPosts')) || [];

    // Display each post
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postUser = document.createElement('h4');
        postUser.textContent = post.user;
        postDiv.appendChild(postUser);

        const postTimestamp = document.createElement('p');
        postTimestamp.textContent = post.timestamp;
        postDiv.appendChild(postTimestamp);

        const postThought = document.createElement('p');
        postThought.textContent = post.thought;
        postDiv.appendChild(postThought);

        postList.appendChild(postDiv);
    });
}
