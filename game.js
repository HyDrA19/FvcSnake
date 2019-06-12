    function $(x) {return document.getElementById(x)}
    function main()
    {
       var cell = 10;
       var snake = new Snake(0, 4, 5, cell);
       var food = new Food(cell);
       window.onkeydown = function(e) {snake.keydown(e);}
       
       window.requestAnimationFrame(function draw() {
           snake.draw();
           food.draw();
           window.requestAnimationFrame(draw);
        });
      //10Hz game tick 
           setInterval(function(){
           clear();
           snake.move();
           for(var i = 0; i < snake.tail.length; i++)
            {
              if(snake.tail[i].x == snake.head.x && snake.tail[i].y == snake.head.y)
                {
                  alert("Game Over");
                  snake = new Snake(0, 4, 5, cell);
				  var person = prompt("Please enter your name", "AAA");
				   getScores(args);
					convertArrayOfObjectsToCSV(args);
 						downloadCSV(args);
			
                }
              
              if((food.x == snake.tail[i].x && food.y == snake.tail[i].y) || (food.x == snake.head.x && food.y == snake.head.y))
                { 
                 snake.grow += 5;
                  food = new Food(cell);
                }
            }
        }, 100);
    } 
   
   function rect(x, y, cell, color)
   {
       var ctx = $("canvas").getContext("2d");
       ctx.fillStyle = color;
       ctx.fillRect(x * cell, y * cell, cell-1, cell-1);
   }
  
   function clear() {$("canvas").getContext("2d").clearRect(0, 0, $("canvas").width, $("canvas").height)}
