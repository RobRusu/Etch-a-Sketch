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

const btn = document.querySelector('.add');
btn.addEventListener('click', () =>{
  let value = prompt("What is the size of your new grid?");
  size = value * value;
  if (value > 100){
    alert('Number needs to be 100 or lower');
  }else {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      container.removeChild(box);
    });
    for (let i = 0; i < value; i++){
      const box = document.createElement('div');
      box.classList.add('box');
      container.appendChild(box);
    };
    const box = document.querySelectorAll('.box');
    box.forEach((smallBox) => {
      for (let i = 0; i < value; i++){
      const smallerBox = document.createElement('div');
      smallerBox.classList.add('smallBox');
      smallBox.appendChild(smallerBox);
      }
    });
  }
});
