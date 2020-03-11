let x;
let y;

let xspeed;
let yspeed;



function setup() {
  
  createCanvas(600, 600);
  img2 = loadImage('Space.jpg');
  img4 = loadImage('squidward.jpg')
  img3 = loadImage('spongebob.png');
  img = loadImage('patrick.png');
  song = loadSound('Shootingstar.ogg');
  
  x = 400;
  y = 100;
  xspeed = 5;
  yspeed = 5;
  

}


 function mousePressed() {
  if (song.isPlaying()) {
    song.stop();} 
   else {
    song.play();}
}
  
  
  function draw() {
  background(220);
  console.log("x: " + mouseX + ", y: " + mouseY);
  
   
  image(img2, 5, 5, 600, 600);
  text('Tap here to play', 300, 300);
  
  
  
  push();
  translate(200, 200);
  rotate(frameCount * PI/2);
  image(img3, 50, 100, 100, 100);
  pop();
  
  angleMode(DEGREES);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  translate(width /10, height /10);
  push();
  rotate(a);
  image(img,0.4*width, 0.4*height, img.width/10, img.height/10);
  pop();
  
  //rect(x,y,80,60);
 image(img4,x,y,100,100);
  x = x + xspeed;
  y = y + yspeed;
    
    if(x + 100 == width) {
      xspeed = xspeed * -1;
    } else if( x== 0) {
      xspeed = xspeed * -1
    }
     
    if(y + 100 == height || y == 0) {
      yspeed = yspeed * -1;
    }
  
  
}


