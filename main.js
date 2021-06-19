function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotposes)
}

function modelLoaded()
{
    console.log('posenet is initialized');
}

function draw()
{
    background('#969A97');

    document.getElementById("square_sides").innerHTML = "Width And Height of a square will be = " + difference +"px";
    fill('#7cc4eb');
    stroke('#e1ffde');
    square(noseX, noseY, difference);
}

function gotposes(results)
{
if(results.lenght > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    comsole.log(" noseX = " + noseX + " noseY = " + noseY);

    leftwristX = results[0].pose.leftwrist.X
    rightwristX = results[0].pose.rightwrist.X
    difference = floor(rightwristX - leftwristX);

    console.log("leftwristX = " + leftwristX + "rightwristX =" + rightwristX + "difference =" + difference);
}
}

noseX=0;
noseY=0;
difference =0;
rightwristX =0;
leftwristX =0;