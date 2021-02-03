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

$joke.text(jokes[0])

$joke.on("click", function(){
    x++;
    
    if (x == jokes.length){
        x = 0
    }
    console.log(x)
    $(this).text(jokes[x])
})
