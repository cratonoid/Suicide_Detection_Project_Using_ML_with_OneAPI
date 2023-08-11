const filterCategories = (e) => {

    let technologyBtn = document.querySelector("#technologyBtn")
    let ecommerceBtn = document.querySelector("#ecommerceBtn")
    let healthBtn = document.querySelector("#healthBtn")
    let gameBtn = document.querySelector("#gameBtn")
    let foodBtn = document.querySelector("#foodBtn")

    let threadContentContainer = document.querySelector(".threadContentContainer")
    if (e.target.id == "technologyBtn" && e.target.checked == true || e.target.id == "ecommerceBtn" && e.target.checked == true || e.target.id == "healthBtn" && e.target.checked == true || e.target.id == "gameBtn" && e.target.checked == true || e.target.id == "foodBtn" && e.target.checked == true) {
        for (const child of threadContentContainer.children) {
                child.style.display = "none"
        } 
    }

    if (technologyBtn.checked == true) {
        console.log("technology is clicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Technology") {
                child.style.display = "flex"
            } 
        }   
      } else if(technologyBtn.checked == false){
        console.log("technology is unclicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Technology") {
                child.style.display = "none"
            } 
        } 
      }

    if(ecommerceBtn.checked == true) {
        console.log("E-Commerce is clicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent E-commerce") {
                child.style.display = "flex"
            } 
        } 
      } else if(ecommerceBtn.checked == false){
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent E-commerce") {
                child.style.display = "none"
            } 
        } 
      }
    
    if(healthBtn.checked == true) {
        console.log("Health & lifestyle is clicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Health-Lifestyle") {
                child.style.display = "flex"
            } 
        }
      } else if(healthBtn.checked == false){
        console.log("Health & lifestyle is unclicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Health-Lifestyle") {
                child.style.display = "none"
            } 
        }
      }

    if(gameBtn.checked == true) {
        console.log("Games is clicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Games") {
                child.style.display = "flex"
            } 
        }
      } else if(technologyBtn.checked == false){
        console.log("Games is unclicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Games") {
                child.style.display = "none"
            } 
        }
      }


    if(foodBtn.checked == true) {
        console.log("Food is clicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Food-Beverages") {
                child.style.display = "flex"
            } 
        }
      } else if(foodBtn.checked == false){
        console.log("Food is unclicked")
        for (const child of threadContentContainer.children) {
            if (child.classList.value == "threadContent Food-Beverages") {
                child.style.display = "none"
            } 
        }
      }

      if (technologyBtn && technologyBtn.checked == false) { 
        console.log("technology is unchecked")
        if (ecommerceBtn && ecommerceBtn.checked == false) {
            console.log("e-commerce is unchecked")
            if (healthBtn && healthBtn.checked == false) {
                console.log("health lifestyle is unchecked")
                if (gameBtn && gameBtn.checked == false) {
                    console.log("games is unchecked")
                    if (foodBtn &&foodBtn.checked == false) {
                        console.log("food is unchecked")
                        for (const child of threadContentContainer.children) {
                            child.style.display = "flex"
                    } 
                    }
                }
            }
        }
    }
    
}

export default filterCategories