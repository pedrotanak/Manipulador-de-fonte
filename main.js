noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on('pose', gotPoses);
}
function modelLoad() {
    console.log('poseNet é estabilizado');
}
function gotPoses(results) {
    if (results.lengh > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY);
        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        difference = color = floor(leftWristX - rightWristX);
        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference);
    }
}
function draw() {
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Altura e Largura=" + difference + "px";
    Fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}