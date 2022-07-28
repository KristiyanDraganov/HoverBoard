const container = document.getElementById("container");
let color = [];
const SQUARES = 500;

const btn1 = document.querySelector('.scheme1').addEventListener('click', () => color1());
const btn2 = document.querySelector('.scheme2').addEventListener('click', () => color2());
const btn3 = document.querySelector('.scheme3').addEventListener('click', () => color3());

function color1(){
    color = ['#31302E', '#94908D', '#DAD9D7', '#F0F0F0', 'C3C2BE'];
}

function color2(){
    color = ['#EB1D36', '#76BA99', '#00D7FF'];
}

function color3(){
    color = ['#0093D3', '#CC016B', '#FFF10D', '#000000'];
}

for(let i = 0 ; i <SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px black';
}

function getRandomColor(){
    return color[Math.floor(Math.random() * color.length)];
}