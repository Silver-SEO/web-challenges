console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// newPost
const newPost = document.createElement("article");
newPost.classList.add("post");

document.body.append(newPost);

// newsPostContent
const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent = "test2";
newPost.append(newPostContent);

// newPostFooter
const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

newPost.append(newPostFooter);
