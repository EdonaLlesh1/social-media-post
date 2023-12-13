console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// second social media post 

const secondPost = document.createElement("article");
secondPost.className = "post";

const secondPostContent = document.createElement("p");
secondPostContent.className = "post__content";
secondPostContent.textContent = "Another post content";

const secondPostFooter = document.createElement("footer");
secondPostFooter.className = "post__footer";

const secondPostUsername = document.createElement("span");
secondPostUsername.className = "post__username";
secondPostUsername.textContent = "@anotherusername";

const secondPostButton = document.createElement("button");
secondPostButton.type = "button";
secondPostButton.className = "post__button";
secondPostButton.setAttribute("data-js", "like-button");
secondPostButton.textContent = "♥ Like";
secondPostButton.addEventListener("click", handleLikeButtonClick);
//append the elements to the second post
secondPostFooter.appendChild(secondPostUsername);
secondPostFooter.appendChild(secondPostButton);

secondPost.appendChild(secondPostContent);
secondPost.appendChild(secondPostFooter);

//append the second s.media post to the body
document.body.appendChild(secondPost);


