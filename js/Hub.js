let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let productFilter = listProducts;

// Show initial list of products
showProduct(productFilter);

// Define function to update list automatically
function updateList() {
  productFilter = listProducts.filter(item => {
    // check category
    if (filter.elements.category.value !== '') {
      if (item.nature.type !== filter.elements.category.value) {
        return false;
      }
    }
    // check AmountOfPlayers
    if (filter.elements.AmountOfPlayers.value !== '') {
      if (item.nature.AmountOfPlayers && !item.nature.AmountOfPlayers.includes(filter.elements.AmountOfPlayers.value)) {
        return false;
      }
    }
    // check name
    if (filter.elements.name.value !== '') {
      if (!item.name.toLowerCase().includes(filter.elements.name.value.toLowerCase())) {
        return false;
      }
    }
    return true;
  });
  showProduct(productFilter);
}

// Call updateList function on interval
setInterval(updateList, 500);

function showProduct(productFilter) {
  count.innerText = productFilter.length;
  list.innerHTML = '';

  productFilter.forEach(item => {
    let newItem = document.createElement('a');
    newItem.href = item.link;
    newItem.classList.add('item');
    newItem.classList.add('product-link');

    // create image
    let newImage = new Image();
    newImage.src = item.image;
    newImage.style.width = item.imageWidth;
    newItem.appendChild(newImage);

    // create name product
    let newTitle = document.createElement('div');
    newTitle.classList.add('title');
    newTitle.innerText = item.name;
    newItem.appendChild(newTitle);

    // create description
    let newDescription = document.createElement('div');
    newDescription.classList.add('description');
    newDescription.innerText = item.description;
    newItem.appendChild(newDescription);

    // create list
    let newList = document.createElement('ul');
    newList.classList.add('list');
    newItem.appendChild(newList);

    // iterate over the AmountOfPlayers array and create <li> elements
    if (item.nature.AmountOfPlayers) {
      item.nature.AmountOfPlayers.forEach(player => {
        let newListItem = document.createElement('li');
        newListItem.innerText = player;
        newList.appendChild(newListItem);
      });
    }

    list.appendChild(newItem);
  });
}

