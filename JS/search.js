
function searchThroughContainers(searchString){
    let containerArray = document.getElementsByClassName('container');

    searchString = searchString.toUpperCase();

    console.log(searchString);

    let matchedResults = [];

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
                matchedResults.push(container);
            }
        }       
    }

    //We didn't find any matching results
    if(matchedResults.length === 0){
        window.alert("No matches found.");
        return;
    }

    //Scroll to first instance of item
    matchedResults[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
}

function search(){
    let searchString = document.getElementById('search-bar').value;
    //select all items that have elements that match the search string
    searchThroughContainers(searchString);
}

let searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    search();
});