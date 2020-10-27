class Line {
    pointA;
    pointB;
    color;
    width;

    constructor(pointA, pointB, color, width) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.color = color;
        this.width = width;
    }

    draw(ctx) {
        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.pointA.x, this.pointA.y);
        ctx.lineTo(this.pointB.x, this.pointB.y);
        ctx.stroke();
    }
}
