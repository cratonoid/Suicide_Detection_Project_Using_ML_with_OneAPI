import { disliked, liked } from "./likeDislike.js"
import { showAllReply } from "./viewFullThread.js"
// let selectedPostId = ""
const replyFn = () => {
    // selectedPostId = event.currentTarget.id
    console.log(event.currentTarget.classList[1])
    console.log(`Replying to ${getUserName()}`)
    showReplyInput()
}

const getUserName = () => {
    let threadList = JSON.parse(localStorage.getItem("postList"));
    let replyList = JSON.parse(localStorage.getItem("replyList"));

    for (const thread of threadList) {
        if (thread.postId == event.currentTarget.id) {
          return thread.userName
        }
    }

    for (const thread of replyList) {
        if (thread.replyId == event.currentTarget.id) {
            return thread.userName
        }
    }
}
const getReplyToText = () => {
    let threadList = JSON.parse(localStorage.getItem("postList"));
    let replyList = JSON.parse(localStorage.getItem("replyList"));

    for (const thread of threadList) {
        if (thread.postId == event.currentTarget.id) {
          return thread.postText
        }
    }

    for (const thread of replyList) {
        if (thread.replyId == event.currentTarget.id) {
            return thread.replyText
        }
    }
}

const showReplyInput = () => {
    let mainContainer = document.querySelector(".mainContainer")
    let replyInputMainContainer = document.createElement("div")
    replyInputMainContainer.classList = "replyInputMainContainer"
    let replyInputSubContainer = document.createElement("div")
    replyInputSubContainer.classList = "replyInputSubContainer"
    let replyToH3 = document.createElement("h3")
    replyToH3.textContent = `Reply to ${getUserName()}`
    let replyInp = document.createElement("textarea")
    replyInp.placeholder = "Enter Your Reply"
    replyInp.classList = "replyInp"
    let replyBtnsContainer = document.createElement("replyBtnsContainer")
    replyBtnsContainer.classList = "replyBtnsContainer"
    let replyCancelBtn = document.createElement("span")
    replyCancelBtn.classList = "replyCancelBtn"
    replyCancelBtn.textContent = "Cancel"
    replyCancelBtn.addEventListener("click", closeReplyInputField)
    let replySubmitBtn = document.createElement("span")
    replySubmitBtn.classList = "replySubmitBtn"
    replySubmitBtn.textContent = "Submit"
    replySubmitBtn.id = event.currentTarget.id
    replySubmitBtn.classList  = event.currentTarget.classList[1]
    replySubmitBtn.addEventListener("click", submitReply)

    mainContainer.insertAdjacentElement("beforeend", replyInputMainContainer)
    replyInputMainContainer.insertAdjacentElement("afterbegin", replyInputSubContainer)
    replyInputSubContainer.insertAdjacentElement("afterbegin", replyToH3)
    replyInputSubContainer.insertAdjacentElement("beforeend", replyInp)
    replyInputSubContainer.insertAdjacentElement("beforeend", replyBtnsContainer)
    replyBtnsContainer.insertAdjacentElement("afterbegin", replySubmitBtn)
    replyBtnsContainer.insertAdjacentElement("beforeend", replyCancelBtn)
}

const submitReply = () => {
 let replyList = JSON.parse(localStorage.getItem("replyList"));
 let replyInp = document.querySelector(".replyInp").value
 let n = localStorage.getItem("replyId")
 n = ++n;
 
 let reply = {
    replyId: `reply${n}`,
    replyToId: event.currentTarget.id,
    replyToBatchClass: event.currentTarget.classList[0],
    replyToText: getReplyToText(),
    replyText: replyInp,
    userName: "Current User",
 };

 if (replyInp == "") {
    alert("Please complete all input field")
    return
  } else {
    localStorage.setItem("reply", JSON.stringify(reply));
    localStorage.setItem("replyId", n);
    replyList.push(reply);
    localStorage.setItem("replyList", JSON.stringify(replyList));
  }

  let threadContentContainer = document.querySelector(".threadContentContainer")

    let replyContent = document.createElement("div")
    replyContent.classList = "replyContent"

    let avatarTextsContainer = document.createElement("div")
    avatarTextsContainer.classList = "avatarTextsContainer"

    let replyUserAvatar = document.createElement("div")
    replyUserAvatar.classList = "replyUserAvatar"

    let userImg = document.createElement("img")
    if (reply.userName == "Current User") {
      userImg.src = ".//images/Avatar Users2_20.png"
    } else {
      userImg.src = ".//images/Avatar Users2_29.png";
    }

    let userName = document.createElement("span")
    userName.textContent = reply.userName

    let replyTexts = document.createElement("replyTexts")
    replyTexts.classList = "replyTexts"

    let repliedTo = document.createElement("div")
    repliedTo.classList = ("repliedTo")

    let repliedToUserName = document.createElement("span")
    repliedToUserName.textContent =  `${getUserName()} said:`

    let repliedToText = document.createElement("span")
    repliedToText.textContent = reply.replyToText
    
    let replyDiv = document.createElement("div")
    replyDiv.classList = "reply"

    let replyText = document.createElement("span")
    replyText.textContent = reply.replyText

    let replyReaction = document.createElement("div")
    replyReaction.classList = "replyReaction"

    let thumbsUpDownContainer = document.createElement ("div")
    thumbsUpDownContainer.classList = "thumbsUpDownContainer"

    let replyThumbsUp = document.createElement("div")
    replyThumbsUp.classList = "replyThumbsUp"

    let thumbsUpIcon = document.createElement("i")
    thumbsUpIcon.classList = "fa-regular fa-thumbs-up"
    thumbsUpIcon.id = `like${reply.replyId}`
    thumbsUpIcon.addEventListener("click", liked)

    let replyThumbsDown = document.createElement("div")
    replyThumbsDown.classList = "replyThumbsUp"

    let thumbsDownIcon = document.createElement("i")
    thumbsDownIcon.classList = "fa-regular fa-thumbs-down"
    thumbsDownIcon.id = `dislike${reply.replyId}`
    thumbsDownIcon.addEventListener("click", disliked)

    let replyBtnContainer = document.createElement("div")
    replyBtnContainer.classList = `replyBtnContainer ${reply.replyToBatchClass}`
    replyBtnContainer.id = reply.replyId
    replyBtnContainer.addEventListener("click", replyFn)

    let replyIcon = document.createElement("i")
    replyIcon.classList = "fa-solid fa-reply"

    threadContentContainer.insertAdjacentElement("beforeend", replyContent)
    replyContent.insertAdjacentElement("afterbegin", avatarTextsContainer)
    avatarTextsContainer.insertAdjacentElement("afterbegin", replyUserAvatar)
    replyUserAvatar.insertAdjacentElement("afterbegin", userImg)
    replyUserAvatar.insertAdjacentElement("beforeend", userName)
    avatarTextsContainer.insertAdjacentElement("beforeend", replyTexts)
    replyTexts.insertAdjacentElement("afterbegin", repliedTo)
    repliedTo.insertAdjacentElement("afterbegin", repliedToUserName)
    repliedTo.insertAdjacentElement("beforeend", repliedToText)
    replyTexts.insertAdjacentElement("beforeend", replyDiv)
    replyDiv.insertAdjacentElement("afterbegin", replyText)
    replyContent.insertAdjacentElement("beforeend", replyReaction)
    replyReaction.insertAdjacentElement("afterbegin", thumbsUpDownContainer)
    thumbsUpDownContainer.insertAdjacentElement("afterbegin", replyThumbsUp)
    replyThumbsUp.insertAdjacentElement("afterbegin", thumbsUpIcon)
    thumbsUpDownContainer.insertAdjacentElement("beforeend", replyThumbsDown)
    replyThumbsDown.insertAdjacentElement("afterbegin", thumbsDownIcon)
    replyReaction.insertAdjacentElement("beforeend", replyBtnContainer)
    replyBtnContainer.insertAdjacentElement("afterbegin", replyIcon)

    closeReplyInputField()
}

const closeReplyInputField = () => {
    let mainContainer = document.querySelector(".mainContainer")
    mainContainer.lastChild.remove()
}

export default replyFn