function getSearchString(){
    return document.getElementById('search-bar').value;
}

function searchThroughContainers(searchString){
    let containerArray = document.getElementsByClassName('container');

    searchString = searchString.toUpperCase();

    console.log(searchString);

    for(let i = 0; i < containerArray.length; i++){
        let container = containerArray[i];
        for(let j = 0; j < container.children.length; j++){            
            /*if(searchString === container.children[j].innerHTML){
                //Success
                toggleItemDisplay(container);
            }*/
            if(container.children[j].innerHTML.includes(searchString)){
                //Success
                toggleItemDisplay(container);
            }
        }       
    }
}

function search(){
    let searchString = getSearchString();

    //select all items that have elements that match the search string
    searchThroughContainers(searchString);
}

let searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
    search();
});