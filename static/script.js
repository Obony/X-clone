function like(postId) {
  const likeCount = document.getElementById(`likes-count-${postId}`);
  const likeButton = document.getElementById(`like-button-${postId}`);

  fetch(`/like-post/${postId}`, { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      likeCount.innerHTML = data["likes"];
      if (data["liked"]) {
        likeButton.className = "fas fa-heart";
      } else {
        likeButton.className = "far fa-heart";
      }
    });
}
/*const heartButton = document.getElementById("heart-button");

heartButton.addEventListener("click", function () {
  heartButton.classList.toggle("active");
});

heartButton.addEventListener("mouseover", function () {
  heartButton.classList.add("hover");
});

heartButton.addEventListener("mouseout", function () {
  heartButton.classList.remove("hover");
});
*/
