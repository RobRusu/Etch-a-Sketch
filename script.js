const container = document.querySelector('.container');
let size = 16;

for (let i = 0; i <= size; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
};

const box = document.querySelectorAll('.box');
box.forEach((smallBox) => {
  for (let i = 0; i <= size; i++){
    const smallerBox = document.createElement('div');
    smallerBox.classList.add('smallBox');
    smallBox.appendChild(smallerBox);
  }
});

container.addEventListener('mouseover', () =>{
  const boxes = document.querySelectorAll('.smallBox');
  boxes.forEach((box) => {
    box.addEventListener('mouseover', () =>{
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
  });
});

const range = document.querySelector('.range');
const output = document.querySelector('.output');
output.textContent = range.value;
range.oninput = function () {
  output.textContent = this.value;
    size = this.value * this.value;
  if (this.value > 100){
    output.textContent = 'Number needs to be 100 or lower';
  }else {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      container.removeChild(box);
    });
    for (let i = 0; i < this.value; i++){
      const box = document.createElement('div');
      box.classList.add('box');
      container.appendChild(box);
    };
    const box = document.querySelectorAll('.box');
    box.forEach((smallBox) => {
      for (let i = 0; i < this.value; i++){
      const smallerBox = document.createElement('div');
      smallerBox.classList.add('smallBox');
      smallBox.appendChild(smallerBox);
      }
    });
  }
};
