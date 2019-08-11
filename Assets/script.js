$(document).ready(function(){
	//Random number at beginning between 19 and 120
	var Random=Math.floor(Math.random()*101+19)
	$('#number').text("Match this: " + Random);

	//Random numbers for crystals between 1 and 12
	var num1=Math.floor(Math.random()*11+1)
	var num2=Math.floor(Math.random()*11+1)
	var num3=Math.floor(Math.random()*11+1)
	var num4=Math.floor(Math.random()*11+1)

	//Score variables
	var userScore=0;
	var wins=0;
	var losses=0;

	$('#wins').text("Wins: " + wins);
	$('#losses').text("Losses: " + losses);

	//crystals
	$('#red').on('click', function(){
		userScore=userScore + num1;
		console.log( + userScore);
		$('#current').text("Current score: " + userScore);
			if(userScore === Random){
				win();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#blue').on('click', function(){
		userScore=userScore + num2;
		console.log( + userScore);
		$('#current').text("Current score: " + userScore);
			if(userScore === Random){
				win();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#yellow').on('click', function(){
		userScore=userScore + num3;
		console.log(userScore);
		$('#current').text("Current score: " + userScore);
			if(userScore === Random){
				win();
			}
			else if(userScore > Random){
				loser();
			}
	})

	$('#green').on('click', function(){
		userScore=userScore + num4;
		console.log(userScore);
		$('#current').text("Current score: " + userScore);
			if(userScore === Random){
				win();
			}
			else if(userScore > Random){
				loser();
			}
	})

	//Function and alert for wins
	function win(){
		alert("You win!");
	 	wins++; 
	  	$('#wins').text("Wins"+ wins);
	  	reset();
	}

	//Function and alert for losses
	function loser(){
		alert("You lose!");
		losses++;
		$('#losses').text("Losses: " + losses);
		reset();
	}

	//Function for game reset
	function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#number').text(Random);
		num1=Math.floor(Math.random()*11+1);
		num2=Math.floor(Math.random()*11+1);
		num3=Math.floor(Math.random()*11+1);
		num4=Math.floor(Math.random()*11+1);
		userScore=0;
		$('#current').text("Current score: " + userScore);
	}

});