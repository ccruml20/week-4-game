// create variables
var targetNumber;
var crystalTotal = [];
var blueCrystal = [];
var yellowCrystal = [];
var purpleCrystal = [];
var greenCrystal = [];
var minNumber = 19;
var maxNumber = 120,

// create random number from 19-120

randomNumber = randomNumberFromRange(minNumber, maxNumber);
function randomNumberFromRange(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(randomNumber);







var self = {

	targetNumber: function() {
		$(".rentAmount").html(randomNumber);
	},

	crystalTotal: function(){
      $(".divClass").on("click", function () {
      	alert("yeah it works");
      });
	}
};

    document.addEventListener("DOMContentLoaded", function() {

        self.targetNumber()
        self.crystalTotal()


        // playerGuess = document.getElementById("userGuess");
        // self.updateGuess()

 

    })






// Create a random.math function to choose targetNumber
// assign some random value to crystal sprites
// write function to replace images 

// create an empty array to hold crystal input numbers and parse

