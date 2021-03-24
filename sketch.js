//Project 33

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle; count = 0;
var gameState = "start";

function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

        
}
 

function draw() {

  background("black");

  //text(mouseX + " " + mouseY,100,400);
  textSize(20);
  fill("white"); 
  text("Score : "+score,80,35);

  if(gameState === "end"){
    push();
    textSize(40);
    stroke("white");
    text("Game Over", 300,250);
    pop();
  
  }


  text("500", 30,495);
  text("500", 110,495);
  text("500", 180,495);
  text("500", 260,495);
  text("100", 340,495);
  text("100", 420,495);
  text("100", 500,495);
  text("200", 580,495);
  text("200", 660,495);
  text("200", 740,495);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   
   
  if(particle != null)
    {
       particle.display();
        
       if (particle.body.position.y > 600)
       {
             if (particle.body.position.x < 300 && particle.body.position.x > 15) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 550 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 800 && particle.body.position.x > 551 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
         }
        }   
        
        
  }//draw

  function mousePressed()
 {
  if(gameState !== "end")
  {
      count++;
     particle = new Particle(mouseX, 10, 10); 
  }   
}
   
