class Box {
  constructor(x, y, w, h) {
    var options = {
      'friction': 0.5,
      'density': 0.5
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    if (this.width == this.height) {
      fill("blue");
    } else {
      fill("red");
    }
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    push();
  }
}