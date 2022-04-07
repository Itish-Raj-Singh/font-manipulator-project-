function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 550);

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