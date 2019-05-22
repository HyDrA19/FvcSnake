<html>
<h1> <a href="https://hydra19.github.io/Hydra19.github.io/README.md">Home</a> <a href="https://hydra19.github.io/Hydra19.github.io/Scores.md">Scores</a> <a href="https://hydra19.github.io/Hydra19.github.io/HowToPlay.md">How to play</a> <a href="https://hydra19.github.io/Hydra19.github.io/Game.md">Game</a> </h1>

<h1> Scores </h1>

Scores of the top twenty people who have played

|Player|Score|
|------|-----|
|Ross  | 10  |

<body>
        <!-- <script src="http://d3js.org/d3.v3.min.js"></script> -->
        <script src="d3.min.js?v=3.2.8"></script>

        <script type="text/javascript"charset="utf-8">
            d3.text("Book1.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);

                var container = d3.select("body")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });
        </script>
    </body>
</html>
