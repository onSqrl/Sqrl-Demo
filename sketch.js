let DEFAULT_SIZE = 600;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let SHORT = Math.min(WIDTH, HEIGHT);
let M = SHORT / DEFAULT_SIZE;

let paramColor = sqrlParams.color;
let paramShape = sqrlParams.shape;

let color;
let shape;
let count = R.random_int(200, 600);
let X = [];
let Y = [];

if (paramColor == "Red") {
  color = "Red";
} else if (paramColor == "Green") {
  color = "Green";
} else if (paramColor == "Blue") {
  color = "Blue";
} else {
  color = R.random_choice(["Red", "Green", "Blue"]);
}

if (paramShape == "Circle") {
  shape = "Circle";
} else if (paramShape == "Square") {
  shape = "Square";
} else if (paramShape == "Ellipse") {
  shape = "Ellipse";
} else {
  shape = R.random_choice(["Circle", "Square", "Ellipse"]);
}

function setup() {
  createCanvas(SHORT, SHORT);
  smooth();
  rectMode(CORNER);

  for (let i = 0; i < count; i++) {
    X.push(R.random_int(0, SHORT));
    Y.push(R.random_int(0, SHORT));
  }

  buildTraitFields();
  buildTraitValues();
  drawShapes();
}

function buildTraitFields() {
  window.$traitFields = [
    {
      type: "enum",
      slug: "color",
      name: "Color",
      options: ["Red", "Green", "Blue"],
    },
    {
      type: "enum",
      slug: "shape",
      name: "Shape",
      options: ["Circle", "Square", "Ellipse"],
    },
  ];
}

function buildTraitValues() {
  let tColor = {};
  let tShape = {};
  let tCount = {};

  if (color == "Red") {
    tColor = { Color: "Red" };
  } else if (color == "Green") {
    tColor = { Color: "Green" };
  } else if (color == "Blue") {
    tColor = { Color: "Blue" };
  }

  if (shape == "Circle") {
    tShape = { Shape: "Circle" };
  } else if (shape == "Square") {
    tShape = { Shape: "Square" };
  } else if (shape == "Ellipse") {
    tShape = { Shape: "Ellipse" };
  }

  tCount = { Count: count };

  window.$traitValues = Object.assign(tColor, tShape, tCount);
}

function drawShapes() {
  stroke(color);
  strokeWeight(1 * M);
  for (let i = 0; i < count; i++) {
    if (shape == "Circle") {
      circle(X[i], Y[i], 20 * M);
    } else if (shape == "Square") {
      rect(X[i], Y[i], 20 * M);
    } else if (shape == "Ellipse") {
      ellipse(X[i], Y[i], 15 * M, 25 * M);
    }
    if (i == count - 1) {
      sqrlPreview();
    }
  }
}

function windowResized() {
  window.location.reload();
}
