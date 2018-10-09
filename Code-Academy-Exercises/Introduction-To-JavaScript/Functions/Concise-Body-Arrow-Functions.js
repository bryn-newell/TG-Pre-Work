const plantNeedsWater = day =>
 day === 'Wednesday' ? true : false;
 
There are also several ways to refactor arrow function syntax, the most condensed form of which is called
concise body. Functions that take only a single paramter do not need to be enclosed in parentheses, but
zero or multiple parameters do. A function body with only a single-line block does not need to be
enclosed in curly braces and without the braces whatever the line evalutes will automatically be returned.
Implicit return is acting and the return keyword can be removed.
