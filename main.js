let canvas = document.getElementById("myCanvas");
let next = document.getElementById("next");
let ctx = canvas.getContext("2d");
let rect = canvas.getBoundingClientRect();
let x = 0, y = 0, draw = false, color = 'purple', range = 25, character = 0, inicio = '', final = '', arr = [], alf = [];

function lettersUpper() {
    inicio = 'A'.charCodeAt(0);
    final = 'Z'.charCodeAt(0);
    for(i = inicio; i <= final; i++){
      arr.push(String.fromCharCode(i));
    }
        return arr;
};

function lettersLower() {
    lettersUpper();
    inicio = 'a'.charCodeAt(0);
    final = 'z'.charCodeAt(0);
    for(i = inicio; i <= final; i++){
      arr.push(String.fromCharCode(i));
    }
        return arr;
};

function numbers(){
    lettersLower();
    for(i = 0; i <= 10; i++){
        arr.push(i);
    }
    return arr;
};

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

function defcolor(c){
    color = c;
};
function drawing(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = range;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
};

next.addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.font="350px Arial";
    numbers();
    character = arr[Math.floor(Math.random() * arr.length)];
    ctx.strokeText(character,50,300); 
    decir(character);
});

canvas.addEventListener('mousedown', function(e){
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    draw = true;
});

canvas.addEventListener('mousemove', function(e){
    if(draw === true) {
        drawing(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});

canvas.addEventListener('mouseup', function(e){
    if(draw === true){
        drawing(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        draw = false;
    }
});




