'use strict';

var paint = "blue";
var main = document.querySelector('#canvas');
var toolBar = document.querySelector('#toolbar');
var pixelCount = 0;
var drawing = true;

/* Main functions */

//paints pixels
function paintPixel(e) {
  var clickedPixel = e.target;
    if( e.target !== e.currentTarget ){
      if (drawing) {
        clickedPixel.style.borderColor = paint;
        clickedPixel.style.backgroundColor = paint;
      }
    }
  }

// chooses paint color
function colorPick(e) {
  var clickedColor = e.target.style.backgroundColor;
  paint = clickedColor;
  document.querySelector('#currentColor').style.backgroundColor = clickedColor;
}

// creates canvas
function canvasInit() {
  for ( var i = 0; i < 3000; i++) {
    var pixel = document.createElement('div');
    var id = "p" + pixelCount;
    pixel.setAttribute('class', 'pixel');
    pixel.id = id;
    main.appendChild(pixel);
    pixelCount++;
  }
}
canvasInit();

// creates color swatches
function color() {
  var colors = "red,orange,yellow,green,indigo,violet,black";
  var color = colors.split(",");
  for( var i = 0; i < color.length; i++){
    var colorTab = document.createElement('div');
    colorTab.setAttribute('class', 'colorTab');
    colorTab.style.backgroundColor = color[i];
    toolBar.appendChild(colorTab);
  }
}
color();

// adds new rows (5)
function addRow() {
  for ( var i = 0; i < 750; i ++) {
    var pixel = document.createElement('div');
    var id = "p" + pixelCount;
    pixel.setAttribute('class', 'pixel');
    pixel.id = id;
    main.appendChild(pixel);
    pixelCount++;
  }
}

/* main event listeners */

// drawing
main.addEventListener("mousedown", function(e){
  drawing = true;
  paintPixel(e);
  main.addEventListener("mouseover", function(e){
    paintPixel(e);
  });
});
main.addEventListener("mouseup", function(){
  drawing = false;
});

function reset () {
    do {
      main.removeChild(main.firstChild);
    } while (main.hasChildNodes());
    canvasInit();
}

// color picker
toolBar.addEventListener('mousedown', colorPick, true);
