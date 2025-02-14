let img1, img2, img3;
let gridSize = 8; // 4x4 grid
let tileSize;
let finalImg;

function preload() {
  img1 = loadImage('image1.jpg');
  img2 = loadImage('image2.jpg');
  img3 = loadImage('image3.jpeg');
  
}

function setup() {
  createCanvas(800, 800);
  tileSize = width / gridSize;
  finalImg = createGraphics(width, height);
  img1.resize(800,800)
  img2.resize(800,800)
  img3.resize(800,800)
  
  createFinalImage2();
}

function createFinalImage() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let srcImg;
      
      // Choose a random source image
      let rand = int(random(3));
      if (rand === 0) srcImg = img1;
      else if (rand === 1) srcImg = img2;
      else srcImg = img3;
      
      // Get a tile from the selected image
      let sx = x * tileSize;
      let sy = y * tileSize;
      let tile = srcImg.get(sx, sy, tileSize-5, tileSize-5);
      
      // Place tile on the final image
      finalImg.image(tile, sx, sy);
    }
  }
}

function draw() {
  background(0);
  image(finalImg, 0, 0);
}


function createFinalImage2() {
  let positions = [];
  
  // Generate all possible tile positions
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      positions.push({ x: x * tileSize, y: y * tileSize });
    }
  }
  
  // Shuffle positions
  shuffle(positions, true);
  
  let index = 0;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      let srcImg;
      
      // Choose a random source image
      let rand = int(random(3));
      if (rand === 0) srcImg = img1;
      else if (rand === 1) srcImg = img2;
      else srcImg = img3;
      
      // Get a tile from the selected image
      let sx = x * tileSize;
      let sy = y * tileSize;
      let tile = srcImg.get(sx, sy, tileSize - 5, tileSize - 5);
      
      // Place tile in a random position from shuffled list
      let newPos = positions[index];
      finalImg.image(tile, newPos.x, newPos.y);
      index++;
    }
  }
}
