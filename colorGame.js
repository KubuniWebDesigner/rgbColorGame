//set a var with the num of squares generated in the beginning of the game
var numSquares = 6;

//create an array of 6 random colors with a function
var colors = generateRandomColors(numSquares);

//select .square class
var squares = document.querySelectorAll(".square");
//select the choosen color
var pickedColor = pickColor();
//select the span with id colorDisplay
var colorDisplay = document.querySelector("#colorDisplay");
//select the span with id message
var displayMessage = document.querySelector("#message");
//select page title. h1 element with id title 
var titleDisplay = document.querySelector("#title");
//select the button with id reset
var resetButton = document.querySelector("#reset");
//select EASY and HARD buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//add and remove selected class to easy and hard button button
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	//generate 3 random colors
	colors = generateRandomColors(numSquares);
	//set picked color
	pickedColor = pickColor();
	//change display text
	colorDisplay.textContent = pickedColor;
	//loop through squares....
	for (var i = 0; i < squares.length; i++) {
		//if ....colors changes
		if(colors[i]) {
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	//set picked color
	pickedColor = pickColor();
	//change display text
	colorDisplay.textContent = pickedColor;
	//loop through squares....
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i]
		squares[i].style.display = "block";
	}
});

//change the colorDisplay text with the pickedColor
resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	displayMessage.textContent = "";
	//change colors of squares
	for (var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "NEW COLORS";
	titleDisplay.style.backgroundColor = "steelblue";

});

//display the rgb value of the picked color
colorDisplay.textContent = pickedColor;
	
//loop through the squares and assign a color from the array colors
for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab the clicked color
		var clickedColor = this.style.backgroundColor;

		//compare the clickedColor with pickedColor;
		if (clickedColor === pickedColor) {
			//display correct on id message span
			displayMessage.textContent = "CORRECT!";
			//change the text of reset button and ask to play again
			resetButton.textContent = "PLAY AGAIN!"
			//call the changeColors function and assign it an argument equal to pickedColor!
			changeColors(clickedColor);
		} else {
			//if you are wrong the square background will be equal to the body background so to "erase" the wrong clicked square;
			this.style.backgroundColor = "#232323";
			//display try again on id message span
			displayMessage.textContent = "TRY AGAIN!";

		}
	});

}


//create a function to change all the background colors of squares with the correct color
function changeColors(color) {
	//loop trough all squares
	for (var i=0; i<squares.length; i++) {
		//assign the argument color to all the squares and on page title background....argument is set equal to pickedColor
		squares[i].style.backgroundColor = color; 
		titleDisplay.style.backgroundColor = color;
	}

}
//define a function to pick up a random color from the colors array we set in the beginning
function pickColor(){
	//generate a random number
	var random = Math.floor(Math.random() * colors.length);
	//return a random color from colors array with index random number
	return colors[random];
}

//define a function to generate an array of num (argument with a value to be defined later. Our is 6) random colors (rgb)
function generateRandomColors(num) {
	//empty array to be filled...
	var arr = [];
	//loop through the num value (our is 6)
	for (var i = 0; i < num; i++) {
		//push colors generated with the randomColor function in the empty array. It will return 6 random colors in the array
		arr.push(randomColor());	
	}
	//return the array with the 6 colors generated
	return arr;
}

//define a function to generate a random rgb color
function randomColor() {
	//random r value from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//random g value from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//random b value from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//return a randomized rgb value (a rgb color)
	return "rgb("+r+", "+g+", "+b+")";
}

