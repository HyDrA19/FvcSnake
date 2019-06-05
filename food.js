 class Food
    {
        constructor(cell)
        {
           this.x = Math.floor(Math.random() * $("canvas").width / cell);
           this.y = Math.floor(Math.random() * $("canvas").height / cell);
           this.cell = cell;
        }
       draw()
        {
           rect(this.x, this.y, this.cell, "red");
        }
    };