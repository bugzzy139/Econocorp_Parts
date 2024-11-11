
function searchThroughContainers(searchString){
    let containerArray = document.getElementsByClassName('container');

    searchString = searchString.toUpperCase();

    console.log(searchString);

    let matchedResults = [];

    for(let i = 0; i < containerArray.length; i++){
        let container = containerArray[i];
        for(let j = 0; j < container.children.length; j++){            
            if(container.children[j].innerHTML.includes(searchString)){
                //Success
                toggleItemDisplay(container);
                matchedResults.push(container);
                break;
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

function resetAllContainers(){
    let containerArray = document.getElementsByClassName('container');

    let matchedResults = [];

    for(let i = 0; i < containerArray.length; i++){
        let container = containerArray[i];

        if(container.classList.contains("selected")){
            toggleItemDisplay(container);
            matchedResults.push(container);
        }
    }

    if(matchedResults.length === 0){
        window.alert("Nothing to clear");
    }

    console.log(`${matchedResults.length} items reset`);
}

function search(){
    let searchString = document.getElementById('search-bar').value;
    //select all items that have elements that match the search string
    searchThroughContainers(searchString);
}

let searchForm = document.getElementById('searchForm');
let clearBtn = document.getElementById('clearSelectedParts-btn');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    search();
});

clearBtn.addEventListener('click', (event) => {
    event.preventDefault();
    resetAllContainers();
});