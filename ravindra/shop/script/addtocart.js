
var arr = [];
var wishArr = [];

let cartStorage = JSON.parse(localStorage.getItem("MakeupItem"));
let wishStorage = JSON.parse(localStorage.getItem("WishlistItem"));

for (let i = 0; i < cartStorage.length; i++) {
  arr.push(cartStorage[i]);
}
for (let i = 0; i < wishStorage.length; i++) {
  wishArr.push(wishStorage[i]);
}

function cartCountUpdate() {
  document.getElementById("totalCost").innerHTML = calculateCost();
  document.getElementById("cartCount").innerHTML = JSON.parse(
    localStorage.getItem("MakeupItem")
  ).length;
}
function wishCountUpdate() {
  document.getElementById("wishCount").innerHTML = JSON.parse(
    localStorage.getItem("WishlistItem")
  ).length;
}

function calculateCost() {
  let totalItems = JSON.parse(localStorage.getItem("MakeupItem"));
  let ans = 0;
  for (let i = 0; i < totalItems.length; i++) {
    for (let q = 0; q < totalItems[i].quantity; q++) {
      ans += Number(totalItems[i].cost.slice(1));
    }
  }
  return `$${ans.toFixed(2)}`;
}

function storeItem(a = "Dummy", b = "£99.00", c) {
  //name, cost, quantity --> plz pass in this order
  let item;
  if (c != undefined) {
    item = {
      name: a,
      cost: b,
      quantity: c,
    };
    for (let n = 0; n < arr.length; n++) {
      if (arr[n].name == item.name) {
        arr[n].quantity = item.quantity;
        localStorage.setItem("MakeupItem", JSON.stringify(arr));
        return;
      }
    }
  }
  if (c == undefined) {
    c = 1;
    item = {
      name: a,
      cost: b,
      quantity: c,
    };
    for (let a = 0; a < arr.length; a++) {
      if (arr[a].name == item.name) {
        arr[a].quantity++;
        localStorage.setItem("MakeupItem", JSON.stringify(arr));
        cartCountUpdate();
        return;
      }
    }
  }
  arr.push(item);
  localStorage.setItem("MakeupItem", JSON.stringify(arr));
  cartCountUpdate();
}
function storeWishItem(detail) {
  let item = JSON.parse(detail);

  for (let a = 0; a < wishArr.length; a++) {
    if (wishArr[a].name == item.name) {
      wishArr[a].quantity++;
      localStorage.setItem("MakeupItem", JSON.stringify(wishArr));
      return;
    }
  }
  wishArr.push(item);
  localStorage.setItem("WishlistItem", JSON.stringify(wishArr));
  wishCountUpdate();
}

function getAllItem() {
  let getArr = JSON.parse(localStorage.getItem("MakeupItem"));
  for (let i = 0; i < getArr.length; i++) {
    addItem(getArr[i], i + 1);
  }
}
function getWishlist() {
  let getArr = JSON.parse(localStorage.getItem("WishlistItem"));
  for (let i = 0; i < getArr.length; i++) {
    makeWishItem(getArr[i]);
  }
}

function addItem(dum, srNo) {
  let box = document.querySelector(".table-box");

  let new_item = document.createElement("div");
  box.append(new_item);
  new_item.outerHTML = `<div class="table-row">
    <div class="table-cell first-cell">
        <p>${srNo}</p>
    </div>
    <div class="table-cell">
        <p>${dum.name}</p>
    </div>
    <div class="table-cell">
        <p>${dum.cost}</p>
    </div>
    <div class="table-cell">
        <p>${dum.quantity}</p>
    </div>
    <div class="table-cell last-cell">
    <button class="btn2">Remove</button>
    </div>
    </div>`;
}

function removeItem(item) {
  item.remove();
  let z = JSON.parse(localStorage.getItem("MakeupItem"));
  arr = [];
  for (let k = 0; k < Object.keys(z).length; k++) {
    if (z[k].name == item.children[1].children[0].innerHTML) continue;
    else arr.push(z[k]);
  }
  localStorage.setItem("MakeupItem", JSON.stringify(arr));
  emptyCheck();
}
function removeWishItem(item) {
  console.log("called");
  item.remove();
  let z = JSON.parse(localStorage.getItem("WishlistItem"));
  wishArr = [];
  for (let k = 0; k < Object.keys(z).length; k++) {
    if (z[k].name == item.children[4].innerText) continue;
    else wishArr.push(z[k]);
  }
  localStorage.setItem("WishlistItem", JSON.stringify(wishArr));
  wishEmptyCheck();
}

function emptyCheck() {
  let z = JSON.parse(localStorage.getItem("MakeupItem"));
  let itemLength = Object.keys(z).length;
  if (itemLength < 1) {
    document.getElementsByClassName("table-box")[0].style.display = "none";
    document.querySelector("#checkout").style.display = "none";
    document.getElementsByClassName("emptyCart")[0].style.display = "block";
  } else {
    document.getElementsByClassName("table-box")[0].style.display = "block";
    document.querySelector("#checkout").style.display = "inline-block";
    document.getElementsByClassName("emptyCart")[0].style.display = "none";
  }
}
function wishEmptyCheck() {
  let z = JSON.parse(localStorage.getItem("WishlistItem"));
  let itemLength = Object.keys(z).length;
  if (itemLength < 1) {
    document.getElementById("result-count").innerHTML =
      "Your Wishlist is empty.";
  } else {
    document.getElementById("result-count").innerHTML =
      "Showing products added to wishlist";
  }
}
