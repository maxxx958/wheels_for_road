let t = 0;
let v = 0.5;
let resolution = 120;

let wierd_shape_func = (a) => {
    let per_side = resolution / 7;
    return (
        100 *
        (1 +
            ((Math.SQRT2 - 1) * Math.abs((a % per_side) - per_side / 2.0)) /
                per_side)
    );
};

let square_func = (a) => {
    a *= (2 * Math.PI) / resolution;
    return 100 * Math.min(1 / Math.abs(Math.cos(a)), 1 / Math.abs(Math.sin(a)));
};

let circle_func = (a) => {
    return 100;
};

let ellipse_func = (theta) => {
    let a = 1;
    let e = 1 / 1.2;
    theta *= (2 * Math.PI) / resolution;
    return (100 * (a * (1 - e * e))) / (1 + e * Math.cos(theta));
};

let shapeFunctions = {
    Square: square_func,
    Circle: circle_func,
    "Weird Shape": wierd_shape_func,
    Ellipse: ellipse_func,
};

let w = new Wheel(
    square_func,
    (a) => {
        return ((2 * Math.PI) / resolution) * a;
    },
    resolution
);

let r = new Road(square_func, resolution);

let shapeDropdown;

function setup() {
    createCanvas(1000, 600);
    translate(height / 2, width / 2);
    background(40);
    fill(255);

    // Create dropdown and set options
    shapeDropdown = createSelect();
    shapeDropdown.position(10, 10);
    for (let i = 0; i < Object.keys(shapeFunctions).length; i++) {
        shapeDropdown.option(Object.keys(shapeFunctions)[i]);
    }
    shapeDropdown.changed(() => changeShape(shapeDropdown.value()));
}

function changeShape(selected) {
    let selectedFunc = shapeFunctions[selected];
    w = new Wheel(
        selectedFunc,
        (a) => {
            return ((2 * Math.PI) / resolution) * a;
        },
        resolution
    );

    r = new Road(selectedFunc, resolution);
}

function draw() {
    background(40);
    w.draw();
    r.draw();
    t += v;
    t %= resolution;
}
