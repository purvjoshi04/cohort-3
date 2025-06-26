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


// map function
const map = new Map();
map.set("name", "purv");
map.set("age", 21);
console.log(map.get("name"));


// promise

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 seconds have passed!");
}

setTimeoutPromisified(3000).then(callback)