let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let icon = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    icon.style.visibility = "visible";
    icon.innerText = bagItems.length;
  } else {
    icon.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  let itemsContainer = document.querySelector(".items-container");
  if (!itemsContainer) {
    return;
  }
  let innerHTML = "";
  items.forEach(item => {
    innerHTML += `<div class="item-container">
        <img class="img" src="${item.image}" alt="item-img">
        <div class="reting">${item.rating.stars} ⭐ | ${item.rating.count}</div>
        <div class="cmp-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
       <div>
        <button class="btn" onclick="addToBag(${item.id})">Add to Bag</button>
       </div>
      </div>`
  });
  itemsContainer.innerHTML = innerHTML;
}
