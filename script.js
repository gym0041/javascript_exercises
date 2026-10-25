"use strict";

const container = document.querySelector("#container");
// const display = document.querySelector("#container > .display");
const btn = document.querySelector(".btn");
// const review = document.createElement("div");
// review.classList.add("review");
// const revP = document.createElement("p");
// revP.textContent = "Review";
// review.appendChild(revP);

// container.style.color = "blue";

// display.setAttribute(
//   "style",
//   "padding: 4px 12px ;text-align:center; text-transform: uppercase; color:white; background-color: black",
// );
// btn.addEventListener("click", (e) => {
//   let result = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
//   e.target.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
//   console.log(result);
// });
// function generateColor() {
//   const num = Math.floor(Math.random() * 255);

//   return num;
// }

container.addEventListener("click", (e) => {
  console.log(e.target);
});
