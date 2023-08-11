import addEventListenerToChildrens from "./addEventListenerToChildrens.js";
import { disliked, liked } from "./likeDislike.js";
import categoriesCounter from "./categoriesCounter.js";

const postThread = () => {
  let postList = JSON.parse(localStorage.getItem("postList"));
  if (postList == null) {
    postList = [];
  }
  let n = localStorage.getItem("postId")
  n = ++n;
  
  let thread = {
    selectedCategory: document.querySelector("#selectCategory").value,
    titleValue: document.querySelector("#titleInp").value,
    postText: document.querySelector("#threadInp").value,
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
};

const displayThread = () => {
  let postList = localStorage.getItem("postList");
  if (postList == null) {
    let postList = JSON.parse(localStorage.getItem("postList"));
    if (postList == null) {
      postList = [];
    }

    let thread = {
      selectedCategory: "Technology",
      titleValue: "What is the best android smartphone today?",
      postText: "Any idea what is the best android smartphone I can get? I want the best camera system and the best screen. Software  experience is important for me as well. Thanks in advance!",
      batchClass: `post1Batch`,
      postId: "post1",
      userName: "Dummy Poster 1"
    };

    localStorage.setItem("post", JSON.stringify(thread));
    localStorage.setItem("postId", 1);
    postList.push(thread);
    localStorage.setItem("postList", JSON.stringify(postList));

    let thread2 = {
      selectedCategory: "E-commerce",
      titleValue: "How can I source a product overseas?",
      postText: "Hi, I am an aspiring entrepreneur and I wanted to source products overseas. I'm a bit skeptical with some of the websites I've found. I'm hoping someone can help me.",
      batchClass: `post2Batch`,
      postId: "post2",
      userName: "Dummy Poster 2"
    };

    localStorage.setItem("post", JSON.stringify(thread2));
    localStorage.setItem("postId", 2);
    postList.push(thread2);
    localStorage.setItem("postList", JSON.stringify(postList));

    let thread3 = {
      selectedCategory: "Health-Lifestyle",
      titleValue: "I need a 24hr gym",
      postText: "I'm new to this city and I wanted to enroll in a 24hr gym. Any recommendations guys? Thanks!",
      batchClass: `post3Batch`,
      postId: "post3",
      userName: "Dummy Poster 3"
    };

    localStorage.setItem("post", JSON.stringify(thread3));
    localStorage.setItem("postId", 3);
    postList.push(thread3);
    localStorage.setItem("postList", JSON.stringify(postList));

    let thread4 = {
      selectedCategory: "Games",
      titleValue: "Recommend any new FPS games today similar to Counter-Strike",
      postText: `I'm a "tito" and been playing Counter Strike for the longest time. Any FPS games you can recommend that's modernize?`,
      batchClass: `post4Batch`,
      postId: "post4",
      userName: "Dummy Poster 4"
    };

    localStorage.setItem("post", JSON.stringify(thread4));
    localStorage.setItem("postId", 4);
    postList.push(thread4);
    localStorage.setItem("postList", JSON.stringify(postList));

    let thread5 = {
      selectedCategory: "Food-Beverages",
      titleValue: "What is the best fast food chicken here?",
      postText: "My wife and I been debating which fast food chain offers the best tasting chicken. I say KFC and she says Jolibee. What do you think guys? haha!",
      batchClass: `post5Batch`,
      postId: "post5",
      userName: "Dummy Poster 5"
    };

    localStorage.setItem("post", JSON.stringify(thread5));
    localStorage.setItem("postId", 5);
    postList.push(thread5);
    localStorage.setItem("postList", JSON.stringify(postList));
    displayThread();
  }
  let parsedPostList = JSON.parse(postList);

  for (let i in parsedPostList) {
    let threadContentContainer = document.querySelector(
      ".threadContentContainer"
    );

    let threadContent = document.createElement("div");
    threadContent.classList = `threadContent ${parsedPostList[i].selectedCategory}`;

    let avatarTextsContainer = document.createElement("div")
    avatarTextsContainer.classList = "avatarTextsContainer"

    let threadUserAvatar = document.createElement("div");
    threadUserAvatar.classList = "threadUserAvatar";

    let userImg = document.createElement("img");
    if (parsedPostList[i].userName == "Current User") {
      userImg.src = ".//images/Avatar Users2_20.png"
    } else {
      userImg.src = ".//images/Avatar Users2_1.png";
    }
    
    let userName = document.createElement("span")
    userName.textContent = parsedPostList[i].userName

    let threadTextsContainer = document.createElement("div");
    threadTextsContainer.classList = "threadTextsContainer";

    let threadTexts = document.createElement("div");
    threadTexts.classList = "threadTexts";

    let postTitle = document.createElement("span");
    postTitle.style.fontSize = "larger";
    postTitle.textContent = parsedPostList[i].titleValue;

    let category = document.createElement("span");
    category.textContent = parsedPostList[i].selectedCategory;

    let postContent = document.createElement("span");
    postContent.textContent = parsedPostList[i].postText;

    let threadReaction = document.createElement("div");
    threadReaction.classList = "threadReaction";

    let thumbsUpDownContainer = document.createElement ("div")
    thumbsUpDownContainer.classList = "thumbsUpDownContainer"

    let threadThumbsUp = document.createElement("div");
    threadThumbsUp.classList = "threadThumbsUp";

    let thumbsUpIcon = document.createElement("i");
    thumbsUpIcon.classList = "fa-regular fa-thumbs-up";
    thumbsUpIcon.id = `like${parsedPostList[i].postId}`
    thumbsUpIcon.addEventListener("click", liked)

    let threadThumbsDown = document.createElement("div");
    threadThumbsDown.classList = "threadThumbsDown";

    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down";
    thumbsDownIcon.id = `dislike${parsedPostList[i].postId}`
    thumbsDownIcon.addEventListener("click", disliked)

    let replyBtnContainer = document.createElement("div")
    replyBtnContainer.classList = `replyBtnContainer ${parsedPostList[i].batchClass}`
    replyBtnContainer.id = parsedPostList[i].postId;

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

  }

  try {
    let latestContent = document.querySelector(".latestContent")
    while (latestContent.hasChildNodes()) {
     latestContent.removeChild(latestContent.firstChild);
    }

    let contentbox = document.createElement("div")
    contentbox.classList = "content-box"
    let latestContentAvatar = document.createElement("img")
    if (parsedPostList[(parsedPostList.length-1)].userName == "Current User") {
      latestContentAvatar.src = ".//images/Avatar Users2_20.png"
    } else {
      latestContentAvatar.src = ".//images/Avatar Users2_1.png";
    }
    latestContentAvatar.classList = "avatar"
    let textContainer = document.createElement("div")
    textContainer.classList = "text-container"
    let textTitle = document.createElement("h3")
    textTitle.classList = "latestTitle"
    textTitle.textContent = parsedPostList[(parsedPostList.length-1)].titleValue
    let uploader = document.createElement("p")
    uploader.classList = "p-1"
    uploader.textContent = `By: ${parsedPostList[(parsedPostList.length-1)].userName}`

    latestContent.insertAdjacentElement("afterbegin", contentbox)
    contentbox.insertAdjacentElement("afterbegin", latestContentAvatar)
    contentbox.insertAdjacentElement("beforeend", textContainer)
    textContainer.insertAdjacentElement("afterbegin", textTitle)
    textContainer.insertAdjacentElement("beforeend", uploader)
  } catch (error) {
    location.reload();
  }

};

export { postThread, displayThread };
