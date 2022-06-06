//Problem: given 4 digits, return the lowest sum of possible split nubmers (using every digit of the origin number)

//IDENTIFY GIVEN/ASKING
  //given a 4 digit number
  //asking lowest sum
var minimumSum = function(num) {
  // var minSum = num
  // //create an array that splits the digits
  var numstring = '' + num
  //or num.toString()
  var numbersArray = numstring.split('')
  numbersArray.sort((a,b) => a-b)
  // var numberPairsArray = [
  //   //1 and 3
  //     //first number num1, 
  //   [numbersArray[0],numbersArray[1]+numbersArray[2]+numbersArray[3]],
  //   [numbersArray[0],numbersArray[1]+numbersArray[3]+numbersArray[2]],
  //   [numbersArray[0],numbersArray[2]+numbersArray[1]+numbersArray[3]],
  //   [numbersArray[0],numbersArray[2]+numbersArray[3]+numbersArray[1]],
  //   [numbersArray[0],numbersArray[3]+numbersArray[1]+numbersArray[2]],
  //   [numbersArray[0],numbersArray[3]+numbersArray[2]+numbersArray[1]],
  //     //second number num1
  //   [numbersArray[1],numbersArray[0]+numbersArray[2]+numbersArray[3]],
  //   [numbersArray[1],numbersArray[0]+numbersArray[3]+numbersArray[2]],
  //   [numbersArray[1],numbersArray[2]+numbersArray[0]+numbersArray[3]],
  //   [numbersArray[1],numbersArray[2]+numbersArray[3]+numbersArray[0]],
  //   [numbersArray[1],numbersArray[3]+numbersArray[0]+numbersArray[2]],
  //   [numbersArray[1],numbersArray[3]+numbersArray[2]+numbersArray[0]],

  //     //third number ad num 1
  //   [numbersArray[2],numbersArray[1]+numbersArray[0]+numbersArray[3]],
  //   [numbersArray[2],numbersArray[1]+numbersArray[3]+numbersArray[0]],
  //   [numbersArray[2],numbersArray[0]+numbersArray[1]+numbersArray[3]],
  //   [numbersArray[2],numbersArray[0]+numbersArray[3]+numbersArray[1]],
  //   [numbersArray[2],numbersArray[3]+numbersArray[1]+numbersArray[0]],
  //   [numbersArray[2],numbersArray[3]+numbersArray[0]+numbersArray[1]],

  //   //fourth number as num1
  //   [numbersArray[3],numbersArray[1]+numbersArray[2]+numbersArray[0]],
  //   [numbersArray[3],numbersArray[1]+numbersArray[0]+numbersArray[2]],
  //   [numbersArray[3],numbersArray[2]+numbersArray[1]+numbersArray[0]],
  //   [numbersArray[3],numbersArray[2]+numbersArray[0]+numbersArray[1]],
  //   [numbersArray[3],numbersArray[0]+numbersArray[1]+numbersArray[2]],
  //   [numbersArray[3],numbersArray[0]+numbersArray[2]+numbersArray[1]],
  
  //   //2 and 2
  //   [numbersArray[0]+numbersArray[1],numbersArray[2]+numbersArray[3]],
  //   [numbersArray[0]+numbersArray[1],numbersArray[3]+numbersArray[2]],
  //   [numbersArray[1]+numbersArray[0],numbersArray[3]+numbersArray[2]],
  //   [numbersArray[1]+numbersArray[0],numbersArray[2]+numbersArray[3]],

    
  //   [numbersArray[0]+numbersArray[2],numbersArray[1]+numbersArray[3]],
  //   [numbersArray[0]+numbersArray[2],numbersArray[3]+numbersArray[1]],
  //   [numbersArray[2]+numbersArray[0],numbersArray[3]+numbersArray[1]],
  //   [numbersArray[2]+numbersArray[0],numbersArray[1]+numbersArray[3]],

  //   [numbersArray[0]+numbersArray[3],numbersArray[1]+numbersArray[2]],
  //   [numbersArray[0]+numbersArray[3],numbersArray[2]+numbersArray[1]],
  //   [numbersArray[3]+numbersArray[0],numbersArray[2]+numbersArray[1]],
  //   [numbersArray[3]+numbersArray[0],numbersArray[2]+numbersArray[1]]

  // ]

  // for (var i = 0; i < numberPairsArray.length; i++){
  //   var pairSum = parseInt(numberPairsArray[i][0]) + parseInt(numberPairsArray[i][1]);
  //   if(pairSum < minSum){
  //     minSum = pairSum
  //   }
  // }
  // //create another array or object that contains every possible number pair
  //     //is it a hint that every number will be 4 digits? 
  //     //repeats are fine if they are counted twice
  
  
  // //iterate through the object and add all the pairs
  
  // //the smallest pair sums is the winner
  // return minSum
  /*if you sort the split array first, from lowest to biggest, the first and the last number plust the middle two numbers (in sequential order) will ALWAYS be the smallest. 
  lesson learned: always strategize for a bit longer before coding*/

  return Number(numbersArray[0]+numbersArray[3]) + parseInt(numbersArray[1]+numbersArray[2])
};

//test cases
console.log(minimumSum(1234))


// TESTING
function assertEqual(actual, expected, testName){
  console.log(actual === expected ? 'passed' : 'Failed ' + testName + '. Expected ' + expected + ', but got ' + actual + '.')
}

//Example Data
var num1 = 1234

// RUN WHEN TESTING
    // assertEqual()