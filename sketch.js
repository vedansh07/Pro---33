 const Engine = Matter.Engine;
 const World = Matter.World;
 const  Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var turn =0;
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(width/2,height,width,20);


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
  textSize(20)
  text("Score : "+score,20,30);
  text("500",25,550);
  text("500",105,550);
  text("500",185,550);
  text("500",265,550);

  text("100",345,550);
  text("100",425,550);
  text("100",505,550);

  text("200",585,550);
  text("200",665,550);
  text("200",745,550);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
    if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   //  score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle (mouseX,10,10,10);
}
}

if(particle!=null){
  particle.display();

  if(particle.position.body.y>760){

    if (particle.position.body.x<300){

      score=score+500;
      particle=null;

      if(count>=5){

        gameState="end";

}
}
}
}

if(particle!=null){
  particle.display();

  if(particle.position.body.y>600){

    if (particle.position.body.x<301){

      score=score+100;
      particle=null;

      if(count>=5){

        gameState="end";

}
}
}
}

if(particle!=null){
  particle.display();

  if(particle.position.body.y>900){

    if (particle.position.body.x<601){

      score=score+200;
      particle=null;

      if(count>=5){

        gameState="end";

}
}
}
}