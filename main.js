function setup(){
    video = createCapture(VIDEO);
    canvas = createCanvas(550 , 550);
    canvas.center();

   poseNet= ml5.poseNet(VIDEO , modelloaded);
   poseNet.on('pose' , gotPoses);
}
function modelloaded(){
    console.log('PoseNet Is Initialiazed');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
function draw(){
    image(video , 15 ,15 , 550 ,550);
}