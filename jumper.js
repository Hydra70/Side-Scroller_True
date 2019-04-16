function jumper() {
        this.x = 500;
        this.y = 0;
        this.gravity = 0.5; //The force of gravity
        this.lift = -10; //Jump up/opposing force
        this.velocity = 0; //Speed of gravitational pull
        
        this.show = function(){
          fill(color('red'));
          ellipse(this.x,this.y,50,50);
          strokeWeight(0);
        }
        
        this.up = function(){
          this.velocity += this.lift;
        }
        
        this.update = function(){
          this.velocity += this.gravity;
          this.y += this.velocity;
          this.velocity *= 0.9;
          
          if (this.y > h) {//stops jumper on floor
            this.y = h;
            this.velocity = 0;
          }
          if (this.y < 0) {//stops jumper on ceiling
            this.y = 0;
            this.velocity = 0;
          }
        }
        
        this.move = function() {
          if (keyIsDown(65) && (this.x > 0)) {
            this.x += -10;
          }
          if (keyIsDown(68) && (this.x < w)) {
            this.x += 10;
          }
        }
      }