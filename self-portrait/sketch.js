function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 255);
   //ears
  fill(255, 178, 25);
  triangle(138, 36, 179, 62, 121, 89);
   fill(255, 178, 25);
  triangle(278, 37, 281, 105, 221, 65);
  
  //face
  fill(255, 178, 25);
  ellipse(200, 148, 206, 178);
  fill(255, 240, 79);
 arc(200, 150, 205, 180, 0, HALF_PI);
  arc(200, 150, 205, 180, HALF_PI, PI);
  
  //nose
  fill(0, 0, 0);
  ellipse(185, 158, 43, 36);
  
  //mouth
  stroke(0, 0, 0);
strokeWeight(4);
line(185, 177, 186, 185);
line(175, 187, 211, 185);
line(219, 178, 211, 185);
 
  //eyes
  fill(255, 255, 255);
  ellipse(156, 115, 45, 27);
    fill(255, 255, 255);
  ellipse(222, 115, 45, 27);
   
  //eyeballs
  fill(0, 0, 0);
  ellipse(165, 115, 21, 20);
  fill(0, 0, 0);
  ellipse(231, 115, 21, 20);
  

console.log("x: " + mouseX + ", y: " + mouseY);
}