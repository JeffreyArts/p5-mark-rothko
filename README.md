# P5 Rothko Generator

Dit project genereert een interactieve Rothko-geïnspireerde compositie met behulp van de p5.js library en de p5.brush extensie. Het canvas genereert automatisch composities met kleurrijke rechthoeken die lijken op Rothko's kenmerkende Color Field schilderijen. De gegenereerde schilderijen worden vervolgens in een foto geplaatst, waardoor ze nog authentieker lijken.

## Project Structuur

- `index.html` - HTML bestand dat de p5.js en p5.brush libraries laadt en het canvas container element bevat
- `sketch.js` - Hoofdbestand met alle JavaScript code voor de Rothko generator
- `style.css` - CSS styling voor layout en achtergrondafbeelding
- `libraries/p5.min.js` - De p5.js library
- `libraries/p5.brush.js` - De p5.brush extensie voor schilderachtige effecten
- `assets/rothko-painting-bg_lg.jpg` - Achtergrondafbeelding (foto van Robert C Lautman)

## Variabelen Uitleg

### Canvas & Layout Variabelen
- `createCanvas(1300, 1900, WEBGL)` - Creëert een canvas van 1300x1900 pixels in WEBGL modus voor betere prestaties
- `pixelDensity(0.4)` - Stelt de pixel density in op 0.4 voor een zachtere, meer schilderachtige uitstraling
- `translate(-width/2, -height/2)` - Verplaatst de oorsprong naar de linkerbovenhoek van het canvas

### Compositorische Parameters
- `border` - De afstand tussen de rechthoeken en de canvasranden (50-130 pixels willekeurig)
- `offset` - De verticale afstand tussen de bovenste en onderste rechthoek (2-128 pixels willekeurig)
- `bleed` - Bepaalt hoe sterk de kleuren in elkaar overvloeien (0.0008-0.0024 willekeurig)
- `row_size` - De hoogte van de bovenste rechthoek (canvas hoogte ÷ 1.5 tot 4 willekeurig)

### Kleurpaletten
- `palettes` - Array met 7 verschillende kleurcombinaties geïnspireerd op Rothko's werk
- `palette` - Het geselecteerde kleurpalet voor de huidige generatie (willekeurig gekozen)
- `palette[0]` - Achtergrondkleur van het canvas
- `palette[1]` - Kleur van de bovenste rechthoek
- `palette[2]` - Kleur van de onderste rechthoek

## Functies Uitleg

### `setup()`
De hoofdfunctie die wordt uitgevoerd wanneer de applicatie start. Deze functie:

1. **Canvas Setup**: 
   - Creëert een canvas van 1300x1900 pixels in WEBGL modus
   - Stelt pixel density in op 0.4 voor een schilderachtige uitstraling
   - Verplaatst de oorsprong naar de linkerbovenhoek

2. **Parameter Generatie**:
   - Genereert willekeurige waarden voor `border`, `offset`, `bleed`, en `row_size`
   - Selecteert een willekeurig kleurpalet uit de `palettes` array

3. **Brush Configuratie**:
   - Schakelt lijnen uit (`brush.noStroke()`)
   - Schakelt standaard vulling uit (`brush.noFill()`)
   - Schakelt hatch-patronen uit (`brush.noHatch()`)
   - Stelt bleed-waarde in voor zachte kleurovergangen
   - Voegt textuur toe aan de vulling

4. **Tekening**:
   - Stelt de achtergrondkleur in
   - Tekent de bovenste rechthoek (twee keer voor intensiteit)
   - Tekent de onderste rechthoek (twee keer voor intensiteit)
   - Herberekent kleurmengingen met `brush.reBlend()`

### Brush Instellingen Functies

#### `brush.noStroke()`
Verwijdert de randlijnen van de rechthoeken voor een gladder uiterlijk.

#### `brush.noFill()`
Schakelt de standaard vulling uit, zodat alleen expliciet ingestelde kleuren worden gebruikt.

#### `brush.noHatch()`
Schakelt hatch-patronen uit voor een glad oppervlak zonder textuurpatronen.

#### `brush.bleed(bleed, "out")`
Past de bleed-waarde toe voor zachte kleurovergangen:
- `bleed`: De intensiteit van de kleurovergang (0.0008-0.0024)
- `"out"`: Richting van de overgang (naar buiten toe vervagen)

#### `brush.fillTexture(0.4, 1)`
Voegt textuur toe aan de vulling:
- Eerste parameter (0.4): Textuur intensiteit
- Tweede parameter (1): Textuur schaal

#### `brush.fill(kleur, transparantie)`
Stelt de vullingskleur en transparantie in:
- `kleur`: Hex-kleur uit het geselecteerde palet
- `transparantie`: 110 voor subtiele doorzichtigheid

#### `brush.rect(x, y, breedte, hoogte)`
Tekent rechthoeken met de ingestelde brush eigenschappen:
- Elke rechthoek wordt twee keer getekend voor een intensere kleur
- Posities worden berekend op basis van `border` en `offset` parameters

#### `brush.reBlend()`
Herberekent de kleurmengingen - vereist vanwege buffering in de p5.brush bibliotheek.

## Technische Details

### WEBGL Render Modus
Het project gebruikt WEBGL in plaats van de standaard 2D renderer omdat:
- Betere prestaties voor complexe brush operaties
- Ondersteuning voor geavanceerde textuur effecten
- Soepelere kleurovergangen en blending

### Pixel Density
De pixel density is ingesteld op 0.4 om:
- Een zachtere, meer schilderachtige uitstraling te creëren
- De digitale scherpte te verminderen
- Een meer organisch gevoel te geven aan de compositie

### Kleurpaletten
Het project gebruikt 7 zorgvuldig geselecteerde kleurcombinaties die geïnspireerd zijn op Rothko's werk:
- Warme aardetinten gecombineerd met felle accenten
- Contrast tussen donkere en lichte tonen
- Emotioneel impactvolle kleurcombinaties

### Brush Effecten
De p5.brush bibliotheek wordt gebruikt voor:
- Zachte kleurovergangen tussen vlakken
- Textuur toevoeging voor authenticiteit
- Schilderachtige effecten die digitale kunst meer organisch maken

## Gebruik

1. Open `index.html` in een webbrowser
2. De applicatie genereert automatisch een nieuwe Rothko-geïnspireerde compositie
3. Ververs de pagina voor een nieuwe compositie met andere kleuren en afmetingen
4. Pas de parameters aan in de `setup()` functie voor verschillende composities

## Aanpassingen

De belangrijkste parameters kunnen eenvoudig worden aangepast in de `setup()` functie:
- Wijzig de `random()` bereiken voor verschillende composities
- Voeg nieuwe kleurpaletten toe aan de `palettes` array
- Pas canvas afmetingen aan voor verschillende formaten
- Experimenteer met verschillende `bleed` en `offset` waarden


## Inspiratie

Dit project is geïnspireerd op Mark Rothko's Color Field schilderijen, waarbij grote kleurvlakken worden gebruikt om emotionele reacties op te wekken. Door de willekeurige generatie zijn deze gegenereerde schilderijen niet langer onderdeel van het emotionele onderzoek waar Rothko geïnteresseerd in was, maar zijn het slechts visuele reproducties. Dit project is onderdeel van een [bredere serie digitale reproducties](https://github.com/search?q=owner%3AJeffreyArts+p5&type=repositories), gemaakt met behulp van P5.js.
