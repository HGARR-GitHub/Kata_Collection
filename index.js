//Mexican Wave
//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
//You will be passed a string and you must return that string in an array where an uppercase letter
//is a person standing up.

function wave(str){
  let result = []
  let strUp = ""
  for (i=0;i<str.length;i++){
    strUp = str.slice(0,i) + str.slice(i,i+1).toUpperCase() + str.substr(i+1)
    if (str.slice(i,i+1) != " ") result.push(strUp)
  }
  return result  
}

wave("heri") //result ["Heri", "hEri", "heRi", "herI"]
wave(" gap ") //result [" Gap ", " gAp ", " gaP"]

//Integer Array of -1 and 1. (-1 standing for a woman and 1 a man).
//Check if more woman should be invited. 
//Array min length 2 and Max is 50
function inviteMoreWomen(L) {
  //coding and coding..
  const result = L.reduce((acc,curVal)=>acc+curVal)
  return (result > 0 ? true : false)
}

inviteMoreWomen ([-1,1,1,1,-1]) // result True
inviteMoreWomen ([1,1,-1,-1]) // result false


//String Ends With
//Complete the solution so that it returns true if the first argument(string) 
//passed in ends with the 2nd argument (also a string).
function solution(str, ending){
  // TODO: complete
  return (str.substring(str.length-ending.length)==ending)
}

//Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
