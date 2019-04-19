/*Code by Eric S. Niebergall
 *Coursework #6: Audio Visualizer
 *Introduction to Programming for the Visual Arts with p5.js | Kadenze Online
 */

var music
var timer = 1000;

var angle = 0.0;
var speed = 0.005;

let distribution = new Array(900);

let x = 1;
let y = 1;
let easing = 0.001;


function preload() {
  music = loadSound("mix.mp3");
}

function setup() {
  createCanvas(1024, 768);
  textFont("Helvetica");
  textSize(32);
  textAlign(CENTER);
  for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(0, 150));
  }
}

function draw() {//increments of time-based changes to the sketch
  background(0);
  if (millis() > timer) {
    background(0);
  } else if (music.isPlaying()) {
    music.stop();
  } else {
    music.play();
  }
  if (millis() > timer ) {
    background(204, 255, 230);
    text("CAN", width/2, height/2);
  }
  if (millis() > timer + 144) {
    background(0);
    text ("CAN", width/2, height/2);
  }
  if (millis() > timer + 887) {
    background(204, 255, 230);
    text ("CAN", width/2, height/2);
  }
  if (millis() > timer + 1032) {
    background(0);
    text ("CAN", width/2, height/2);
  }
  if (millis() > timer + 1443) {
    background(204, 255, 230);
    text("CAN", width/2, height/2);
  }
  if (millis() > timer + 1587) {
    background(0);
    text ("CAN", width/2, height/2);
  }
  if (millis() > timer + 1777) {
    background(204, 255, 230);
    text ("CAN", width/2, height/2);
  }
  if (millis() > timer + 1920) {
    background(0);
    text ("CAN", width/2, height/2);
  }
  if (millis() > timer + 2665) {
    background(204, 255, 230);
    text("YOU", width/2, height/2);
  }
  if (millis() > timer + 2809) {
    background(0);
    text ("YOU", width/2, height/2);
  }
  if (millis() > timer + 3221) {
    background(204, 255, 230);
    text ("YOU", width/2, height/2);
  }
  if (millis() > timer + 3365) {
    background(0);
    text ("YOU", width/2, height/2);
  }
  if (millis() > timer + 3554) {
    background(204, 255, 230);
    text("YOU", width/2, height/2);
  }
  if (millis() > timer + 3698) {
    background(0);
    text ("YOU", width/2, height/2);
  }
  if (millis() > timer + 4110) {
    background(204, 255, 230);
    text ("DANCE", width/2, height/2);
  }
  if (millis() > timer + 4254) {
    background(0);
    text ("DANCE", width/2, height/2);
  }
  if (millis() > timer + 4443) {
    background(204, 255, 230);
    text("DANCE", width/2, height/2);
  }
  if (millis() > timer + 4587) {
    background(0);
    text ("DANCE", width/2, height/2);
  }
  if (millis() > timer + 4999) {
    background(204, 255, 230);
    text ("DANCE", width/2, height/2);
  }
  if (millis() > timer + 5143) {
    background(0);
    text ("DANCE", width/2, height/2);
  }
  if (millis() > timer + 5332) {
    background(204, 255, 230);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 5475) {
    background(0);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 5888) {
    background(204, 255, 230);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 6032) {
    background(0);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 6221) {
    background(204, 255, 230);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 6365) {
    background(0);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 6778) {
    background(204, 255, 230);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 6921) {
    background(0);
    text ("TO", width/2, height/2);
  }
  if (millis() > timer + 7109) {
    background(204, 255, 230);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7253) {
    background(0);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7331) {
    background(204, 255, 230);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7474) {
    background(0);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7554) {
    background(204, 255, 230);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7698) {
    background(0);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7777) {
    background(204, 255, 230);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7920) {
    background(0);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 7998) {
    background(204, 255, 230);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 8100) {
    background(0);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 8110) {
    background(204, 255, 230);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 8212) {
    background(0);
    text ("MY", width/2, height/2);
  }
  if (millis() > timer + 8222) {
    background(204, 255, 230);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8365) {
    background(0);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8444) {
    background(204, 255, 230);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8545) {
    background(0);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8555) {
    background(204, 255, 230);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8657) {
    background(0);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8666) {
    background(204, 255, 230);
    text ("BEAT?", width/2, height/2);
  }
  if (millis() > timer + 8809) {
    background(0);
    text ("BEAT?", width/2, height/2);
  }
  
  //Snare speedy build-up; 16 hits
  if (millis() > timer + 8887) {//1
    background(204, 255, 230);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 8940) {
    background(0);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 8999) {//2
    background(204, 255, 230);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9050) {
    background(0);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9110) {//3
    background(204, 255, 230);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9162) {
    background(0);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9221) {//4
    background(204, 255, 230);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9272) {
    background(0);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9332) {//5
    background(255);
    text ("", width/2, height/2);
  }
  if (millis() > timer + 9383) {
    background(0);
    text ("3", width/2, height/2);
  }
  if (millis() > timer + 9444) {//6
    background(204, 255, 230);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9496) {
    background(0);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9555) {//7
    background(204, 255, 230);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9607) {
    background(0);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9667) {//8
    background(255);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9719) {
    background(0);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9778) {//9
    background(204, 255, 230);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9830) {
    background(0);
    text ("2", width/2, height/2);
  }
  if (millis() > timer + 9889) {//10
    background(204, 255, 230);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 9940) {
    background(0);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 9999) {//11
    background(204, 255, 230);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10051) {
    background(0);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10110) {//12
    background(204, 255, 230);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10162) {
    background(0);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10221) {//13
    background(204, 255, 230);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10272) {
    background(0);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10332) {//14
    background(204, 255, 230);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10384) {
    background(0);
    text ("1", width/2, height/2);
  }
  if (millis() > timer + 10444) {//15
    background(204, 255, 230);
    textSize(44);
    text ("GO!", width/2, height/2);
  }
  if (millis() > timer + 10496) {
    background(0);
    textSize(44);
    text ("GO!", width/2, height/2);
  }
  if (millis() > timer + 10555) {//16
    background(204, 255, 230);
    textSize(44);
    text ("GO!", width/2, height/2);
  }
  if (millis() > timer + 10698) {
    background(0);
    textSize(44);
    text ("GO!", width/2, height/2);
  } 
  
  //The drop
  if (millis() > timer + 10854) {//kick-drum hit 1
      visualizer();
      var l0 = map(mouseX, 0, width, 10, 300);
      translate(width/2, height/2);
      rotate(angle);
      fill(204, 255, 230);
      for ( var j = 0; j < 12; j++) {
        push();
        let targetX = mouseX;
        let dx = targetX - j;
        j += dx * easing;
        rotate(j+TWO_PI/5);
        translate(0, l0);
        fill(255, 0, 220);
        stroke(204, 255, 230);
        strokeWeight(5);
        ellipse(0, 0, 50, 50);
        pop();
      }
      angle += speed;
  } 
  if (millis() > timer + 16699) {
    background(0);
    
  } 
}

function visualizer() {//constructorfunction for the interactive audio-visual animation
  background(120);
  fill(0);
  ellipse(width/2, height/2, random(265, 275), random(265, 275));
  push();
  translate(width/2, height / 2);
  for (let i = 0; i < distribution.length; i++) {
    rotate(cos(TWO_PI / distribution.length));
    stroke(204, 255, 230);
    let dist = abs(distribution[i]);
    ellipse(90, 140, random(dist, dist*1.5), 1);
   }
  pop();
}


