$(document).ready(function() {
var randomResult;
var counter=0;
var loss=0
var win=0

//Random number for the target score
randomResult=Math.floor(Math.random()*102)+19;
console.log(randomResult);
$("#target-score").html(randomResult);

//Random number for each element
var earthElement = Math.floor(Math.random()*12)+1
var waterElement = Math.floor(Math.random()*12)+1
var windElement = Math.floor(Math.random()*12)+1
var fireElement = Math.floor(Math.random()*12)+1

//start or restart
function startGame(){
    counter = 0;
    randomResult=Math.floor(Math.random()*102)+19;
    $("#target-score").html(randomResult);
    $("#your-score").html(counter)
    earthElement = Math.floor(Math.random()*12)+1
    waterElement = Math.floor(Math.random()*12)+1
    windElement = Math.floor(Math.random()*12)+1
    fireElement = Math.floor(Math.random()*12)+1

}


$(".earth-box").on("click", function(){
    counter += earthElement;
    $("#your-score").html(counter)
    winLoss ()

})
$(".water-box").on("click", function(){
    counter += waterElement;
    $("#your-score").html(counter);
    winLoss ()
})

$(".wind-box").on("click", function(){
    counter += windElement;
    $("#your-score").html(counter)
    winLoss ()

})

$(".fire-box").on("click", function(){
    counter += fireElement;
    $("#your-score").html(counter)
    winLoss ()

})
//win or loss function
function winLoss (){
    if(counter===randomResult){
        win++;
        alert("You Saved the Earth...You won!! "+counter)
        $("#wins").html(win)
        //restart the game
        startGame()
    }
    if(counter > randomResult){
        loss++;
        $("#losses").html(loss)
        startGame()
}
}
startGame()
})
