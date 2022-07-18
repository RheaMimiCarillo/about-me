'use strict';

let theirName = prompt('Hello there, stranger! What can we call you?');
if(theirName.length > 0)
{
  alert('That just rolls off the tongue, now doesn\'t it?');
}
else
{
  alert('My my, how mysterious~. Hmm, I\'ll call you... Stranger.');
  theirName = 'Stranger'; // default name, if the user leaves the prompt blank
}

//TO DO: make gameScoring function
// track number of questions asked in the game
let gameQuestionsCounter = 0;
// track number of questions answered correctly
let score = 0;

function myNameFunction()
{
  let myNameAnswered = false;
  while (!myNameAnswered) // while loop to force the user to enter a yes/no input
  {
    let myName = prompt('Is my first name Reeya? (you must answer :]) y/n?').toLowerCase();

    if (myName === 'y' || myName === 'yes')
    {
      alert('Uhhhh not quite. My name is Rhea.');
      myNameAnswered = true;
    }

    else if (myName === 'n' || myName === 'no')
    {
      alert('Correct! My name isn\'t \'Reeya\', it\'s  R. H. E. A.  Rhea (ray-ah); same as the Mother of the Gods in the Greek Pantheon.');
      score++;
      myNameAnswered = true;
    }

    else
    {
      alert('Oh no ya don\'t ,' + theirName + '! Please answer with a \'yes\' or a \'no\' and I\'ll forgive you c:.');
    }
  }
}

function birthplaceFunction()
{
  let birthplace = prompt('Was I born on a ship in the Caspian Sea? y/n?').toLowerCase();
  if (birthplace === 'y' || birthplace === 'yes')
  {
    alert('Woahhh! Gnarly, friend! I was born on land and not at sea.');
  }
  else if (birthplace === 'n' || birthplace === 'no')
  {
    alert('You too? We have so much in common ' + theirName + '.');
    score++;
  }
  else
  {
    alert('Didn\'t like the question?');
  }
}

function orangeSodaFunction()
{
  let orangeSoda = prompt('Am I in love with orange soda? y/n?').toLowerCase();
  if(orangeSoda === 'y' || orangeSoda === 'yes')
  {
    alert('Do you know who else loves orange soda? Kel. Kel loves orange soda! He do, he do, he doo~uu. Me? Not so much.');
  }
  else if (orangeSoda === 'n' || orangeSoda === 'no')
  {
    alert('Ye. I have a neutral amount of love for orange soda. Not like that Kel guy.');
    score++;
  }
  else
  {
    alert('Not much of a citrus fan, are we?');
  }
}


function muffinManFunction()
{
  let muffinMan = prompt('Do I know the muffin man? y/n?').toLowerCase();
  if (muffinMan === 'y' || muffinMan === 'yes')
  {
    alert('Don\'t I? He lives on Drury Lane. I know him from waaaay back to nursury school. I\'ll introduce you next time.');
    score++;
  }
  else if (muffinMan === 'n' || muffinMan === 'no')
  {
    alert('The muffin man? Never met the guy.');
  }
  else
  {
  // TO DO: add flavor text
  // TO DO: look at else alerts 1-5
    alert(muffinMan + '??');
  }
}


function hotdogFunction()
{
  let hotdog = prompt('Is a hotdog a sandwich? y/n?').toLowerCase();

  if (hotdog === 'y' || hotdog === 'yes')
  {
    alert('You\'re right! And in my eyes, a hamburger is, as well.');
    score++;
  }
  else if (hotdog === 'n' || hotdog === 'no')
  {
    alert('C\'mon ' + theirName + '! You\'re better than this! J.k. I respect our differences :3.');
  }
  else
  {
    alert('No comment?');
  }
}


function ageGuessFunction()
{
  let remainingAgeGuesses = 4;
  let myAge = 30;
  while(remainingAgeGuesses > 0)
  {
    let ageGuess = parseInt(prompt(`How many years wise am I? You have ${remainingAgeGuesses} lives remaining. Choose wisely.`));
    remainingAgeGuesses--; // decrement remaining guesses

    if (ageGuess === myAge) // if the user's guess is the same as my age
    {
      // alerts the user that they guessed correctly, then break out of the loop
      alert(`I am ${myAge} years wise! How'd ya figure?`);
      score++;
      break;
    }

    else if (ageGuess > myAge) // if their guess is higher than my age
    {
    // alerts the user they guessed too high
      alert('Uhhh, do I seem that old?');
    }

    else if (ageGuess < myAge && ageGuess > 0) // if their guess is lower than my age
    {
    // alerts the user they guessed too low
      alert('Aww, are you trying to flatter me with that lowball guess?');
    }

    else // any other input that isn't a number
    {
    // alerts the user that they need to input a number
      alert('*boop boooop*. Invalid answer. Please enter a whole number value.');
    }
  }
  if (remainingAgeGuesses === 0) // if they run out out guesses
  {
    alert(`JSYK, I turned ${myAge} years old in 2022.`);
  }
}


function chipGuessFunction()
{
  // an array of chips that I like
  let chipsILike = ['Kettle Chips', 'Tim\'s Cascade Chips', 'Chocolate Chips', 'Chip \'n\' Dale: Rescue Rangers', 'Chip Skylark', 'Hospital Ice Chips', 'Chips Ahoy!', 'Fish \'n Chips', 'Chip Butty', 'Kale Chips', 'Not Pringle\'s', 'Potato Chips'];

  // boolean flag used in while loop condition
  let theyGotItRight = false;

  // # of guesses remaining
  let chipsGuessesRemaining = 6;

  // while the user hasn't gotten an answer right, or they have more than 0 attempts remaining
  while (!theyGotItRight && chipsGuessesRemaining > 0)
  {
    // asks them to guess what kind of chips I like and makes their input lowercase
    let chipsGuess = prompt(`What kinds of of 'chip' do I like? Chip lives remaining: ${chipsGuessesRemaining}.`).toLowerCase();
    chipsGuessesRemaining --;
    for(let i = 0; i < chipsILike.length; i++)
    {
      if (chipsGuess === chipsILike[i].toLowerCase())
      {
        alert('Wow ' + theirName + '! ' + `${chipsGuess}?? Ya got me. You must know your chips, huh?`);
        score++;
        theyGotItRight = true;
      }
    }

    // todo: maybe find a way to rewrite my logic, so that I don't have to have this additional if() statement
    // this if() will only run the user runs out of tries and the theyGotItRight flag is still false
    if (!theyGotItRight)
    {
      alert('Uh oh, SpaghettiOs! Can we try something different?');
    }
  }

  // alerts the user to every item in the chip array in one giant alert
  alert('Thanks for playing! For reference, here\'s a list of some chips I like:');
  let chipsString = '';
  for (let i = 0; i < chipsILike.length; i++)
  {
    chipsString += `${chipsILike[i]} \n`;
    alert(chipsString);
  }
}

// function for calling questions functions to run the game
function playGame()
{
  alert('Let\'s play a guessing game ' + theirName + '.' + ' I, Rhea, will give you a score at the end.');

  myNameFunction();
  gameQuestionsCounter++;
  // todo: make function to keep count of total questions asked and their score (probably in an array)
  // -- possibly make the score function take in a flag for whether the user answered correctly

  birthplaceFunction();
  gameQuestionsCounter++;

  orangeSodaFunction();
  gameQuestionsCounter++;

  muffinManFunction();
  gameQuestionsCounter++;

  hotdogFunction();
  gameQuestionsCounter++;

  ageGuessFunction();
  gameQuestionsCounter++;

  chipGuessFunction();
  gameQuestionsCounter++;

  alert('Thanks for playing til the end ' + theirName + '! ' + `Your score was: ${score}/${gameQuestionsCounter}`);
}

playGame();
