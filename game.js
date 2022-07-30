//SELECT CVS
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

//Game VARS AND CONSTS
let frames = 0;

//LOAD SPRITE IMAGE
const sprite = new Image();
sprite.src = "img/sprite.png"

//DRAW
function draw(){
    ctx.fillStyle="#70c5ce";
    ctx.fillRect(0,0,cvs.clientWidth, cvs.height);

}

//UPDATE
function update(){

}

//Loop
function loop(){
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();