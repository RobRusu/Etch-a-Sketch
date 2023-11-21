const container = document.querySelector('.container');
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');
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

// container.addEventListener('mouseover', () =>{
//   const boxes = document.querySelectorAll('.smallBox');
//   boxes.forEach((box) => {
//     box.addEventListener('mouseover', () =>{
//       let red = redSlider.value;
//       let green = greenSlider.value;
//       let blue = blueSlider.value;
//       box.style.backgroundColor = `rgb(${red},${green},${blue})`;
//     });
//   });
// });

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


const redInput = document.querySelector('#red');
const redOutput = document.querySelector('.redSliderValue');
redOutput.textContent = redInput.value;
redInput.oninput = function () {
  redOutput.textContent = this.value;
}

const greenInput = document.querySelector('#green');
const greenOutput = document.querySelector('.greenSliderValue');
greenOutput.textContent = greenInput.value;
greenInput.oninput = function () {
  greenOutput.textContent = this.value;
}

const blueInput = document.querySelector('#blue');
const blueOutput = document.querySelector('.blueSliderValue');
blueOutput.textContent = blueInput.value;
blueInput.oninput = function () {
  blueOutput.textContent = this.value;
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () =>{
  const boxes = document.querySelectorAll('.smallBox');
  boxes.forEach((box) =>{
    box.style.backgroundColor = 'white';
  })
})

const mode = document.querySelector('#mode');
container.addEventListener('mouseenter', () =>{
  if (mode.value === 'mouseover'){
      const boxes = document.querySelectorAll('.smallBox');
      boxes.forEach((box) => {
        box.addEventListener('mouseover', color)})
  } else if (mode.value === 'click'){
    const boxes = document.querySelectorAll('.smallBox');
    boxes.forEach((box) => {
      box.removeEventListener('mouseover', color)
    });
    boxes.forEach((box) => {
      box.addEventListener('click', color)
    });
  } else if (mode.value === 'clickAndMouseover'){
    const boxes = document.querySelectorAll('.smallBox');
    boxes.forEach((box) => {
      box.removeEventListener('mouseover', color);
      box.removeEventListener('click', color);
    });
    boxes.forEach((box) => {
      box.addEventListener('mousedown', () => {
        boxes.forEach((box) => {
          box.addEventListener('mouseover', color);
        });
      });
    });
    boxes.forEach((box => {
      box.addEventListener('mouseup', () => {
        boxes.forEach((box) =>{
          box.removeEventListener('mouseover',color);
        });
      });
    }));
  }
});

function color() {
  let red = redSlider.value;
  let green = greenSlider.value;
  let blue = blueSlider.value;
  this.style.backgroundColor = `rgb(${red},${green},${blue})`;
};