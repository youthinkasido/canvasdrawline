
// window.addEventListener('load', () => {
class Grid {
    constructor() {
        this.grid = {
            size: 50,
            width: null,
            height: null,
            startX1: 10,
            startY1: 10,
            endX1: 1000,
            endY1: 10,
            startX2: 10,
            startY2: 10,
            endX2: 1000,
            endY2: 10,
            colors: ['orange', 'red', 'green', 'blue', 'black', 'navy']
        }
    }
    generateGrid() {
        var canvas = document.getElementById('demo-canvas')
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
        }

        this.generateHorizontal(context);
        this.generateVertical(context);

    }

    generateHorizontal(context) {
        for (let i = 0; i < this.grid.size; i++) {
            context.beginPath();
            context.moveTo(this.grid.startX1, this.grid.startY1);
            context.lineTo(this.grid.endX1, this.grid.endY1)
            context.strokeStyle = this.grid.colors[Math.floor(Math.random() * this.grid.colors.length) + 1]
            context.stroke()

            this.grid.startY1 += this.grid.size
            this.grid.endY1 += this.grid.size
        }
    }

    generateVertical(context) {
        for (let i = 0; i < this.grid.size; i++) {
            context.beginPath();
            context.moveTo(this.grid.startX2, this.grid.startY2);
            context.lineTo(this.grid.endY2, this.grid.endX2)
            context.stroke()
            this.grid.startX2 += this.grid.size
            this.grid.endY2 += this.grid.size
        }
    }
}

let grid = new Grid();
grid.generateGrid();

// })