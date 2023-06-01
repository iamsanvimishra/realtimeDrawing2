function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(500,550);
canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotposes(results){
}