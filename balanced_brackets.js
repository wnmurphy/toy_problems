/*
  Balanced Brackets

  Given a string, return true if all parens, curly braces, and square brackets within it are balanced.

  Test cases:
    
    "(x + y) - (4)" true
    "(((10 ) ()) ((?)(:)))" true
    "[{()}]"  true
    "(50)(" false
    "[{]}"  false
*/


function bracketsAreBalanced (str) {
  let balanced = true;
  let matches = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  };
  let brackets = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' ) {
      brackets.push(str[i]);
    }
    if (str[i] === ')' || str[i] === ']' || str[i] === '}' ) {
      if ( brackets.pop(str[i]) !== matches[str[i]] ) {
        balanced = false;
      }
    }
  }
  return brackets.length ? false : balanced;
}
