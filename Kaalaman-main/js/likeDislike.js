const liked = () => {
    let thumbsUp = document.querySelector(`#${event.currentTarget.id}`)
    let thumbsDown = document.querySelector(`#dis${event.currentTarget.id}`)
    if (thumbsUp.classList.value.includes("liked")){
        thumbsUp.classList = "fa-regular fa-thumbs-up"
        thumbsDown.classList = "fa-regular fa-thumbs-down"
    } else {
        thumbsUp.classList = "fa-regular fa-thumbs-up liked"
        thumbsDown.classList = "fa-regular fa-thumbs-down"
    }
}

const disliked = () => {
    let id = event.currentTarget.id
    let upId = id.replace("dis", "")
    let thumbsDown = document.querySelector(`#${event.currentTarget.id}`)
    let thumbsUp = document.querySelector(`#${upId}`)
    if (thumbsDown.classList.value.includes("disliked")){
        thumbsDown.classList = "fa-regular fa-thumbs-down"
        thumbsUp.classList = "fa-regular fa-thumbs-up"
    } else {
        thumbsDown.classList = "fa-regular fa-thumbs-down disliked"
        thumbsUp.classList = "fa-regular fa-thumbs-up"
    }
}

export { liked, disliked }