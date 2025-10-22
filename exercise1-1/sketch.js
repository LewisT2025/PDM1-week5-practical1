let diameters = [360, 280, 200, 150]
let colourVals = [60, 140, 180, 255]

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(255)
    fill(colourVals[0], 150, 150)
    circle(200, 200, diameters[0]);
    fill(colourVals[1], 150, 150)
    circle(200, 200, diameters[1]);
    fill(colourVals[2], 150, 150)
    circle(200, 200, diameters[2]);
    fill(colourVals[3], 150, 150)
    circle(200, 200, diameters[3]);
}

function mouseClicked(){
    let lastValue = colourVals.pop()
     colourVals.unshift(lastValue);
}
