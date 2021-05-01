class Block{

    constructor(x, y,width,height) {
        var options = {
          'density': 4,
          'friction': 1.0,
          'restitution': 0.5
          };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y,width,height,options);
        World.add(world, this.body);
      };
       display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER) 
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();
      };
    };