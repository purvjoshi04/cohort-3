class Rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  area() {
    console.log(this.width * this.height);
  }

  paint() {
    console.log(`Color of rectangle is ${this.color}.`);
  }
}

const rect = new Rectangle(3, 4, "red");
rect.area();
rect.paint();
