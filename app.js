const btn = document.querySelector("button");
const body = document.querySelector("body");
const result = document.querySelector(".result");
btn.addEventListener("click", function (e) {
  let color = generateColor();
  body.style.backgroundColor = generateColor();
  result.textContent = color;
});

function generateRandomNumTo255() {
  return Math.floor(Math.random() * 256);
}

function generateColor() {
  let colour1 = generateRandomNumTo255();
  let colour2 = generateRandomNumTo255();
  let colour3 = generateRandomNumTo255();

  let result = `rgb(${colour1},${colour2},${colour3})`;

  return result;
}
