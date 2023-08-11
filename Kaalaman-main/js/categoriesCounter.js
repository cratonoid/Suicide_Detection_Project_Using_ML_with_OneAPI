const categoriesCounter = () => {
    let technologyCategoryCounter = document.querySelector("#technologyCategoryCounter")
    let ecommCategoryCounter = document.querySelector("#ecommCategoryCounter")
    let healthCategoryCounter = document.querySelector("#healthCategoryCounter")
    let gamesCategoryCounter = document.querySelector("#gamesCategoryCounter")
    let foodCategoryCounter = document.querySelector("#foodCategoryCounter")
    let threadContentContainer = document.querySelector(".threadContentContainer")
    let technologyCount = 0
    let ecommCount = 0
    let healthCount = 0
    let gamesCount = 0
    let foodCount = 0

    

    for (let i = 0; i < threadContentContainer.children.length; i++) {
        if(threadContentContainer.children[i].classList.value.includes("Technology")){
            technologyCount++
            technologyCategoryCounter.textContent = technologyCount
        }
        if(threadContentContainer.children[i].classList.value.includes("E-commerce")){
            ecommCount++
            ecommCategoryCounter.textContent = ecommCount
        }
        if(threadContentContainer.children[i].classList.value.includes("Health-Lifestyle")){
            healthCount++
            healthCategoryCounter.textContent = healthCount
        }
        if(threadContentContainer.children[i].classList.value.includes("Games")){
            gamesCount++
            gamesCategoryCounter.textContent = gamesCount
        }
        if(threadContentContainer.children[i].classList.value.includes("Food-Beverages")){
            foodCount++
            foodCategoryCounter.textContent = foodCount
        }
    }
}

export default categoriesCounter