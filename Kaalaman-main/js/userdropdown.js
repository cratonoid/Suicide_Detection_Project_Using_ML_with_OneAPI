let userSection= document.querySelector("#userSection") 

const toggleUserSection = () => {
    if(userSection.style.display == "none"){
        userSection.style.display = "flex"
    }
    else {
        userSection.style.display = "none"    
    }
}

export  default toggleUserSection