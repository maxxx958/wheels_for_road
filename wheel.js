class Wheel {
    constructor(r, theta, resolution) {
        this.r = r;
        this.theta = theta;
        this.angle_step = (2 * Math.PI) / resolution;
        this.points = [];
        for (let i = 0; i < resolution; i++) {
            this.points.push([
                this.r(i) * Math.cos(this.theta(i)),
                this.r(i) * Math.sin(this.theta(i)),
            ]);
        }
    }

    draw() {
        push();
        stroke(255);
        strokeWeight(2);
        fill(255);
        translate(width / 2, height / 2);
        rotate(PI / 2);
        circle(0, 0, 10);
        rotate(this.angle_step * t);
        beginShape();
        for (let i = 0; i < this.points.length; i++) {
            vertex(this.points[i][0], this.points[i][1]);
        }
        endShape(CLOSE);
        pop();
        fill(255, 50, 50);
        stroke(255, 100, 100);
        circle(width / 2, height / 2, 10);
    }
}
