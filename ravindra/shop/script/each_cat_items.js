var conditioner = [item15, item17];
var shampoo = hair_color = [item7, item15];
var mascara = [item7, item10];
var nail_polish = foundations = eye_shadow = eyeliner = [item10];
var lip_gloss = lipstick = lip_balm = [item12];
var eyebrow_pencil = [item7, item10, item16, item17];

function sendCat(catName, category) {
  let arr = [catName, category];
  localStorage.setItem('cat_prods', JSON.stringify(arr));
}
function getCatItems() {
  let arr = JSON.parse(localStorage.getItem('cat_prods'));
  document.getElementById('result-count').innerHTML = `Showing all products with category "${arr[0]}"`;
  for(let i = 0; i < arr[1].length; i++){
    makeItem(arr[1][i]);
  }
  EventListenFn();
}