'use strict';

// single quotes for JS; double quotes for HTML
console.log('henlo world :3');

let theirName = prompt('Hello there, stranger! What can we call you?');

if(theirName.length > 0)
{
  console.log('That just rolls off the tongue, now doesn\'t it?');
}
else
{
  console.log('My my, how mysterious~. Hmm, I\'ll call you...Stranger.');
  theirName = 'Stranger';
}

let myNameAnswered = false;
while (!myNameAnswered)
{
  //toLowerCase() will transform the string to all lowercase
  let myName = prompt('Is my first name Reeya? y/n?').toLowerCase();

  if (myName === 'y' || myName === 'yes')
  {
    console.log('Nice guess, but my name is: Rhea (ray-ah)');
    myNameAnswered = true;
  }

  else if (myName === 'n' || myName === 'no')
  {
    console.log('Correct! My name isn\'t \'Reeya\', it\'s R H E A Rhea (ray-ah); same as the mythical Greek Mother of the Gods');
    myNameAnswered = true;
  }

  else
  {
    console.log('Oh no ya don\'t! Please answer with a \'yes\' or a \'no\' and I\'ll forgive you c:.');
  }
}

let birthplace = prompt('Was I born on a ship in the Caspian Sea?').toLowerCase();

// TODO: add in flavor text
if (birthplace === 'y' || birthplace === 'yes')
{
  console.log('');
}
else if (birthplace === 'n' || birthplace === 'no')
{
  console.log('');
}
else
{
  console.log('');
}

// TODO: add that Kel loves orange soda. he do, he do, he dooooo-uuu
let orangeSoda = prompt('Do I love orange soda more than life itself?').toLowerCase();

if(orangeSoda === 'y' || orangeSoda === 'yes')
{
  console.log('');
}
else if (orangeSoda === 'n' || orangeSoda === 'no')
{
  console.log('');
}
else
{
  console.log('');
}

let muffinMan = prompt('Do I know the muffin man?').toLowerCase();

if (muffinMan === 'y' || muffinMan === 'yes')
{
  console.log('');
}
else if (muffinMan === 'n' || muffinMan === 'no')
{
  console.log('');
}
else
{
  console.log('');
}

let hotdog = prompt('Is a hotdog a sandwich to me?').toLowerCase();

if (hotdog === 'y' || hotdog === 'yes')
{
  console.log('');
}
else if (hotdog === 'n' || hotdog === 'no')
{
  console.log('');
}
else
{
  console.log('');
}

console.log('Thanks for playing along so well, ' + theirName + '!');
