var bg,bg2,form,system,code,security;
var lionimg,catimg,fishimg,horseimg,birdimg;
var lion,cat,fish,horse,bird;
var score=0;

function preload() {
  bg = loadImage("bg.jpg");
  bg2 = loadImage("BCK.jpg");

}

function setup() {
  createCanvas(1000,600);
  system = new System()
  security = new Security()


}

function draw() {
  background(bg);
  clues();
  security.display();

  //add text for the story
  fill("pink")
  textSize(18)
  text("Enter the classroom by answering these :",550,220)

  fill("pink")
  textSize(18)
  text("WHEN YOU SCORE ALL FIVE CORRECT ,",550,370)

  fill("pink")
  textSize(18)
  text("YOU WILL ENTER THE CLASSROOM",550,400)

  fill("black")
  textSize(50)
  text("MATHS",650,300)

  fill("pink")
  textSize(18)
  text("Enter the code in capital letters",570,500)

  // Add code to display score in the middle of the screen
  fill("black")
  textSize(40)
  text("score:"+score,650,180)

  // Add code to display the end screen
if(score === 5){
  clear()
  background(bg2)
  fill("white")
  textSize(25)
  text("WELOCOME TO THE CLASSROOM",300,300)
}

  drawSprites()
}