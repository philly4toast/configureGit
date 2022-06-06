/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/


//input is a string of G/()/(al)
//output is a string of letters, no parenthesis 

  /*PLAN:

    Container string that will be the results
    Divide the given string up by character
      go over each character and convert it (Switch box?) adding it to the container string
      iterating checks each character 1 by 1
        reduce function? ** need to review reduce **

    ISSUES:
    What if the next character is a '(' or a ')', or what if it's an 'l'? 
      Not all of the characters return a letter on a 1:1 ratio 
      
      SolPos: Create conditionals for '(', ')', 'a', and 'l'
        The only one and done is 'G'



*/

var interpret = function(command) {
  var results = ''
  // var breakString = command.split('')
  
  // for (var i = 0; i< breakString.length; i++){
  //   var currentLetter = breakString[i]
  //   var nextLetter = breakString[i+1]
  //   if (currentLetter === 'G'){
  //     results+='G'
  //   }else if (currentLetter === '(' && nextLetter ===')' ){
  //     results+='o'
  //   }else if (currentLetter === '(' && nextLetter ==='a' ){
  //     results+='al'
  //   }else{
  //     continue;
  //   }
  // }
return command.split('()').join('o').split('(al)').join('al')

};

// var strizy = 'this is wack'
// var wizy = strizy.replace(/wack/g, 'awesome')
// console.log(wizy)



//TESTING
function assertEqual(actual, expected, testName) {
  console.log(actual === expected ? 'passed test' : 'Failed ' + testName + '. Expected: ' + expected + ', Actual: ' + actual + '. ')
}



//TEST CASES
  // FIRST TEST
var test1 = 'G()(al)'
var expected1 = 'Goal'
var actual1 = interpret(test1)
assertEqual(actual1, expected1, 'First Test')

  // SECOND  TEST
var test2 = "G()()()()(al)"
var expected2 = "Gooooal"
var actual2 = interpret(test2)
assertEqual(actual2, expected2, 'Second Test')

  // THIRD TEST
var test3 = "(al)G(al)()()G"
var expected3 = "alGalooG"
var actual3 = interpret(test3)
assertEqual(actual3, expected3, 'Third Test')

