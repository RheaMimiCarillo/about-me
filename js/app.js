'use strict';

// single quotes for JS; double quotes for HTML
console.log('henlo world :3');


// TODO: add scoreCounter and set it to 0;
// TODO: increment score counter whenever the user guesses correctly
let theirName = prompt('Hello there, stranger! What can we call you?');

if(theirName.length > 0)
{
  // console.log('That just rolls off the tongue, now doesn\'t it?');
  alert('That just rolls off the tongue, now doesn\'t it?');
}
else
{
  // console.log('My my, how mysterious~. Hmm, I\'ll call you...Stranger.');
  alert('My my, how mysterious~. Hmm, I\'ll call you...Stranger.');
  theirName = 'Stranger';
}

alert(`Let's play a guessing game ${theirName}.`);

// number of quesitons asked in the game
let gameQuestionsCounter = 0;
// number of questions answered correctly
let score = 0;

let myNameAnswered = false;
while (!myNameAnswered) // while loop to force the user to enter a yes/no input
{
  //toLowerCase() will transform the string to all lowercase
  let myName = prompt('Is my first name Reeya? y/n?').toLowerCase();

  if (myName === 'y' || myName === 'yes')
  {
    // console.log('Nice guess! My name is: Rhea (ray-ah).');
    alert('Oh, so you\'ve heard of me? I do be Rhea (ray-ah).');
    myNameAnswered = true;
    score++;
  }

  else if (myName === 'n' || myName === 'no')
  {
    // console.log('Correct! My name isn\'t \'Reeya\', it\'s  R H E A  Rhea (ray-ah); same as the mythical Greek Mother of the Gods.');
    alert('Correct! My name isn\'t \'Reeya\', it\'s  R. H. E. A.  Rhea (ray-ah); same as the Mother of the Gods in the Greek Pantheon.');
    myNameAnswered = true;
  }

  else
  {
    // console.log('Oh no ya don\'t ,' + theirName + '! Please answer with a \'yes\' or a \'no\' and I\'ll forgive you c:.');
    alert('Oh no ya don\'t ,' + theirName + '! Please answer with a \'yes\' or a \'no\' and I\'ll forgive you c:.');
  }
}
gameQuestionsCounter++;


let birthplace = prompt('Was I born on a ship in the Caspian Sea? y/n?').toLowerCase();
if (birthplace === 'y' || birthplace === 'yes')
{
  // console.log('Woahhh! Nautical, my friendo! I, for one, was born on land.');
  alert('Woahhh! Gnarly, friend! I was born on land and not at sea.');
}
else if (birthplace === 'n' || birthplace === 'no')
{
  // console.log('You too? We have so much in common ' + theirName + '.');
  alert('You too? We have so much in common ' + theirName + '.');
  score++;
}
else
{
  // console.log('Didn\'t like the question?');
  alert('Didn\'t like the question?');
}
gameQuestionsCounter++;


let orangeSoda = prompt('Am I in love with orange soda? y/n?').toLowerCase();
if(orangeSoda === 'y' || orangeSoda === 'yes')
{
  // console.log('Do you know who else loves orange soda? Kel. Kel loves orange soda! He do, he do, he doo~uu. Me? Not so much.');
  alert('Do you know who else loves orange soda? Kel. Kel loves orange soda! He do, he do, he doo~uu. Me? Not so much.');
}
else if (orangeSoda === 'n' || orangeSoda === 'no')
{
  // console.log('Same. I have a neutral amount of love for orange soda. Not like that Kel guy.');
  alert('Same. I have a neutral amount of love for orange soda. Not like that Kel guy.');
  score++;
}
else
{
  // console.log('Not much of a citrus fan, are we?');
  alert('Not much of a citrus fan, are we?');
}
gameQuestionsCounter++;


let muffinMan = prompt('Do I know the muffin man? y/n?').toLowerCase();
if (muffinMan === 'y' || muffinMan === 'yes')
{
  // console.log('You don\'t? He lives on Drury Lane. I know him from waaaay back to nursury school. I\'ll introduce you next time.');
  alert('Don\'t I? He lives on Drury Lane. I know him from waaaay back to nursury school. I\'ll introduce you next time.');
  score++;
}
else if (muffinMan === 'n' || muffinMan === 'no')
{
  // console.log('The muffin man? The muffin man!! Yes I\'m married to the muffin man, didn\'t you know?');
  alert('The muffin man? Never met the guy.');
}
else
{
  // console.log('Not much of a talker, are we?');
  alert('Not much of a talker, are we?');
}
gameQuestionsCounter++;


let hotdog = prompt('Is a hotdog a sandwich? y/n?').toLowerCase();

if (hotdog === 'y' || hotdog === 'yes')
{
  // console.log('You\'re right! And in my eyes, so is a hamburger.');
  alert('You\'re right! And in my eyes, a hamburger is, as well.');
  score++;
}
else if (hotdog === 'n' || hotdog === 'no')
{
  // console.log('C\'mon ' + theirName + '! You\'re better than this! J.k. I respect our differences :3.');
  alert('C\'mon ' + theirName + '! You\'re better than this! J.k. I respect our differences :3.');
}
else
{
  // console.log('No comment.');
  alert('No comment?');
}
gameQuestionsCounter++;

// TODO: 6th question
/*
  - write a question that asks the user to guess a number
  - alert() the user if their guess is too high or too low
  - give the user EXACTLY 4 guesses to get the correct answer
  - after the user is out of guesses, let em know the CORRECT answer
  - We'll have them guess a my age....
*/

// this loop will ask the user to guess my age
let remainingAgeGuesses = 4;
let myAge = 30;
while(remainingAgeGuesses > 0)
{
  let ageGuess = parseInt(prompt(`How many years wise am I? You have ${remainingAgeGuesses} lives remaining. Choose wisely.`));
  // decrement remaining guesses
  remainingAgeGuesses--;
  // if the user's guess is the same as my age
  if (ageGuess === myAge)
  {
    // alerts the user that they guessed correctly, then break out of the loop
    console.log(`user entered '${ageGuess}' and they have ${remainingAgeGuesses} remaining`);
    alert(`I am ${myAge} years wise! How'd ya figure?`);
    console.log('user entered the correct answer');
    score++;
    break;
  }

  // if their guess is higher than my age
  else if (ageGuess > myAge)
  {
    // alerts the user they guessed too high
    console.log(`user entered '${ageGuess}' and they have ${remainingAgeGuesses} remaining`);
    alert('Uhhh, do I seem that old?');
  }

  // if their guess is lower than my age
  else if (ageGuess < myAge && ageGuess > 0)
  {
    // alerts the user they guessed too low
    console.log(`user entered '${ageGuess}' and they have ${remainingAgeGuesses} remaining`);
    alert('Aww, are you trying to flatter me with that lowball guess?');
  }

  // any other input that isn't a number
  else
  {
    // alerts the user that they need to input a number
    console.log(`user entered '${ageGuess}' and they have ${remainingAgeGuesses} remaining`);
    alert('*boop boooop*. Invalid answer. Please enter a whole number value.');
  }
}
gameQuestionsCounter++;

// todo: - add a 7th question
// - the answers to the 7th question will be stored in an array
// - the user will get 6 attempts to guess correctly
// - the guesses will end once the user guesses any items in the array
// - OR it will end when they run out of attempts
// 	- whichever comes first
// - then display all the correct answers (meaning the items in the array) to the user using a for loop

// an array of chips that I like
let chipsILike = ['Kettle Chips', 'Tim\'s Cascade Chips', 'Chocolate Chips', 'Chip \'n\' Dale: Rescue Rangers', 'Chip Skylark', 'Hospital Ice Chips', 'Chips Ahoy!', 'Fish \'n Chips', 'Chip Butty', 'Kale Chips', 'Not Pringle\'s', 'Potato Chips'];

// boolean flag to for while loop condition
let theyGotItRight = false;

// how many chances they have left to guess my chips
let chipsGuessesRemaining = 6;

// while the user hasn't gotten an answer right, or they have more than 0 attempts remaining
while (!theyGotItRight && chipsGuessesRemaining > 0)
{
  // asks them to guess what kind of chips I like and makes their input lowercase
  let chipsGuess = prompt(`What kinds of of 'chip' do I like? Chip lives remaining: ${chipsGuessesRemaining}.`);
  console.log(`The user guessed '${chipsGuess}'`);
  chipsGuessesRemaining --;
  console.log(`the user has '${chipsGuessesRemaining}' guesses remaining`);
  for(let i = 0; i < chipsILike.length; i++)
  {
    console.log('the value of i is: ' + i);
    console.log(`the value of chipsILike[${i}]: is '${chipsILike[i]}'`);
    if (chipsGuess === chipsILike[i].toLowerCase())
    {
      console.log('the user guessed a correct answer');
      alert(`Wow ${theirName}! ${chipsGuess}?? Ya got me. You must know your chips, huh?`);
      score++;
      theyGotItRight = true;
    }
    else
    {
      console.log(`The user's input isn't '${chipsILike[i].toLowerCase()}'.`);
    }
  }
  //todo: make this alert only appear if they get it wrong
  if (!theyGotItRight)
  {
    alert('Uh oh, SpaghettiOs! Can we try something different?');
  }
}
gameQuestionsCounter++;

// alerts the user to every item in the chip array
alert('Thanks for playing! For reference, here\'s a list of some chips I like:');
for (let i = 0; i < chipsILike.length; i++)
{
  alert(chipsILike[i]);
}


// todo: add their score out of how many total questions
// console.log('Thanks for playing along so well, ' + theirName + '!');
console.log(`I counted ${gameQuestionsCounter}s and they scored ${score}`);
alert(`Thanks for playing til the end ${theirName}! Your score was: ${score}/${gameQuestionsCounter}`);
