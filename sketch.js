
var trex, trex_running;
var ground, grounding

function preload() {
  trex_running = loadAnimation('trex1.png', 'trex3.png', 'trex4.png')
  grounding = loadImage('ground2.png')
}

function setup() {
  createCanvas(600,500)
  edges = createEdgeSprites()
  //create a trex sprite
  trex = createSprite(150, 150, 20, 50)
  trex.addAnimation("running", trex_running)

  ground = createSprite(200,400,1000, 20)
  ground.x=ground.width/2
  ground.addImage(grounding)
  ground.velocityX = -10
  
  invisibleground = createSprite(200,410,1000, 20)
  invisibleground.visible=false

}

function draw() {
  //set background colour to black
  background("220")
  if (keyDown("space")&& trex.y>350) {
    trex.velocityY = -10
        
  }
console.log(trex.y)
  trex.velocityY = trex.velocityY + 0.5
  if (ground.x<0){
  ground.x=ground.width/2
  }


  trex.collide(edges[2])
  trex.collide(invisibleground)
  drawSprites()

}
