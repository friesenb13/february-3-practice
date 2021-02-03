var jokes = [
    "Why was the cat sitting on the computer?",
    "To keep an eye on the mouse!",
    "Why don't cats play poker in the jungle?",
    "There are too many cheetahs!",
    "Why was the cat so agitated?",
    "He was in a bad mewd!"
    ]
console.log(jokes.length)

var $joke = $(".joke")
var x = 0;
var party = true;


$joke.text(jokes[0])

$joke.on("click", function(){
    x++;
    
    if (x == jokes.length){
        x = 0
    }
    
    if (party){
        $("body").css("background", "lightgreen")
        generateEmojis()
    } else{
        $("body").css("background", "lightpink")
    }
     party = !party;
    
    console.log(party)
    console.log(x)
    $(this).text(jokes[x])
})

//Code for emoji from https://codepen.io/gwenduling/pen/gOLbajG

var emoji = ['🐣', 'haha!', '🏝', '💛', '👸🏽', '🤣', '🦑'];
var totalEmojiCount = 200;

var continueDraw = false;
var context;
var canvasWidth;
var canvasHeight;
var emojies = [];

//var button = document.getElementById('button');
//button.disabled = true;

function initializeCanvas() {
  var canvas = document.getElementById('canvas');
  context = canvas.getContext( '2d' );
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.scale(2, 2);
  
  generateCanvasSize(canvas);
//  generateEmojis();
}

function generateCanvasSize(canvas) {
  var coord = canvas.getBoundingClientRect();
  canvasWidth = coord.width;
  canvasHeight = coord.height;
}

function generateEmojis() {
  if (continueDraw === true) return;
  emojies = [];
//  button.disabled = true;
  
  for (var iterate = 0; iterate < totalEmojiCount; iterate++) {
    var x = Math.floor(Math.random() * canvasWidth);
    var offsetY = Math.abs(Math.floor(Math.random() * 300));
    var fontSize = Math.floor(Math.random() * 70);

    emojies.push({
      emoji: emoji[Math.floor(Math.random() * emoji.length)],
      x,
      y: canvasHeight + offsetY,
      count: Math.floor(Math.random() * 3) + 4,
      fontSize,
    });

    if (iterate === (totalEmojiCount - 1)) {
      continueDraw = true;
      drawConfetti();
      endDraw();
    }
  }
}

function drawConfetti() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  emojies.forEach((emoji) => {
    drawEmoji(emoji);
    emoji.y = emoji.y - emoji.count;
  });

  if (this.continueDraw) {
    requestAnimationFrame(this.drawConfetti.bind(this));
  }
}

function drawEmoji(emoji) {
  context.beginPath();
  context.font = emoji.fontSize + 'px serif';
  context.fillText(emoji.emoji, emoji.x, emoji.y);
}

function endDraw() {
  setTimeout(() => {
    continueDraw = false;
//    button.disabled = false;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
  }, 5000);
}

initializeCanvas();
