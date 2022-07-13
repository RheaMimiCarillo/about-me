'use strict';

// single quotes for JS; double quotes for HTML
console.log('henlo world :3');

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

let myNameAnswered = false;
while (!myNameAnswered) // while loop to force the user to enter a yes/no answer
{
  //toLowerCase() will transform the string to all lowercase
  let myName = prompt('Is my first name Reeya? y/n?').toLowerCase();

  if (myName === 'y' || myName === 'yes')
  {
    // console.log('Nice guess! My name is: Rhea (ray-ah).');
    alert('Nice guess! My name is: Rhea (ray-ah).');
    myNameAnswered = true;
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

let birthplace = prompt('Were you born on a ship in the Caspian Sea? y/n?').toLowerCase();

if (birthplace === 'y' || birthplace === 'yes')
{
  // console.log('Woahhh! Nautical, my friendo! I, for one, was born on land.');
  alert('Woahhh! Gnarly, friend! I was born on land');
}
else if (birthplace === 'n' || birthplace === 'no')
{
  // console.log('You too? We have so much in common ' + theirName + '.');
  alert('You too? We have so much in common ' + theirName + '.');
}
else
{
  // console.log('Didn\'t like the question?');
  alert('Didn\'t like the question?');
}

let orangeSoda = prompt('Do you love orange soda, too? y/n?').toLowerCase();

if(orangeSoda === 'y' || orangeSoda === 'yes')
{
  // console.log('Do you know who else loves orange soda? Kel. Kel loves orange soda! He do, he do, he doo~uu. Me? Not so much.');
  alert('Do you know who else loves orange soda? Kel. Kel loves orange soda! He do, he do, he doo~uu. Me? Not so much.');
}
else if (orangeSoda === 'n' || orangeSoda === 'no')
{
  // console.log('Same. I have a neutral amount of love for orange soda. Not like that Kel guy.');
  alert('Same. I have a neutral amount of love for orange soda. Not like that Kel guy.');
}
else
{
  // console.log('Not much of a citrus fan, are we?');
  alert('Not much of a citrus fan, are we?');
}

let muffinMan = prompt('Do you know the muffin man? y/n?').toLowerCase();

if (muffinMan === 'y' || muffinMan === 'yes')
{
  // console.log('The muffin man? The muffin man!! Yes I\'m married to the muffin man, didn\'t you know?');
  alert('The muffin man? The muffin man!! Yes I\'m married to the muffin man, didn\'t you know?');
}
else if (muffinMan === 'n' || muffinMan === 'no')
{
  // console.log('You don\'t? He lives on Drury Lane. I know him from waaaay back to nursury school. I\'ll introduce you next time.');
  alert('You don\'t? He lives on Drury Lane. I know him from waaaay back to nursury school. I\'ll introduce you next time.');
}
else
{
  // console.log('Not much of a talker, are we?');
  alert('Not much of a talker, are we?');
}

let hotdog = prompt('Is a hotdog a sandwich? y/n?').toLowerCase();

if (hotdog === 'y' || hotdog === 'yes')
{
  // console.log('You\'re right! And in my eyes, so is a hamburger.');
  alert('You\'re right! And in my eyes, so is a hamburger.');
}
else if (hotdog === 'n' || hotdog === 'no')
{
  // console.log('C\'mon ' + theirName + '! You\'re better than this! J.k. I respect our differences :3.');
  alert('C\'mon ' + theirName + '! You\'re better than this! J.k. I respect our differences :3.');
}
else
{
  // console.log('No comment.');
  alert('No comment.');
}

// console.log('Thanks for playing along so well, ' + theirName + '!');
alert('Thanks for playing along so well, ' + theirName + '!');
