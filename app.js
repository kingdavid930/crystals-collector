var number = 0
var matchingNumbers = 0
var totalScore = 0
var winCount = 0
var lossCount = 0




function start (){ 
 matchingNumbers= ranNum (120, 19)
 totalScore= 0
 $("#MatchingNumbers").html(matchingNumbers)
 $("#totalScore").html(totalScore)
 $(".diamond").val(ranNum(12,1))
 $(".crystal").val(ranNum(12,1))
 $(".ruby").val(ranNum(12,1))
 $(".stars").val(ranNum(12,1))
 $("#wins").html('wins: '+winCount)
 $("#losses").html("losses: "+lossCount)
}

function ranNum(max,min){
     return  Math.floor(Math.random()*(max-min+1)) + min;
     
}

$(".diamond").on("click",function(){
    // console.log("diamond")
    var diamondVal=$(".diamond").val()
    $("#message").html("")
    totalScore = totalScore + diamondVal
    $("#totalScore").html(totalScore)
    if (totalScore === matchingNumbers){
        winCount=winCount+1
        start()
        $("#message").html("You Win")
        
    
    }
    else if (totalScore>matchingNumbers) {
        lossCount=lossCount+1
      start() 
      $("#message").html("You Lose Sucka") 
    } 
})
$(".crystal").on("click",function(){
   // console.log("crystal")
   var crystalVal=$(".crystal").val()
   totalScore = totalScore + crystalVal
   $("#totalScore").html(totalScore)
   if (totalScore === matchingNumbers){
        winCount=winCount+1
        start()
        $("#message").html("You Win")
        


   }
   else if (totalScore>matchingNumbers){
       lossCount=lossCount+1
       start()
       $("#message").html("You lose Sucka")
   }
})
$(".ruby").on("click",function(){
   // console.log("ruby")
   var rubyVal=$(".ruby").val()
   totalScore = totalScore + rubyVal
   $("#totalScore").html(totalScore)
   if (totalScore === matchingNumbers){
       winCount=winCount+1
       start()
       $("#message").html("You Win")
   }
   else if (totalScore>matchingNumbers){
       lossCount=lossCount+1
       start()
       $("#message").html("You lose Sucka")
   }
})
$(".stars").on("click",function(){
   // console.log("stars")
   var starsVal=$(".stars").val()
   totalScore = totalScore + starsVal
   $("#totalScore").html(totalScore)
   if (totalScore === matchingNumbers){
       winCount=winCount+1
       start()
       $("#message").html("You Win")
   }
   else if (totalScore>matchingNumbers){
       lossCount=lossCount+1
       start()
       $("#message").html("You lose Sucka")
   }
})

start()
