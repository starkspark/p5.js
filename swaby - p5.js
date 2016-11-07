function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(255); 
  if (mouseIsPressed) {
    fill(0, 0, 0, 10);
  } else {
    fill(255, 0, 0, 0);
  }
  ellipse(mouseX, mouseY, 20, 20);
}
