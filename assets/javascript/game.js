// create variables
var targetNumber;
var crystalTotal = [];
var minNumber = 19;
var maxNumber = 120;
var firstNumber = [];
var picArray = [];
var sum = 0;
var wins = 0;
var loses = 0;
var randomNumber;




var self = {

    initGame: function() {
        firstNumber = [];
        sum = 0;
        randomNumber = randomNumberFromRange(minNumber, maxNumber);

        function randomNumberFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        console.log(randomNumber);
        $(".rentAmount").html("$ " + randomNumber);
        $(".firstNumber").html(sum);

        self.charPick();
    },
    charPick: function() {
        picArray = ["assets/images/monster1.png", "assets/images/monster2.png", "assets/images/monster3.png", "assets/images/monster4.png",
            "assets/images/monster5.png", "assets/images/monster6.png", "assets/images/monster7.png", "assets/images/monster8.png"
        ];
        var arrayLength = picArray.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log("pick test" + picArray);
        }
    },
    crystalTotal: function() {
        $(".divClass").on("click", function() {
            $("divClass").css({ "background-color": "yellow", "font-size": "200%" })
        });
    },
    crystalPick: function() {
        sum = 0;
        var crystalPick = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            counter = 0;
        $('.divClass').click(function() {
            randomPick = Math.floor(Math.random() * crystalPick.length);
            console.log(randomPick);
            firstNumber.push(randomPick);
            console.log("yeah" + firstNumber);
            sum = firstNumber.reduce((a, b) => a + b, 0);
            console.log(sum);
            $(".firstNumber").html("$ " + sum);
            if (sum === randomNumber) {
                wins++;
                self.initGame();
                console.log("you have" + "" + wins);
                $(".updateWins").html(wins);
            }
            if (sum > randomNumber) {
                loses++;
                self.initGame();
                $(".updateLoses").html(loses);
                $('#charDiv2').attr('src', 'assets/images/monster6.png');
                $('#img1').attr('src', 'assets/images/monster6.png');
                $("#img1").css("width", "145px" );
            }
        });
    },
};

document.addEventListener("DOMContentLoaded", function() {

    self.crystalTotal()
    self.crystalPick()
    self.initGame()
    self.charPick()
})
