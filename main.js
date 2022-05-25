function preload(){

}
function setup(){
canvas = createCanvas(640, 380);
canvas.position(110, 250);

video = createCapture(VIDEO);
video.hide();

tint_color = "";
}


function draw(){
    image(video, 0, 0, 640, 550);
    tint(tint_color);
    circle(40, 40, 60);
    circle(600, 40, 60);
    circle(40, 340, 60);
    circle(600, 340, 60);
    fill(102, 231, 189);
    rect(40, 80, 55, 220, 20);
    rect(550, 80, 55, 220, 20);
    rect(140, 20, 350, 55, 20);
    rect(140, 307, 350, 55, 20);
    fill(255, 0, 255)
}


function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value
}