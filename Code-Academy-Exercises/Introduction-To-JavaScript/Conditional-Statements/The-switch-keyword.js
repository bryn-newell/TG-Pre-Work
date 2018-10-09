let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place': console.log('You get the gold medal!');
    break;
  case 'second place':console.log('You get the silver medal!');
    break;
  case 'third place':console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

/* A switch statement can provide and alternative syntax that is easier to read and write if there are
multiple conditions. The switch keyword is at the beginning of the statement followed by () which contains
the value each case will compare, usually the name of a variable. Then inside the {} code block are
multiple cases. The case keyword checks if the expression matches the specificed value that comes after
the keyword case. Once the case is true the code following the : will run. Then the break keyword follows,
telling the computer to exit the whole block and not to check any more cases or run code. Unlike the if/else
statments, switch statements behavior is to keep checking conditionals unless a break statement is added.
At the end of the code block there is a default statement to run if none of the cases are true. */
