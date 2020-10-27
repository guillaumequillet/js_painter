class Drawing {
    canvas;
    ctx;
    drawing = false;
    previousPosition;
    steps;
    cursor;
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
    }

    setListeners() {
        this.canvas.addEventListener('mousedown', (e) => {
            this.drawing = true;
            this.previousPosition = this.getCoordinates(e);
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.drawing) {
                const newPosition = this.getCoordinates(e);
                const line = new Line(this.previousPosition, newPosition, this.lineColor, this.lineWidth);
                line.draw(this.ctx);
                this.steps.push(line);
                this.cursor++;
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
        const x = e.clientX - this.canvas.offsetLeft; 
        const y = e.clientY - this.canvas.offsetTop;
        return { x, y }; 
    }

    reset() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
