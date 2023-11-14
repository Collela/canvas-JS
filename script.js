const color = document.querySelector('input'); // captura as propriedades do input
let screen = document.querySelector('canvas'); // ''           ''         do elemento canvas

// definindo propriedades inicial
let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

// definindo propriedade da variavel ctx para captura 2D
let ctx = screen.getContext('2d');

color.onchange = () => defaultColor = color.value;

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

function mouseDownEvent(e){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
};
function mouseMoveEvent(e){
    if(canDraw){
        draw(e.pageX, e.pageY);
    }
};

function mouseUpEvent(e){
    canDraw = false;
};

function draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = defaultColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
};

function clearBoard(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
};