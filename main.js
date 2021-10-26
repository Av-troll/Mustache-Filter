var noseX = 0;
var noseY = 0;

function preload(){
mustache = loadImage('https://i.postimg.cc/3J2W41ZZ/ustache.png')
}
 function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);
}
function modelLoaded(){
console.log("poseNet is intialized");
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){
    save('FilterImage.jpg');
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('nose x = '+ results[0].pose.nose.x);
        console.log('nose y = '+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y + 20;
    }

}