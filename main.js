function preload(){

}

function setup(){
    canvas = createCanvas(350,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
 function draw(){
    image(video,0,0,300,300);

 }

 function take_snapshot(){
     save("realtime_filter.png");
 }

 function modelLoaded(){
     console.log("pose-net is intialised");
 }

 function gotposes(results){
     if(results.length>0){
         console.log(results);
         console.log("nose x = "+ results[0].pose.nose.x);
         console.log("nose y = "+ results[0].pose.nose.y);
     }
 }
