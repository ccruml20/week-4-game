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
			$("divClass").css({"background-color": "yellow", "font-size": "200%"})
		});
	},
	crystalPick: function(){
		var crystalPick = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
		counter = 0;
		$('.divClass').click(function () {
			randomPick = Math.floor(Math.random() * crystalPick.length);
			console.log(randomPick);
			firstNumber.push(randomPick);
			console.log(firstNumber);
			randomPick = firstNumber;
			var sum = firstNumber.reduce((a, b) => a + b, 0);
			console.log(sum); 
			$(".firstNumber").html(sum);
		});

	},
};

document.addEventListener("DOMContentLoaded", function() {

	self.targetNumber()
	self.crystalTotal()
	self.crystalPick()
	self.initGame()
    })

