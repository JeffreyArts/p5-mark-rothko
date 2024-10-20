function setup () {
  createCanvas(1300, 1900,WEBGL)
  pixelDensity(.4)
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