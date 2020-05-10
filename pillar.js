class Pillar{
 
    constructor(x,y,w,h){
       var ball_options ={
           isStatic:true
        }
       
    this.obj=Bodies.rectangle(x,y,w,h);
    World.add(world,this.obj)
    this.width=w;
    this.height=h;
   }
    display(){
        rectMode(CENTER);
        rect(this.obj.position.x,this.obj.position.y,this.width,this.height);
        } 
   }