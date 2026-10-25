console.log("Shopping list");

const itemInputRef = document.querySelector("#item");
const btn = document.querySelector(".btn-item");
const shoppingListContainer = document.querySelector(".container");

btn.addEventListener("click", function (e) {
  itemInputRef.value && addNewItem(itemInputRef.value);
  itemInputRef.value = "";
  itemInputRef.focus();
});
console.log(itemInputRef);

function addNewItem(text) {
  let para = document.createElement("p");
  para.textContent = text;
  shoppingListContainer.insertAdjacentElement("beforeend", para);
}
