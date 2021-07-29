const w = 5000
const s = 12
const dx = w / s
const dy = dx * 2 / 3

function setup() {
  createCanvas(w, w, SVG)
  strokeWeight(dx / 20)
  background(233, 203, 130) // Lite Gold
}

function draw() {
  for (let i = 0; i < w / dy; i++) {
    const da = (i % 2 === 0) ? 0 : PI
    push()
    translate(0, dy / 2 + i * dy)
    noFill()
    stroke(158, 122, 70) // Gold
    beginShape()
    for (let x = 0; x < width; x++) {
      let angle = map(x, 0, dx, 0, TWO_PI)
      let y = sin(angle + HALF_PI + da) * dy / 2
      vertex(x, y)
    }
    endShape()
    pop()
  }
  // save("mySVG.svg");
  // print("saved svg");
  // noLoop();
}