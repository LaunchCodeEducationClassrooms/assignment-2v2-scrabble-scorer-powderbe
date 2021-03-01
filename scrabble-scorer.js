// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! ");

   let wordToScore = input.question("Enter a word to score:");

   return wordToScore;
};


function simpleScore(word) {
  	word = word.toUpperCase();
    let points = 0;
    for(i=0; i<word.length; i++){
      points=points+1;
    
    }
    //console.log(points);
    return points;
}
//let simpleScore = " ";

function vowelBonusScore(word) {
  	word = word.toLowerCase();
    let points = 0;
    for(i=0; i<word.length; i++){
      if (word.slice(i, i+1)==='A' || word.slice(i, i+1)==='E'|| word.slice(i, i+1)==='I' || word.slice(i, i+1)==='O' || word.slice(i, i+1)==='U'){
        points = points + 3;
      }
      else {
        points = points + 1;
      }
    }
    //console.log(points);
    return points;
}


//let vowelBonusScore;

//let scrabbleScore;
function scrabbleScore(word){
  word = word.toLowerCase();

  let points = 0;

  for (let i=0; i<word.length; i++){
    points = points + newPointStructure[word.slice(i,i+1)]
  }
  return points;
}


let simpleScores = {
  name: 'Simple:', 
  description:'One point per character',scoringFunction: simpleScore
  
};

let bonusVowels = {
  name: "Vowel Bonus:",
  description:"Vowels are worth 3 points",
  scoringFunction: vowelBonusScore

};

let scrabble = {
  name: "Scrabble:",
  description:"Uses scrabble point system",
  scoringFunction:scrabbleScore

};

const scoringAlgorithms = [simpleScores, bonusVowels,scrabble];

/*const scoringAlgorithms = [{
  name: 'Simple:', 
  description:'One point per character',scoringFunction: simpleScore}, 
  {name: "Vowel Bonus:",
  description:"Vowels are worth 3 points",
  scoringFunction: vowelBonusScore
  },
  {name: "Scrabble:",
  description:"Uses scrabble point system",
  scoringFunction:oldScrabbleScorer}];*/

function scorerPrompt(arr) { 
  console.log("Which scoring algorithm would you like to use?");
  for(i=0; i<arr.length; i++){ 
    console.log(`${i} - ${arr[i].name} : ${arr[i].description}`);
  }

  let scorerPrompt = input.question("Enter 0, 1, or 2:");

  return scorerPrompt;
}




function transform(object) {

  let newObject = {};
  for (var item in object){
    for (i=0; i<object[item].length; i++){
        newObject[(object[item][i].toLowerCase())] = Number(item);
    }
  }
  return newObject;
}


let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let userWord = initialPrompt();
   let prompt = scorerPrompt(scoringAlgorithms);
  prompt = Number(prompt);
  console.log(`Score for '${userWord}': ${scoringAlgorithms[prompt].scoringFunction(userWord)}`);

   //console.log(transform(oldPointStructure));
   //oldScrabbleScorer(userWord);
   //simpleScore(userWord);
   //vowelBonusScore(userWord);
   
  
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

