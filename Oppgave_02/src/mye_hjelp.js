
//import './styles.css';
import { users } from './util.js';

const searchInput = document.getElementById('name');
const filterInput = document.getElementById('age');
const filterButton = document.getElementById('filter');
const userUl = document.getElementById('users');

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id </span><span>Navn </span><span>Alder </span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id} </span><span>${user.name} </span><span>${user.age} </span></li>`;
  }
};

const handleSearch = () => {

  let searchName = searchInput.value;
  searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
  
  if (searchName) {
  
    const searchResult = users.find(element => element.name == searchName);
    if (searchResult) {
      userUl.innerHTML = `<li><span>${searchResult.id} </span><span>${searchResult.name} </span><span>${searchResult.age} </span></li>`;
    } else {
      userUl.innerHTML = 'Ingen brukere funnet';
    }
  } else {
    createTableUI(users);
  }
};

const handleFilter = () => {

  const filterValue = filterInput.value;
  if (filterValue && Number(filterValue)) {
    const filterResult = users.filter(element => element.age >= filterValue);

    if (filterResult && filterResult.length > 0) {
    
      userUl.innerHTML = `<li><span>Id </span><span>Navn </span><span>Alder </span></li>`;
      for (const filteredUsers of filterResult) {
        userUl.innerHTML += `<li><span>${filteredUsers.id} </span><span>${filteredUsers.name} </span><span>${filteredUsers.age} </span></li>`;
      }
    } else {
      userUl.innerHTML = 'Ingen brukere funnet';
    }
  } else {
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);
