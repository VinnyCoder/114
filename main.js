function preload(){
}


function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    canvas.center();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on( 'pose', gotPoses);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function modelLoaded(){
    console.log("The Postnet Is working :D ")
}

function draw(){
    image(video, 0, 0, 300, 300);
}
function save(){
    save('myFilterImage.png');
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
}
}
