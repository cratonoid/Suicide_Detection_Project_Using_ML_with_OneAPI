  
const  ChangeWindowSize = () =>{ 
 let hideSidebar = document.querySelector(".sidebar");
 let showSidebar = document.querySelector(".sideBar-toggle");
 let closeSidebar = document.querySelector(".sideBarBtn")
 showSidebar.addEventListener("click" ,function(){
    hideSidebar.style.display = "flex"
 })
   

 closeSidebar.addEventListener("click",function(){
        hideSidebar.removeAttribute("style")

    })
 }

export default ChangeWindowSize 