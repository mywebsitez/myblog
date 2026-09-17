const postForm = document.getElementById("postForm");

if (postForm) {
  postForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("postTitle").value;

    const category = document.getElementById("postCategory").value;

    const image = document.getElementById("postImage").value;

    const description = document.getElementById("postDescription").value;

    const content = document.getElementById("postContent").value;

    const post = {
      id: Date.now(),
      title: title,
      category: category,
      image: image,
      description: description,
      content: content,
      date: new Date().toLocaleDateString(),
    };

    // Get existing posts

    let posts = JSON.parse(localStorage.getItem("edwinPosts")) || [];

    // Add new post

    posts.unshift(post);

    // Save posts

    localStorage.setItem("edwinPosts", JSON.stringify(posts));

    // Message

    document.getElementById("message").innerHTML = `
            <div class="success-message">
                Post published successfully!
                <br><br>

                <a href="index.html">
                    View Blog
                </a>
            </div>
            `;

    // Clear form

    postForm.reset();
  });
}
