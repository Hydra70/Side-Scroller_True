function obstacle() {
        this.x = w+35;
        this.y = 210;
        this.gravity = -0.5; //The force of gravity
        this.lift = 9; //Jump up/opposing force
        this.velocity = 0; //Speed of gravitational pull
        
        this.launch = function(){
          this.y = Math.floor(Math.random() * h+1);
        }
        this.show = function(){
          fill(color('yellow'));
          rect(this.x,this.y,80,10);
          strokeWeight(0);
        }
        
        this.up = function(){
          this.velocity += this.lift;
        }
        
        this.update = function(){
          this.velocity += this.gravity;
          this.x += this.velocity;
          this.velocity *= 0.9;
          
          if (this.x > w+35) {//stops object on right side
            this.x = w+35;
            this.velocity = -100;
            this.y = Math.floor(Math.random() * h+1);
          }
          if (this.x < -80) {//stops object on left side
            this.x = w+35;
            this.velocity = 0;
            this.y = Math.floor(Math.random() * h+1);
          }
        }
      }