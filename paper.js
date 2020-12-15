class Paper {
    constructor(){
      var   options = {
          isStatic : false,
          'restitution' : 0.3,
          'friction' : 0.5,
          'density' : 0.7,
          
        }

        this.body = Bodies.circle(200,500,15,options)
        World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      
      
      ellipseMode(RADIUS);
      
      fill("yellow");
      ellipse(150,620,30,30);
      pop();
    }
    
}