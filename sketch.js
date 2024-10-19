//////////////////////////////////////////////////
// Object for creation and real-time resize of canvas
// Good function to create canvas and resize functions. I use this in all examples.
const C = {
  loaded: false,
  prop() {return this.height/this.width},
  isLandscape() {return window.innerHeight <= window.innerWidth * this.prop()},
  resize () {
    if (this.isLandscape()) {
      document.getElementById(this.css).style.height = "100%";
      document.getElementById(this.css).style.removeProperty('width');
    } else {
      document.getElementById(this.css).style.removeProperty('height');
      document.getElementById(this.css).style.width = "100%";
    }
  },
  setSize(w,h,p,css) {
    this.width = w, this.height = h, this.pD = p, this.css = css;
  },
  createCanvas() {
    this.main = createCanvas(this.width,this.height,WEBGL), pixelDensity(this.pD), this.main.id(this.css), this.resize();
  }
};
function windowResized () {
  C.resize();
}

C.setSize(1300, 1900, .4, 'mainCanvas')
//
// End set-up
//////////////////////////////////////////////////

function setup () {
  C.createCanvas()
  angleMode(DEGREES)
  translate(-width/2,-height/2)  
  
  
  // Deze waardes kun je eenvoudig veranderen
  // Lees hier meer over p5's random functie: https://p5js.org/reference/p5/random/
  const border = random(50, 130)
  const offset = random(2,128)
  const bleed = random(.0008, .0024)
  const row_size = height / random(1.5,4)
  const palettes = [
    ["#94654b", "#ff4e01", "#003545"],
    ["#94654b", "#003545", "#ff4e01"],
    ["#e0441b", "#fbd071", "#ff3c00"],
    ["#53738c", "#fbd071", "#ff3c00"],
    ["#3a3026", "#fbd071", "#ff3c00"],
    ["#3a3026", "#fbd071", "#a41205"],
    ["#ff6232", "##fd3598", "#ff0000"],
  ]
  
  
  // Onderstaande code zorgt voor het genereren van de vlakken
  let palette = palettes[Math.floor(Math.random() * palettes.length)]
  background(palette[0])
  brush.noStroke()
  brush.noFill()
  brush.noHatch()
  brush.bleed(bleed,"out")
  brush.fillTexture(.4,1)
  brush.fill(palette[1], 110)
  brush.rect(border/2, border/2, width - border, row_size)
  brush.rect(border/2, border/2, width - border, row_size)
  
  brush.fill(palette[2], 110)
  brush.rect(border/2, height - (height - row_size) + border/2 + offset , width - border, (height - row_size) - border - offset)
  brush.rect(border/2, height - (height - row_size) + border/2 + offset , width - border, (height - row_size) - border - offset)
  
  // Required cause of buffering, see: https://github.com/acamposuribe/p5.brush/issues/20
  brush.reBlend()
}