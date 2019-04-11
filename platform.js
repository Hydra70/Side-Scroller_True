function platform(){
        this.x = 0;
        this.y = 500;
        
        this.show = function(){
          fill(color('#848482'));
          rect(this.x,this.y,600,130);
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
      }