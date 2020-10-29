function preload() {
    img=loadImage("https://images.pexels.com/photos/3536511/pexels-photo-3536511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    }
    
    function setup() {
    createCanvas(400,400);
      background(100,200,0)
    }
    
    function draw() {
    image(img,40,40,150,120);
      circle(350,60,70)
      fill(0,170,255);
      stroke(80,79,265)
      strokeWeight(5)
      
      line(40,200,50,300)
    }