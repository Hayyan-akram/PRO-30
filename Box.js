class Box {
  constructor(x, y, width, height) {
    isStatic:true;
    var options = {
        
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);

    this.visibility=255;
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    strokeWeight(4);
    stroke("blue");
    rect(0, 0, this.width, this.height);
    pop();
    }else{
      World.remove(world,this.body);
      this.visibility=this.visibility-5;
      push();
      tint(255,this.visibility);
      
      pop();
    }
  }
};
