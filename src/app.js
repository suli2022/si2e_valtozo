const num1 = 37;
// num1 = 25; //Hibás!
console.log(num1);

if(num1 == 37) {
    var a = 35;
    let d = 47;
    console.log(d);
}
var b = 37;

const num1Elem = document.querySelector('#num1');
const getButton = document.querySelector('#getButton');


getButton.addEventListener('click', () => {
    let szam = num1Elem.value;
    num1Elem.value = '';
    kiir(szam);
    vizsgalat(szam);
});

function vizsgalat(input) {
    let egyezik = input.match(/^[ab][0-9]+$/);
    if(egyezik) {
        console.log('egyezik');
    }else {
        console.log('NEM JÓ')
    }
    
}

function kiir(szam) {
    if (szam == 1) {
        console.log('egy');
    }else if (szam == 2) {
        console.log('kettő');
    }else if (szam == 3) {
        console.log('három');
    }else {
        console.log('Ismeretlen érték')
    }
}

console.log(window.screen.width)
console.log(window.screen.height)
console.error('uuuuuuuuuuuuuu')


const doboz1 = document.querySelector('#doboz1');
const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', () => {
    
    doboz1.style.backgroundColor = 'blue';
    doboz1.style.animation = 'valami1 4s';
});

var szamokTomb = [ 35, 42, 27, 55, 72 ];
szamokTomb.forEach( (szam) => {
    console.log(szam);
});