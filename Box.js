class Box{
    constructor(x,y,width,height)  {
     var options={
      'restitution':0.8,
      'friction':1.0,
      'density':0.04
     
    }
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,width,height,options)
              
      
     World.add(world,this.body)
      
     }
   display()  {
    rectMode(CENTER)
   // fill("pink")
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
      
          }
}