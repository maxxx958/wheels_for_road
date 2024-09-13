class Road {
    constructor(f, resolution) {
        this.f = f;
        this.resolution = resolution;
        this.points = [];
    }

    draw() {
        push();
        translate(width / 2, height / 2);
        rotate(PI / 2);
        stroke(100, 255, 100);
        fill(100, 255, 100);
        let offset = ((this.f(t) * 2 * PI) / this.resolution) * v;
        beginShape();
        for (let i = 0; i < this.points.length; i++) {
            this.points[i][1] += offset;
            vertex(this.points[i][0], this.points[i][1]);
        }
        vertex(this.f(t), 0);
        vertex(height / 2, 0);
        if (this.points.length > 0) {
            vertex(height / 2, this.points[0][1]);
        }
        endShape(CLOSE);
        this.points.push([this.f(t), 0]);
        this.points = this.points.filter(
            (point) => point[1] <= width / 2 + 100
        );
        pop();
    }
}
