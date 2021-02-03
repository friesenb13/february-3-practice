console.log("connected");

var $joke1 = $("#joke1");
var $answer1 = $("#answer1");
var $joke2 = $("#joke2");
var $answer2 = $("#answer2");
var $joke3 = $("#joke3");
var $answer3 = $("#answer3");
var $next = $("#next");
var $next2 = $("#next2");
var $next3 = $("#next3");


$joke1.on("click", function(){
    console.log("click")
    $answer1.fadeIn();
    $("body").css("background-color", "#B5E2FA");
    $next.css("display", "inline-block");
})

$next.on("click", function(){
    $joke1.hide();
    $answer1.hide();
    $joke2.show();
    $next.hide();
})

$joke2.on("click", function(){
    console.log("click")
    $answer2.fadeIn();
    $("body").css("background-color", "#c4eed9");
    $("#next2").css("display", "inline-block");
})


$next2.on("click", function(){
    $joke2.hide();
    $answer2.hide();
    $joke3.show();
    $next2.hide();
    
})

$joke3.on("click", function(){
    console.log("click")
    $answer3.fadeIn();
    $("body").css("background-color", "#ffeeb3");
    $next3.css("display", "inline-block");
})

$next3.on("click", function(){
    $joke3.hide();
    $answer3.hide();
    $joke1.show();
    $next3.hide();
    $("body").css("background-color", "#ffc4d3");
})
