const ExpandPostThread =() =>{

    let expandBtn = document.querySelector("#expandBtn")
    let showPostThread = document.querySelector(".modular")
    let closeThread = document.querySelector("#closeBtn")
    let expandPostBtn = document.querySelector(".hidePostThreadBtn")
    expandBtn.addEventListener("click",function(){
        showPostThread.style.display ="flex"
       
    })
    closeThread.addEventListener("click", closeThreadPost)
    
    expandPostBtn.addEventListener("click",function(){
        showPostThread.style.display ="flex"
    })


    }
    

const closeThreadPost =() =>{
    let showPostThread = document.querySelector(".modular")
    showPostThread.removeAttribute("style") 
      

}



export  {ExpandPostThread , closeThreadPost}