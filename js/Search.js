// Get the reference to the dropdown element
const searchInput = document.querySelector('.search input[type="text"]');
const dropdown = document.querySelector('.search .dropdown');
const navSearchInput = document.querySelector('.Nav-Search input[type="text"]');
const navDropdown = document.querySelector('.Nav-Search .dropdown');

// Loop through the listProducts array and create dropdown list items
listProducts.forEach(item => {
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  link.href = item.link;
  let image = document.createElement('img');
  image.src = item.image;
  let text = document.createTextNode(item.name); 
  link.appendChild(image);
  link.appendChild(text); 
  listItem.appendChild(link);
  dropdown.appendChild(listItem);
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const results = dropdown.querySelectorAll('li');
  
  results.forEach(result => {
    const text = result.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      result.style.display = 'block';
    } else {
      result.style.display = 'none';
    }
  });
});

listProducts.forEach(item => {
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  link.href = item.link;
  let image = document.createElement('img');
  image.src = item.image;
  let text = document.createTextNode(item.name); 
  link.appendChild(image);
  link.appendChild(text); 
  listItem.appendChild(link);
  navDropdown.appendChild(listItem); 
});

navSearchInput.addEventListener('input', () => { 
  const searchTerm = navSearchInput.value.toLowerCase(); 
  const results = navDropdown.querySelectorAll('li'); 

  results.forEach(result => {
    const text = result.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      result.style.display = 'block';
    } else {
      result.style.display = 'none';
    }
  });
});

const clearBtn = document.querySelector('.search .clear-btn');
// Clear the input when the clear button is clicked and show all the results
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  dropdown.querySelectorAll('li').forEach(result => {
    result.style.display = 'block';
  });
});

function showDiv() {
  var div = document.getElementsByClassName("Mobile-Dropdown")[0];
  div.style.display = "block";
  var div = document.getElementsByClassName("Nav-Search")[0];
  div.style.display = "flex"
  var input = document.querySelector(".Nav-Search input[type='text']");
  input.style.display = "block";
  var button = document.getElementById("clear-btn");
  button.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeDiv() {
  var div = document.getElementsByClassName("Mobile-Dropdown")[0];
  div.style.display = "none"
  var div = document.getElementsByClassName("Nav-Search")[0];
  div.style.display = "none"
  var input = document.querySelector(".Nav-Search input[type='text']");
  input.style.display = "none";
  var button = document.getElementById("clear-btn");
  button.style.display = "none";
  document.body.style.overflow = "auto";
}