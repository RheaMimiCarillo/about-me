'use strict';

// single quotes for JS; double quotes for HTML
console.log('henlo world :3');


let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase(); // toLowerCase() will transform the string to all lowercase

if (livesInSeattle === 'yes' || livesInSeattle === 'y')
{
  console.log('Yes, I do live in Seattle');
}

else if (livesInSeattle === 'no' || livesInSeattle === 'n')
{
  console.log('Sorry, I do live in Seattle. :^)');
}

else
{
  console.log('Please answer with a \'yes\' or a \'no\'.');
}
