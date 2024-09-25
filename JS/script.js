//We want a search field to be able to locate a part based off of its number, manufacturer, or description.

function toggleItemDisplay(item){
    let description = item.children[1];
    let manu = item.children[2];
    
    if(description.style.display === 'none'){
        description.style.display = 'block';
        manu.style.display = 'block';

        item.className += " selected";
    }
    else{
        description.style.display = 'none';
        manu.style.display = 'none';

        item.className=item.className.replace(' selected', '');
    }  
}

function FormatNumberLength(number, length){
    let string = "" + number;
    while(string.length < length){
        string = "0" + string;
    }
    return string;
}

function addItemToShelf(itemObj){
    
    let bayLocation = itemObj.Bay;
    let shelfLocation = itemObj.Shelf;

    let bayString = FormatNumberLength(bayLocation.toString(), 2);
    let shelfString = "shelf" + bayString + shelfLocation

    let shelf = document.getElementById(shelfString);
    let subShelf = itemObj.SubShelf === 'u' ? shelf.querySelector('.upper') : shelf.querySelector('.lower');

    let item = document.createElement('div');
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
    
    desc.style.display = 'none';
    manu.style.display = 'none';

    item.appendChild(num);
    item.appendChild(desc);
    item.appendChild(manu);

    item.addEventListener('click', () => {
        toggleItemDisplay(item);
    });

    subShelf.appendChild(item);
}

function addItemsToShelf(){
    for(let i = 0; i < parts.length; i++){
        addItemToShelf(parts[i]);
    }
}

addItemsToShelf();