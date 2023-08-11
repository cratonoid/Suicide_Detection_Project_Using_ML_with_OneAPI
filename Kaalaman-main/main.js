import toggleUserSection from "./js/userdropdown.js";
import filterCategories from "./js/filterCategories.js";
import {postThread, displayThread} from "./js/postThread.js";
import Darkmode from "./js/darkmode.js";
import addEventListenerToChildrens from "./js/addEventListenerToChildrens.js";
import ChangeWindowSize from "./js/responsive.js";
import storeDummReply from "./js/storeDummyReply.js";
import {ExpandPostThread}   from "./js/expandBtn.js";
import expandedPostThread from"./js/expandedPostThread.js";
import searchBar from "./js/searchbar.js"
import categoriesCounter from "./js/categoriesCounter.js"


// searchBar()
displayThread();
categoriesCounter()
addEventListenerToChildrens();
ChangeWindowSize();
storeDummReply();
ExpandPostThread();

//darkmode
let darkModeBtn = document.querySelector("#darkmodeBtn");


//searchBtn
 const searchInput = document.querySelector("#seacrhInput")
 const searchBtn = document.querySelector(".searchBarLogo")
//categories btn
let technologyBtn = document.querySelector("#technologyBtn")
let ecommerceBtn = document.querySelector("#ecommerceBtn")
let healthBtn = document.querySelector("#healthBtn")
let gameBtn = document.querySelector("#gameBtn")
let foodBtn = document.querySelector("#foodBtn")

// //post btn
let postBtn = document.querySelector("#postBtn")
let expandedPostBtn =document.querySelector("#expandedPostBtn")

//dropdown user
let userdropdown =document.querySelector(".userDropDown")

// //event listener dropdown user
userdropdown.addEventListener("click",toggleUserSection)

// //event listener categories
technologyBtn.addEventListener("change",filterCategories)
ecommerceBtn.addEventListener("change",filterCategories)
healthBtn.addEventListener("change",filterCategories)
gameBtn.addEventListener("change",filterCategories)
foodBtn.addEventListener("change",filterCategories)

// //event listener postBtn
postBtn.addEventListener("click",postThread)
expandedPostBtn.addEventListener("click",expandedPostThread)

//darkmode evemt listener
darkModeBtn.addEventListener("click" , Darkmode)

//event listener search bar
searchBtn.addEventListener("click", searchBar)
 searchInput.addEventListener("input",searchBar)

