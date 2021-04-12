let pg;
function setup() {
  createCanvas(400, 400);
  pg=createGraphics (400,400);
 
  
  button = createButton("Black");
  button.size(200,100);
  
  button2=createButton("White")
  button2.size(200,100)

  button3=createButton("Blue")
  button3.size(200,100)
  
  button4=createButton("Purple")
  button4.size(200,100)
  
  button5=createButton("Red")
  button5.size(200,100)
  
  button6=createButton("Orange")
  button6.size(200,100)
}

function draw() {
  
  if(mouseX>200){    
  fill(250,135,117) 
    rect(0,0,400,400)
    pg.fill(250,230,135)
  }

  
  if (mouseX<200){
fill(250,230,135)
    rect(0,0,400,400)
    pg.fill(250,135,117)
  }

  pg.ellipse(mouseX,mouseY,10,10);
  

 button.mousePressed(backgroundBlack);
  button2.mousePressed(backgroundWhite);
  button3.mousePressed(backgroundBlue);
  button4.mousePressed(backgroundPurple);
  button5.mousePressed(backgroundRed);
  button6.mousePressed(backgroundOrange)
  image(pg, 0, 0, 400, 400)


function backgroundBlack(){
  pg.background(0);
}

function backgroundWhite(){
  pg.background(225);
}
  function backgroundBlue(){
    pg.background(94,168,225);
  }
  function backgroundPurple(){
    pg.background(191,97,248);
  }
    function backgroundRed(){
      pg.background(225,93,79);
    }
  function backgroundOrange(){
    pg.background(250,169,89)
  }
function keyPressed(){
   if(keyCode==LEFT_ARROW){
     pg.ellipse(mouseX,mouseY,30,30);
   }
}
    
}