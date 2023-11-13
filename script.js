const color = document.querySelector('input'); // captura as propriedades do input
let screen = document.querySelector('canvas'); // ''           ''         do elemento canvas

// definindo propriedades inicial
let defaultcolor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

// definindo propriedade da variavel ctx para capturar as propriedades 2D
let ctx = screen.getContext('2d');

