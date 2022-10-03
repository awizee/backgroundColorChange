const button = document.querySelector("button");
const colorCode = document.getElementById("color");

const randColor = () => {
  const color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 255));
  }
  const alpha = color.push(Math.random().toFixed(1));

  if (color.includes("0.0") === true) {
    color[3] = 0;
  } else if (color.includes("1.0") === true) {
    color[3] = 1;
  }

  let newColor = `rgb(${color[0]}, ${color[1]}, ${color[2]},${color[3]})`;

  document.body.style.backgroundColor = newColor;
  colorCode.innerText = newColor;
};

button.addEventListener("click", randColor);

randColor();
