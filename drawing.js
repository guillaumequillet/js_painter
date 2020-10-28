class Drawing {
    canvas;
    ctx;
    drawing = false;
    previousPosition;
    lineWidth;
    lineColor;

    constructor(canvasId) {
        this.getCanvas(canvasId);
        this.setListeners();
        this.steps = [];
        this.cursor = 0;
        this.lineWidth = 1;
        this.lineColor = 'black';
    } 

    getCanvas(canvasId) {
        this.canvas = document.querySelector(canvasId);
        this.ctx = this.canvas.getContext('2d');    

        // set style for pixelated render
        this.canvas.style = "image-rendering: pixelated;"
        this.canvas.style.width = this.canvas.width + " px"
        this.canvas.style.height = this.canvas.height + " px"
    }

    setListeners() {
        this.canvas.addEventListener('mousedown', (e) => {
            this.drawing = true;
            this.previousPosition = this.getCoordinates(e);
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.drawing) {
                const newPosition = this.getCoordinates(e);
                this.drawLine(this.previousPosition, newPosition, this.lineColor, this.lineWidth);
                
                this.previousPosition.x = newPosition.x;
                this.previousPosition.y = newPosition.y;
            }
        });

        this.canvas.addEventListener('mouseup', () => {
            this.drawing = false;
        });

        this.canvas.addEventListener('mouseout', () => {
            this.drawing = false;
        });
    }

    getCoordinates(e) {
        const boundingBox = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - boundingBox.left),
            y: (e.clientY - boundingBox.top)
        };
    }

    drawLine(pointA, pointB, color, width) {
        this.ctx.lineWidth = width;
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(pointA.x, pointA.y);
        this.ctx.lineTo(pointB.x, pointB.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    reset() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setColor(color) {
        this.lineColor = color;
    }
    
    setWidth(width) {
        this.lineWidth = width;
    }
}
