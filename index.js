var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomDiceImage = "dice" +randomNumber1+ ".png";
var imageSource = "images/" +randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",imageSource);

var randomNumber2 = Math.floor((Math.random()*6))+1
var diceImage = "images/dice" +randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceImage);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 wins 🌝"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🌚"
}
else{
    document.querySelector("h1").innerHTML = "DRAW 🥀"
}
