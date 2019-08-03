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
