class Snake {
        constructor(x, y, length, cell)
        {
           this.head = {x: x, y: y};
           this.cell = cell;
           this.tail = [];
           this.direction = ["right"];
           this.grow = length;
        }
       move()
        {
           var width = $("canvas").width / this.cell - 1;
           var height = $("canvas").height / this.cell - 1;
           var x = this.head.x;
           var y = this.head.y;
           if(this.direction.length > 1)
               this.direction.shift();
           switch(this.direction[0])
            {
              case "left":
                  this.head.x--;
                  break;
              case "right":
                  this.head.x++;
                   break;
              case "up":
                   this.head.y--;
                  break;
              case "down":
                  this.head.y++;
                  break;
            }
          if(this.head.y < 0)
              this.head.y = height;
          if(this.head.y > height)
              this.head.y = 0;
          if(this.head.x < 0)
              this.head.x = width;
          if(this.head.x > width)
              this.head.x = 0;
          
         
           this.tail.push({x: x, y: y});
           if(this.grow > 0)
               this.grow--;
           else 
               this.tail.shift();
        }
       draw()
        {
           rect(this.head.x, this.head.y, this.cell, "blue");
           for(var i = 0; i < this.tail.length; i++)
               rect(this.tail[i].x, this.tail[i].y, this.cell, "green");
        }
       keydown(e)
        {
           var key = e.keyCode;
           if(key == 37 && this.direction != "right")
              this.direction.push("left");
           if(key == 38 && this.direction != "down")
               this.direction.push("up");
           if(key == 40 && this.direction != "up")
               this.direction.push("down");
           if(key == 39 && this.direction != "left")
               this.direction.push("right");
        }
    };