var fixedrect, movingrect;

function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "yellow"
  movingrect = createSprite(200, 150, 60, 50);
  movingrect.shapeColor = "yellow"
}

function draw() {
  background(255,255,255); 
  movingrect.y = mouseY;
  movingrect.x = mouseX;
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
      movingrect.shapeColor = "red"
      fixedrect.shapeColor = "red"
    }
    else{
      movingrect.shapeColor = "yellow";
      fixedrect.shapeColor = "yellow";
    
    }

  drawSprites();
}