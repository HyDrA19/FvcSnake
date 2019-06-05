<html>
        <head>
            <title>Snake</title>
          <style>
               canvas
                {
                   border: 1px solid black;
                }
           </style>
		   <script src=https://hydra19.github.io/score.js></script>
           <script src=https://hydra19.github.io/game.js></script>
           <script src=https://hydra19.github.io/snake.js></script>
           <script src=https://hydra19.github.io/food.js></script>
        </head>
        <body onload="main()">
          <canvas width=400px height=400px id=canvas></canvas>
		   <a href='#' 
              onclick='downloadCSV({ filename: "highScores.csv" });'
           >Download CSV</a>
        </body>
  </html>
