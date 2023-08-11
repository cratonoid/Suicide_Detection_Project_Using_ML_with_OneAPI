import addEventListenerToChildrens from "./addEventListenerToChildrens.js";
import {closeThreadPost} from "./expandBtn.js";
import { disliked, liked } from "./likeDislike.js";
import categoriesCounter from "./categoriesCounter.js";

const expandedPostThread = () => {
    let postList = JSON.parse(localStorage.getItem("postList"));
    if (postList == null) {
      postList = [];
    }
    let n = localStorage.getItem("postId")
    n = ++n;
    
    let thread = {
      selectedCategory: document.querySelector("#expandedSelectCategory").value,
      titleValue: document.querySelector("#expandedTitleInp").value,
      postText: document.querySelector("#expandedThreadInp").value,
      batchClass: `post${n}Batch`,
      postId: `post${n}`,
      userName: "Current User"
    };
  
    if (thread.selectedCategory == "" || thread.titleValue == "" || thread.postText == "") {
      alert("Please complete all input field")
      return
    } else {
  
      localStorage.setItem("post", JSON.stringify(thread));
      localStorage.setItem("postId", n);
      postList.push(thread);
      localStorage.setItem("postList", JSON.stringify(postList));
  
      let threadContentContainer = document.querySelector(
        ".threadContentContainer"
      );
  
      let threadContent = document.createElement("div");
      threadContent.classList = `threadContent ${thread.selectedCategory}`;
  
      let avatarTextsContainer = document.createElement("div")
      avatarTextsContainer.classList = "avatarTextsContainer"
  
      let threadUserAvatar = document.createElement("div");
      threadUserAvatar.classList = "threadUserAvatar";
  
      let userImg = document.createElement("img");
      userImg.src = ".//images/Avatar Users2_20.png";
  
      let userName = document.createElement("span")
      userName.textContent = thread.userName
  
      let threadTextsContainer = document.createElement("div");
      threadTextsContainer.classList = "threadTextsContainer";
  
      let threadTexts = document.createElement("div");
      threadTexts.classList = "threadTexts";
  
      let postTitle = document.createElement("span");
      postTitle.style.fontSize = "larger";
      postTitle.textContent = thread.titleValue;
  
      let category = document.createElement("span");
      category.textContent = thread.selectedCategory;
  
      let postContent = document.createElement("span");
      postContent.textContent = thread.postText;
  
      let threadReaction = document.createElement("div");
      threadReaction.classList = "threadReaction";
  
      let thumbsUpDownContainer = document.createElement ("div")
    thumbsUpDownContainer.classList = "thumbsUpDownContainer"

    let threadThumbsUp = document.createElement("div");
    threadThumbsUp.classList = "threadThumbsUp";

    let thumbsUpIcon = document.createElement("i");
    thumbsUpIcon.classList = "fa-regular fa-thumbs-up";
    thumbsUpIcon.id = `like${thread.postId}`
    thumbsUpIcon.addEventListener("click", liked)

    let threadThumbsDown = document.createElement("div");
    threadThumbsDown.classList = "threadThumbsDown";

    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down";
    thumbsDownIcon.id = `dislike${thread.postId}`
    thumbsDownIcon.addEventListener("click", disliked)

    let replyBtnContainer = document.createElement("div")
    replyBtnContainer.classList = `replyBtnContainer ${thread.batchClass}`
    replyBtnContainer.id = thread.postId;

    let replyIcon = document.createElement("i")
    replyIcon.classList = "fa-solid fa-comment-dots"

    threadContentContainer.insertAdjacentElement("afterbegin", threadContent);
    threadContent.insertAdjacentElement("afterbegin", avatarTextsContainer)
    avatarTextsContainer.insertAdjacentElement("afterbegin", threadUserAvatar);
    threadUserAvatar.insertAdjacentElement("afterbegin", userImg);
    threadUserAvatar.insertAdjacentElement("beforeend", userName)
    avatarTextsContainer.insertAdjacentElement("beforeend", threadTextsContainer);
    threadTextsContainer.insertAdjacentElement("afterbegin", threadTexts)
    threadTexts.insertAdjacentElement("afterbegin", category);
    threadTexts.insertAdjacentElement("beforeend", postTitle);
    threadTexts.insertAdjacentElement("beforeend", postContent);
    threadContent.insertAdjacentElement("beforeend", threadReaction);
    threadReaction.insertAdjacentElement("afterbegin", thumbsUpDownContainer)
    thumbsUpDownContainer.insertAdjacentElement("afterbegin", threadThumbsUp);
    threadThumbsUp.insertAdjacentElement("afterbegin", thumbsUpIcon);
    thumbsUpDownContainer.insertAdjacentElement("beforeend", threadThumbsDown);
    threadThumbsDown.insertAdjacentElement("afterbegin", thumbsDownIcon);
    threadReaction.insertAdjacentElement("beforeend", replyBtnContainer)
    replyBtnContainer.insertAdjacentElement("afterbegin", replyIcon)

    let latestContent = document.querySelector(".latestContent")

    while (latestContent.hasChildNodes()) {
      latestContent.removeChild(latestContent.firstChild);
    }

    let contentbox = document.createElement("div")
    contentbox.classList = "content-box"
    let latestContentAvatar = document.createElement("img")
    latestContentAvatar.src = ".//images/Avatar Users2_20.png"
    latestContentAvatar.classList = "avatar"
    let textContainer = document.createElement("div")
    textContainer.classList = "text-container"
    let textTitle = document.createElement("h3")
    textTitle.classList = "latestTitle"
    textTitle.textContent = thread.titleValue
    let uploader = document.createElement("p")
    uploader.classList = "p-1"
    uploader.textContent = `By: ${thread.userName}`

    latestContent.insertAdjacentElement("afterbegin", contentbox)
    contentbox.insertAdjacentElement("afterbegin", latestContentAvatar)
    contentbox.insertAdjacentElement("beforeend", textContainer)
    textContainer.insertAdjacentElement("afterbegin", textTitle)
    textContainer.insertAdjacentElement("beforeend", uploader)
    }
  
    addEventListenerToChildrens();
    categoriesCounter()
    closeThreadPost();
  

  };


  export default expandedPostThread