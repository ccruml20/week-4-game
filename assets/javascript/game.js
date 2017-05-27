// create variables
var targetNumber;
var crystalTotal = [];
var blueCrystal = [1, 3,];
var yellowCrystal = [3,7, 12, 19];
var purpleCrystal = [5, 8, 15, 19];
var greenCrystal = [1,6,10,12,18];
var minNumber = 19;
var maxNumber = 120;
var firstNumber = [];


// create random number from 19-120

randomNumber = randomNumberFromRange(minNumber, maxNumber);
function randomNumberFromRange(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomNumber);

var self = {

	initGame: function() {
	
	},

	targetNumber: function() {
		$(".rentAmount").html(randomNumber);
	},

	crystalTotal: function(){
		$(".divClass").on("click", function () {
			// alert("yeah it works");
			$("divClass").css({"background-color": "yellow", "font-size": "200%"})


		});
	},

	crystalPick: function(){
		var crystalPick = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
		counter = 0;
		$('.divClass').click(function () {
			randomPick = Math.floor(Math.random() * crystalPick.length);
			console.log(randomPick);
			firstNumber.push(randomPick); // add 2 more elements to ar
			console.log(firstNumber); // ["one", "two", "three", "four", "five", "six"]
			// randomPick = firstNumber;
			$(".firstNumber").html(randomPick);
			randomPick = parseInt(randomPick);
		});

	},
};

document.addEventListener("DOMContentLoaded", function() {

	self.targetNumber()
	self.crystalTotal()
	self.crystalPick()
	self.initGame()


        // playerGuess = document.getElementById("userGuess");
        // self.updateGuess()



    })






// Create a random.math function to choose targetNumber
// assign some random value to crystal sprites
// write function to replace images 

// create an empty array to hold crystal input numbers and parse

