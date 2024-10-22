//We want a search field to be able to locate a part based off of its number, manufacturer, or description.

function toggleItemDisplay(item){
    item.classList.toggle("selected");

    let description = item.children[1];
    let manu = item.children[2];

    description.classList.toggle("hidden");
    manu.classList.toggle("hidden");
}

function FormatNumberLength(number, length){
    let string = "" + number;
    while(string.length < length){
        string = "0" + string;
    }
    return string;
}

function CalculateGridString(location, size){    
    return `${location.y} / ${location.x} / span ${size.y} / span ${size.x}`;
}

function addItemToShelf(itemObj){
    //Fields//
    /////////////////////////////////////
    let bayLocation = itemObj.Bay;
    let shelfLocation = itemObj.Shelf;

    let bayString = FormatNumberLength(bayLocation.toString(), 2);
    let shelfString = "shelf" + bayString + shelfLocation

    let shelf = document.getElementById(shelfString);
    let subShelf = itemObj.SubShelf === 'u' ? shelf.querySelector('.upper') : shelf.querySelector('.lower');

    let location = {x: itemObj.LocX, y: itemObj.LocY};
    let size = {x: itemObj.SizeX, y: itemObj.SizeY};

    //Initial Assembly//
    ////////////////////////////////////////
    let item = document.createElement("div");
    let num = document.createElement('p');
    let desc = document.createElement('p');
    let manu = document.createElement('p');


    num.innerHTML = itemObj.PartNum;
    desc.innerHTML = itemObj.Description;
    manu.innerHTML = itemObj.Manufacturer;
    

    let classNameString = "container";
    //Unsure
    if(itemObj.PartNum === '???'){
        classNameString += " unsure";
    }
    //Misc
    if(itemObj.PartNum === 'MISC'){
        classNameString += " misc";
        num.innerHTML = itemObj.Description;
        desc.innerHTML = itemObj.PartNum;
    }
    item.className = classNameString;

    desc.className = "hidden";
    manu.className = "hidden";

    //Final Assembly//
    //////////////////////////////////////
    console.log(location);
    let gridString = CalculateGridString(location, size);
    item.style.gridArea = gridString;


    item.appendChild(num);
    item.appendChild(desc);
    item.appendChild(manu);


    item.addEventListener('click', () => {
        toggleItemDisplay(item);
    });


    subShelf.appendChild(item);
}

function addItemsToShelf(){
    for(let i = 0; i < altParts.length; i++){
        addItemToShelf(altParts[i]);
    }
}

addItemsToShelf();