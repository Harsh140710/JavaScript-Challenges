/**
 * Write your challenge solution here
 */

const cartItems = document.getElementById("cart-items");
const total = document.getElementById("cart-total");

let items = [];

function addToCart(productName, price) {
  // Check if item already exists in the cart
  let existingItem = items.find(item => item.itemName === productName);

  if (existingItem) {
    existingItem.itemQty++;
    showTheItemInCart();
    return;
  }

  let itemObj = {
    itemName: productName,
    itemPrice: Number(price),
    itemQty: 1,
  };

  items.push(itemObj);
  showTheItemInCart();
}

function showTheItemInCart() {
  // Clear cart UI before rebuilding
  cartItems.innerHTML = " "; 

  if (items.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "empty-cart";
    emptyMsg.textContent = "Cart is empty.";
    cartItems.appendChild(emptyMsg);
  }

  items.forEach((itemObj, index) => {

    // Create container for store the items
    let itemContainer = document.createElement("div");
    itemContainer.className = "item-container";
    cartItems.appendChild(itemContainer);

    // Show the Item name 
    let showItemName = document.createElement("div");
    showItemName.className = "item-name";
    showItemName.textContent = itemObj.itemName;
    itemContainer.appendChild(showItemName);

    // Other operations like countQty , ShowPrice , and removeBtn
    let otherOprations = document.createElement("div");
    otherOprations.className = "otherOprations";
    itemContainer.appendChild(otherOprations);

    // Quantity control
    let itemQuatity = document.createElement("div");
    itemQuatity.className = "countQty";
    otherOprations.appendChild(itemQuatity);

    //Plus btn for icerase the qty
    let plusBtn = document.createElement("div");
    plusBtn.className = "plus";
    plusBtn.textContent = "+";
    itemQuatity.appendChild(plusBtn);

    // show the value of qty
    let qtyText = document.createElement("div");
    qtyText.className = "textInput";
    qtyText.textContent = itemObj.itemQty;
    itemQuatity.appendChild(qtyText);

    //Minus btn for decrease the qty
    let minusBtn = document.createElement("div");
    minusBtn.className = "minus";
    minusBtn.textContent = "-";
    itemQuatity.appendChild(minusBtn);

    // Display price in the Cart
    let itemPriceInCart = document.createElement("div");
    itemPriceInCart.className = "countPrice";
    itemPriceInCart.textContent = `$${(itemObj.itemPrice * itemObj.itemQty).toFixed(2)}`;
    otherOprations.appendChild(itemPriceInCart);

    // Remove button
    let removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.textContent = "Remove";
    otherOprations.appendChild(removeBtn);

    // Plus button for increse the qty on btn click
    plusBtn.addEventListener("click", () => {
      itemObj.itemQty++;
      showTheItemInCart();
    });

    //Minus button for decrease the qty on btn click
    minusBtn.addEventListener("click", () => {
      if (itemObj.itemQty > 1) {
        itemObj.itemQty--;
      } else {
        // Remove item if quantity is 0
        items.splice(index, 1); 
      }
      showTheItemInCart();
    });

    //Remove btn for remove the item from cart
    removeBtn.addEventListener("click", () => {
      items.splice(index, 1);
      showTheItemInCart();
    });
  });

  countTotal();
}

function countTotal() {
  const totalAmount = items.reduce((sum, item) => {
    return sum + (item.itemPrice * item.itemQty);
  },0);

  total.innerHTML = `<h3>Total : $${totalAmount.toFixed(2)}</h3>`;
}
