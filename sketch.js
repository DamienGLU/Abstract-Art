let boxColors = ["red", "green", "blue", "grey"];
let border = false;
let randomColor = 0;
let redColor = 0;
let greenColor = 0;
let blueColor = 0;

function setup() {
  createCanvas(1200, 600);
  background(220);
}

function draw() {

  // StrokeWeight button box
  strokeWeight(2);
  if (border == true) {
    fill('green');
  }
  else if (border == false) {
    fill('white');
  }
  rect(10,10,200,50);

  // StrokeWeight button text
  fill("black");
  textSize(20);
  text("Stroke Weight", 45, 43);

  // Themes box
  strokeWeight(2);
  fill('white');
  rect(10,70,200,220);

  // Themes text
  fill("black");
  textSize(20);
  text("Themes", 70, 100);

  // Red Box
  fill(boxColors[0]);
  rect(33,120,150,30);

  // Green Box
  fill(boxColors[1]);
  rect(33,160,150,30);

  // Blue Box
  fill(boxColors[2]);
  rect(33,200,150,30);

  // RandomColor Box
  fill(boxColors[3]);
  rect(33,240,150,30);

  // RandomColor Text
  fill("white");
  textSize(20);
  text("Random", 70, 262);


  // Checkmarks
  if (redColor == true) {
    text("✔️", 182, 142);
  }
  else if (greenColor == true) {
    text("✔️", 182, 182);
  }
  else if (blueColor == true) {
    text("✔️", 182, 222);
  }
  else if (randomColor == true) {
    text("✔️", 182, 262);
  }
}

// If Enter is pressed
function keyPressed() {
  if (keyCode === ENTER) {
    background(220);
    if (border == true) {
      strokeWeight(3);
    }
    else {
      strokeWeight(1);
    }
    for (let i = 0; i < 100; i++) {
      if (randomColor == 1) {
        fill(random(256), random(256), random(256));
        circle(random(-100,1500), random(-100,1500), random(0,200));
        square(random(-100,1500), random(-100,1500), random(0,200));
        triangle(random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300));
      }
      else if (redColor == 1) {
        fill(random(256), 0, 0);
        circle(random(-100,1500), random(-100,1500), random(0,200));
        square(random(-100,1500), random(-100,1500), random(0,200));
        triangle(random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300));
      }
      else if (greenColor == 1) {
        fill(0, random(256), 0);
        circle(random(-100,1500), random(-100,1500), random(0,200));
        square(random(-100,1500), random(-100,1500), random(0,200));
        triangle(random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300));
      }
      else if (blueColor == 1) {
        fill(0, 0, random(256));
        circle(random(-100,1500), random(-100,1500), random(0,200));
        square(random(-100,1500), random(-100,1500), random(0,200));
        triangle(random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300), random(-100,1300));
      }
    }
  }
}

// If Mouse is pressed
function mousePressed() {
  // Stroke Weight Box
  if (mouseX > 10 && mouseX < 210 && mouseY > 10 && mouseY < 60) {
    if (border == false) {
      border = true;
    }
    else if (border == true) {
      border = false;
    }
  }
  
  // RandomColor Box
  if (mouseX > 33 && mouseX < 183 && mouseY > 240 && mouseY < 260) {
    if (randomColor == 0) {
      randomColor = 1;
    }
    else if (randomColor == 1) {
      randomColor = 0;
    }
  }
  // RedColor Box
  if (mouseX > 33 && mouseX < 183 && mouseY > 120 && mouseY < 150) {
    if (redColor == 0) {
      redColor = 1;
    }
    else if (redColor == 1) {
      redColor = 0;
    }
  }
  // GreenColor Box
  if (mouseX > 33 && mouseX < 183 && mouseY > 160 && mouseY < 190) {
    if (greenColor == 0) {
      greenColor = 1;
    }
    else if (greenColor == 1) {
      greenColor = 0;
    }
  }
  // BlackColor Box
  if (mouseX > 33 && mouseX < 183 && mouseY > 200 && mouseY < 230) {
    if (blueColor == 0) {
      blueColor = 1;
    }
    else if (blueColor == 1) {
      blueColor = 0;
    }
  }
}