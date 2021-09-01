var itemList = [
  (item1 = {
    img1: "",
    img2: "",
    rating: 0,
    name: "",
    old_cost: null,
    cost: "",
  }),
  (item2 = {
    img1: "",
    img2: "",
    rating: 0,
    name: "",
    old_cost: "",
    cost: "",
  }),
  (item3 = {
    img1: "",
    img2: "",
    rating: 2,
    name: "",
    old_cost: "",
    cost: "",
  }),
  (item4 = {
    img1: "",
    img2: "",
    rating: 2,
    name: "",
    old_cost: null,
    cost: "",
  }),
  (item5 = {
    img1: "allimages/featuredProducts/seafoodCocktail.jpg",
    img2: "allimages/featuredProducts/seafoodCocktail.jpg",
    rating: 0,
    name: "Seafood Cocktail",
    old_cost: null,
    cost: "$6.00",
  }),
  (item6 = {
    img1: "allimages/bestSelling/beef.jpg",
    img2: "allimages/bestSelling/beef.jpg",
    rating: 4,
    name: "Beef tenderloin",
    old_cost: null,
    cost: "$10.00",
  }),
  (item7 = {
    img1: "allimages/featuredProducts/plantMeat.jpg",
    img2: "allimages/featuredProducts/plantMeat.jpg",
    rating: 2,
    name: "Plant Meat",
    old_cost: null,
    cost: "$6.00",
  }),
  (item8 = {
    img1: "allimages/bestSelling/lowaChop.jpg",
    img2: "allimages/bestSelling/lowaChop.jpg",
    rating: 4,
    name: "Lowa Chop",
    old_cost: null,
    cost: "$50.00",
  }),
  (item9 = {
    img1: "",
    img2: "",
    rating: 3,
    name: "",
    old_cost: null,
    cost: "",
  }),
  (item10 = {
    img1: "",
    img2: "",
    rating: 3,
    name: "",
    old_cost: null,
    cost: "",
  }),
  (item11 = {
    img1: "allimages/bestSelling/ChickenFillet.jpg",
    img2: "allimages/bestSelling/ChickenFillet.jpg",
    rating: 2,
    name: "Chicken Fillet",
    old_cost: null,
    cost: "$80.00",
  }),
  (item12 = {
    img1: "",
    img2: "",
    rating: 0,
    name: "",
    old_cost: null,
    cost: "",
  }),
  (item13 = {
    img1: "allimages/featuredProducts/mutton.jpg",
    img2: "allimages/featuredProducts/mutton.jpg",
    rating: 5,
    name: "Mutton",
    old_cost: null,
    cost: "$4.00",
  }),
  (item14 = {
    img1: "",
    img2: "",
    rating: 1,
    name: "",
    old_cost: "",
    cost: "",
  }),
  (item15 = {
    img1: "allimages/featuredProducts/ribeyeFillet.jpg",
    img2: "allimages/featuredProducts/ribeyeFillet.jpg",
    rating: 5,
    name: "Ribeye Fillet",
    old_cost: null,
    cost: "$1.75",
  }),
  (item16 = {
    img1: "allimages/featuredProducts/pork.jpg",
    img2: "allimages/featuredProducts/pork.jpg",
    rating: 0,
    name: "Pork",
    old_cost: null,
    cost: "$7.00",
  }),
  (item17 = {
    img1: "allimages/featuredProducts/salmonSteak.jpg",
    img2: "allimages/featuredProducts/salmonSteak.jpg",
    rating: 5,
    name: "Salmon Steak",
    old_cost: null,
    cost: "$1.75",
  }),
];


function categorized(category) {
  let old_children = document.querySelector(
    ".featured-p > .prodContainer.flex"
  ).children;
  let n = old_children.length;
  for (let i = 0; i < n; i++) {
    old_children[0].remove();
  }
  for (let i = 0; i < category.length; i++) {
    makeItem(category[i]);
  }
  let catOrTag = this.parentElement.parentElement.children[0].innerHTML;

  if (catOrTag == "Product Categories")
    document.getElementById(
      "result-count"
    ).innerHTML = `Showing ${category.length} products with category "${this.innerHTML}"`;
  else
    document.getElementById(
      "result-count"
    ).innerHTML = `Showing ${category.length} products with tag "${this.innerHTML}"`;
  EventListenFn();
}

function EventListenFn() {
  var toCartBtn = document.querySelectorAll('.btn[title="Add to Cart"]');
  for (let i = 0; i < toCartBtn.length; i++) {
    toCartBtn[i].addEventListener("click", (e) => {
      let prodCard = e.currentTarget.parentElement.parentElement;
      let a = prodCard.children[4].children[0].innerHTML;
      let b = prodCard.children[5].innerHTML;
      storeItem(a, b);
    });
  }
}


function makeItem(
  item,
  parent = document.querySelector(".featured-p .prodContainer.flex")
) {
  let prod = document.createElement("div");
  parent.appendChild(prod);

  let temp;
  if (item.old_cost !== null)
    temp = `<span class="old-cost">${item.old_cost}</span>`;
  else temp = "";

  let star = "";
  for (let i = 0; i < 5; i++) {
    for (i; i < item.rating; i++) {
      star += `<span class="fa fa-star checked"></span>`;
    }
    if (i != 5) star += `<span class="fa fa-star"></span>`;
  }
  prod.outerHTML = `<div class="prod rel">
    <a href="#"><img class="img1" src="${
    item.img1
  }" alt=""/></a>
    <a href="#"><img class="img2" src="${
    item.img2
  }" alt=""/></a>
    <div class="prod-btn flex abs">
      
      <button title="Add to Cart" class="btn fa fa-cart-plus"></button>
    </div>
    <div class="star-container">
    ${star}
    </div>
    <p><a href="#">${item.name}</a></p>
    ${temp}
    <span class="prod-cost">${item.cost}</span>
  </div>`;
}

function makeWishItem(item) {
  let prod = document.createElement("div");
  document.querySelector(".featured-p > .prodContainer.flex").appendChild(prod);

  let temp;
  if (item.old_cost !== null)
    temp = `<span class="old-cost">${item.old_cost}</span>`;
  else temp = "";

  let star = "";
  for (let i = 0; i < 5; i++) {
    for (i; i < item.rating; i++) {
      star += `<span class="fa fa-star checked"></span>`;
    }
    if (i != 5) star += `<span class="fa fa-star"></span>`;
  }

  prod.outerHTML = `<div style="border:1px solid #eee" class="prod rel">
    <a href="#"><img class="img1" src="${item.img1}" alt=""/></a>
    <a href="#"><img class="img2" src="${item.img2}" alt=""/></a>
    <div class="prod-btn flex abs">
      <button title="Add to Cart" class="btn fa fa-cart-plus"></button>
    </div>
    <div class="star-container">
    ${star}
    </div>
    <p><a href="#">${item.name}</a></p>
    ${temp}
    <span class="prod-cost">${item.cost}</span>
    <div style="text-align:center"><button class='btn wishRemove'>Remove</button></div><div style="height:5px"></div>
  </div>`;
}
