
// window.addEventListener('load', () => {
class Grid {
    constructor() {
        this.grid = {
            size: 50,
            width: null,
            height: null,
            startX1: 0,
            startY1: 0,
            endX1: 1000,
            endY1: 0,
            startX2: 0,
            startY2: 0,
            endX2: 1000,
            endY2: 0,
            elements: ['🔥', '🕵🏻', '✊', '🔍', '❌', '🌴']
        }
    }
    generateGrid() {
        var canvas = document.getElementById('demo-canvas')
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
        }

        this.generateHorizontal(context);




    }

    generateHorizontal(context) {
        let j = 0;
        while (j < 15) {
            for (let i = 0; i < this.grid.size; i++) {
                // context.fillRect(this.grid.startX1, this.grid.startY1, this.grid.size, this.grid.size)
                // context.fillStyle = this.grid.colors[Math.floor(Math.random() * this.grid.colors.length)]
                let randomElement = this.grid.elements[Math.floor(Math.random() * this.grid.elements.length)]
                context.fillText(randomElement, this.grid.startX1, this.grid.startY1, this.grid.size)
                this.grid.startX1 += this.grid.size / 4
            }
            this.grid.startY1 += this.grid.size / 2.0;
            this.grid.startX1 = 0;
            j++
        }
    }

}

let grid = new Grid();
grid.generateGrid();

// })
