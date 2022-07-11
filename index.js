var numberOfAnimalButtons = document.querySelectorAll(".btn").length;

for (var x = 0; x < numberOfAnimalButtons; x++) {
    
    document.querySelectorAll(".btn")[x].addEventListener("click", function () { 
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "Bird":
            var birdSound = new Audio("sounds/bird.wav");
            birdSound.play();
            break;

            case "Cat":
            var catSound = new Audio("sounds/cat.wav");
            catSound.play();
            break;

            case "Chicken":
            var chickenSound = new Audio("sounds/chicken.wav");
            chickenSound.play();
            break;

            case "Cow":
            var cowSound = new Audio("sounds/cow.wav");
            cowSound.play();
            break;

            case "Cricket":
            var cricketSound = new Audio("sounds/cricket.wav");
            cricketSound.play();
            break;

            case "Crow":
            var crowSound = new Audio("sounds/crow.wav");
            crowSound.play();
            break;

            case "Dog":
            var dogSound = new Audio("sounds/dog.wav");
            dogSound.play();
            break;
            

            case "Eagle":
            var eagleSound = new Audio("sounds/eagle.wav");
            eagleSound.play();
            break;

            case "Goat":
            var goatSound = new Audio("sounds/goat.wav");
            goatSound.play();
            break;

            case "Goose":
            var gooseSound = new Audio("sounds/goose.wav");
            gooseSound.play();
            break;

            case "Horse":
            var horseSound = new Audio("sounds/horse.wav");
            horseSound.play();
            break;

            case "Hyena":
            var hyenaSound = new Audio("sounds/hyena.wav");
            hyenaSound.play();
            break;

            case "Lion":
            var lionSound = new Audio("sounds/lion.wav");
            lionSound.play();
            break;

            case "Monkey":
            var monkeySound = new Audio("sounds/monkey.wav");
            monkeySound.play();
            break;

            case "Pig":
            var pigSound = new Audio("sounds/pig.wav");
            pigSound.play();
            break;

            case "Sheep":
            var sheepSound = new Audio("sounds/sheep.wav");
            sheepSound.play();
            break;

            case "Wolf":
            var wolfSound = new Audio("sounds/wolf.wav");
            wolfSound.play();
            break;

            default: console.log(buttonInnerHTML);

        }

});
}






