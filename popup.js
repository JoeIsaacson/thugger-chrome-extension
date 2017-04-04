// Copyright who cares 2017

var lyricsArray = [
  "I want the M's and I'm not talking Micky D's, My jewelry gold like the tokens at Chuck E. Cheese",
  "Got spikes on my louboutins, my diamonds they hittin they fight like hadouken-",
  "HNibaliba liedida beginna dis olabegiiiiiniiing!",
  "I got hundreds sittin' on hundreds, that blue cheese, Im not ranchin'",
];

window.onload = init;

var maxLength = lyricsArray.length;
console.log(maxLength);

// Generate a randmon number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomInt = Math.floor(Math.random() * (max - min)) + min;
  //console.log(randomInt);
  return randomInt;
}

// Place the text inside the box
function returnQuote() {
  // Generate the number
  var randomNumber = getRandomInt(0, maxLength);
  // Get the random quote
  var quote = lyricsArray[randomNumber];
  // Set the text box
  var boxName = document.getElementById('mainBox');
  boxName.innerHTML = quote;
};

function init(){
  // And now inhect your
  returnQuote();
};
