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

// Oppgave 6
// Oppgave 7
// Oppgave 8
