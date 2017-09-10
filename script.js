// Psychic Game version 1.0; September 6, 2017
// Author: David Rohnow
// Homework Assignment #3 



	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]; 


	var rLetter = letters[Math.floor(Math.random() * 10)];

	//var rLetter = "d"
	var guessRemain = 10;
	var myWINS = 0;
	var myLOSES = 0;
	var gSoFarArray = [];


	//document.getElementById("demo").innerHTML = "Not correct; try again!";
	

	function checkGuessF() {
		var uLetter = document.getElementById("gHere").value;
		var output = document.getElementById("output");
		
		

		//alert("rLetter is: " + rLetter);
		//alert("uLetter is: " + uLetter);
		
		//for (i = 0; i < 9; i++) Z {
			if (rLetter == uLetter) {
				output.value = "You Win!";
				recordWinsF();

				//break;
			} else {

				output.value = "Nice Try, Guess Again.";
				guessesSoFarF();
				document.getElementById("gHere").value = "";
				gRemainingF();
				recordLosesF();
			}
	}


	function playAgainF() {
    	document.getElementById("gHere").value = "";
    	document.getElementById("gRemaining").value = "10";
    	guessRemain = 10
    	rLetter = letters[Math.floor(Math.random() * 10)];
    	document.getElementById("guess").disabled = false;
    	gSoFar.value = "";
    	output.value = "Ready, Set, Go!";


	}


	function gRemainingF() {
		guessRemain = -- guessRemain;
		document.getElementById("gRemaining").value = guessRemain;
	}


	function recordWinsF() {
				myWINS = ++ myWINS
				document.getElementById("gWins").value = myWINS
		}


	function recordLosesF() {
				if (guessRemain == 0) {
					myLOSES = ++ myLOSES;
					document.getElementById("gLoses").value = myLOSES;
					output.value = "You Lost!   The Letter was: " + rLetter;
					document.getElementById("guess").disabled = true;
				} 
		}


	function guessesSoFarF() {
		var gSoFarV = document.getElementById("gSoFar").value;
		var gHereV = document.getElementById("gHere").value;
		gSoFarArray.push(gHereV);
		gSoFar.value = gSoFarArray;
	}





		








