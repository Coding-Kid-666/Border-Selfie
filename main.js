function setup(){
    canvas = createCanvas(900,600);
    canvas.position(200, 370);
    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
       image(video,120,50,560,400);

       fill(0,128,0);
       stroke(0,128,0);   
       rect(50,5,700,30)

       fill(0,128,0);
       stroke(0,0,120);   
       rect(100,460,650,30)

       fill(0,128,0);
       stroke(0,128,0);
       rect(720,10,30,480)

       fill(0,128,0);
       stroke(0,128,0);
       rect(50,5,30,480);

       fill(0,0,0);
       stroke(255,0,0);
       rect(400,200,100,10)

       fill(255,0,0);
       stroke(255,255,0);
       circle(70,480,100);

       fill(255,0,0);
       stroke(255,0,0);
       circle(50,48,100);

       fill(255,0,0);
       stroke(255,180,0);
       circle(720,45,100);

       fill(255,0,0);
       stroke(255,0,0);
       circle(720,480,100);

       fill(0,0,0);
       stroke(255,0,0);
       circle(500,200,70);

       fill(0,0,0);
       stroke(255,0,0);
       circle(400,200,70);
}

function snapshot(){
     save('MyPicture.png');
}