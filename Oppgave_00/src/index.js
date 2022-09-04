// Oppgave 1

let removeBtn = document.getElementById('remove-btn');

let removeTxt = document.getElementById('remove');

removeBtn.addEventListener('click', () => {
    removeTxt.remove();
});

// Oppgave 2

let newTxt = 'Ingen endring';

let changeTxt = document.getElementById('change');

let changeBtn = document.getElementById('change-btn');

changeBtn.addEventListener('click', () => {
    changeTxt.innerHTML = newTxt;
});

// Oppgave 3

let inputField = document.getElementById('input');

let inputedTxt = document.getElementById('input-text');

inputField.addEventListener('input', () => {

    inputedTxt.innerHTML = inputField.value;
});

// Oppgave 4

let unorderedList = document.getElementById('ul');

let makeListbtn = document.getElementById('write-list');

const myList = ['item one', 'item two', 'item three'];

makeListbtn.addEventListener('click', () => {
    myList.forEach(element => {
        let listElement = document.createElement('li');
        listElement.textContent = element;

        unorderedList.appendChild(listElement);
    });
});

// Oppgave 5

let targetPlaceForNewTagElement = document.getElementById('placeholder');

let selectedTagValue = document.getElementById('select');

let textOnTagElement = document.getElementById('text');

let makeNewTag = document.getElementById('create');

makeNewTag.addEventListener('click', () => {
    let newTag = document.createElement(selectedTagValue.value);
    newTag.textContent = textOnTagElement.value;
    targetPlaceForNewTagElement.appendChild(newTag);
});

// Oppgave 6

let uList = document.getElementById('list');

let removeListBtn = document.getElementById('remove-li');


    
removeListBtn.addEventListener('click', () => {
    let numberOfChildren = uList.childElementCount - 1;

    if(uList.childElementCount < 1){
        let errorMassages = document.createElement('p');
            errorMassages.textContent = 'Det er ingen li elementer å fjerne!';
            uList.appendChild(errorMassages);
    }else{ 
        uList.removeChild(uList.children[numberOfChildren]);
    }
});



// Oppgave 7

let inputFromUser = document.getElementById('name');

let disableBtn = document.getElementById('order');

let nameFromUser;

inputFromUser.addEventListener('input', () => {  
    nameFromUser = inputFromUser.value;
    let lenghtOfName = nameFromUser.length;
    
    if(lenghtOfName > 4){
        disableBtn.style.border = 'thick solid red';
        disableBtn.setAttribute('disabled'); 
    }});

// Oppgave 8

let containerUl = document.querySelector('.children');

let listToStyle = containerUl.children;

let pushbtnToStyleLi = document.getElementById('color');

pushbtnToStyleLi.addEventListener('click', () => {
    console.log(listToStyle);

    for (let i = 0; i < listToStyle.length; i++) {
        listToStyle[i].style.border = 'thin solid red';
    }});
