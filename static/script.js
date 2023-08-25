document.addEventListener("DOMContentLoaded", function () {
  const tweetButton = document.getElementById("tweet-button");
  const tweetInput = document.getElementById("tweet-input");
  const tweetsContainer = document.querySelector(".tweets");

  tweetButton.addEventListener("click", function () {
    const tweetText = tweetInput.value;
    if (tweetText.trim() !== "") {
      const tweetElement = document.createElement("div");
      tweetElement.classList.add("tweet");
      tweetElement.innerText = tweetText;
      tweetsContainer.appendChild(tweetElement);
      tweetInput.value = "";
    }
  });
});

