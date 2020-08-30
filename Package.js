class Package {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.4,

         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("package.png");
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill(255);
      imageMode(CENTER);
      image(this.image, 0, 0, 100, 100);
     // rect(0,0, this.width, this.height);
      pop();
    }
  };