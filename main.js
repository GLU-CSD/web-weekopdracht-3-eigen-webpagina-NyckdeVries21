// alert("Hello, World!");


let schumacherfoto;

function preload() {
    schumacherfoto = loadImage('/assets/michaelschumacher.jpg'); 
}

function setup() {
    createCanvas(400, 400); 
    let button = createButton("Beste coureurs van allertijden");
    button.position(100, 150);

    
    image(schumacherfoto, 100, 200, 200, 150);
}




