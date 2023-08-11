const searchBar = () => {

    const searchInput = document.querySelector("#seacrhInput")
    const threadContentContainer = document.querySelector(".threadContentContainer")
   
        const value = searchInput.value.toLowerCase()
        // console.log(value)


        for (const child of threadContentContainer.children) {
            // console.log(child.firstChild.lastChild.firstChild.childNodes)
            const category = child.firstChild.lastChild.firstChild.childNodes[0].innerText.toLowerCase()
            const title = child.firstChild.lastChild.firstChild.childNodes[1].innerHTML.toLowerCase()
            const text = child.firstChild.lastChild.firstChild.childNodes[2].innerHTML.toLowerCase()
            //  console.log(text)

            switch(true){
                case category.includes(value):child.style.display ="flex"
                break;
                case title.includes(value):child.style.display ="flex"
                break;
                case text.includes(value):child.style.display ="flex"
                break;
              
                default:child.style.display = "none"
                
            }
            

        
        }

    }



export default searchBar



