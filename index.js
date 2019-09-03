//KATA: Mexican Wave
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

//KATA: Integer Array of -1 and 1. (-1 standing for a woman and 1 a man).
//Check if more woman should be invited. 
//Array min length 2 and Max is 50
function inviteMoreWomen(L) {
  //coding and coding..
  const result = L.reduce((acc,curVal)=>acc+curVal)
  return (result > 0 ? true : false)
}

inviteMoreWomen ([-1,1,1,1,-1]) // result True
inviteMoreWomen ([1,1,-1,-1]) // result false


//KATA: String Ends With
//Complete the solution so that it returns true if the first argument(string) 
//passed in ends with the 2nd argument (also a string).
function solution(str, ending){
  // TODO: complete
  return (str.substring(str.length-ending.length)==ending)
}

//Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

//KATA: Consonant Value
//Given a lowercase string that has alphabetic characters only and no spaces, return the highest
//value of consonant substrings. Consonants are any letters of the alpahabet except "aeiou".
//We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
//- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and 
//cs = 3 + 19 = 22. The highest is 26.
//solve("zodiacs") = 26
//
//For the word "strength", solve("strength") = 57
//-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and 
//"ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
  //extract all the consonants substrings and put them in an array
  let consArr = []
  let strVowels = "aeiou"
  let strCons = ""
  let maxValue = 0
  let value = 0
  
  for (let i=0;i<(s.length+1);i++){
    //check one pos passed the last char
    //so that if the string ends with a consonant
    //the string of cons will also be pushed in the array.
    if (strVowels.search(s[i])==-1){
      //add consonant to string
      strCons = strCons + s[i]
    } else if (strCons != ""){
      //if it is a vowel then add the string of cons
      //in the array. But don't add if the cons string
      //is still empty for example this can happen 
      //when the first chars are vowels
      consArr.push(strCons)
      strCons=""
    }
  }
  
  // You can do this also with split. But if the string starts or ends with a vowel you will
  //have empty substrings in your array. You can delete them or leave them. They don't have 
  //a higher value as a consonant string.
  // consArr = s.split(/[aeiou]/)
  
  console.log(consArr)

  //loop through the array and count the value of the 
  //individual substrings using the ASCII value.
  //letter a has ascii value 97. So substract 96 to get
  //a = 1
  consArr.forEach((currString) => {
    value = 0
    for (let i=0;i<currString.length;i++){
      value = value + (currString.charCodeAt(i) - 96) 
    }
    if (value > maxValue) maxValue = value  
  }) 
  return maxValue 
}

solve("zodiac") // result = 26
solve("strength") //result 57

//other solutions:
const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);


//KATA: Fix String Case
/* In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your 
task is to convert that string to either lowercase only or uppercase only based on:
1. make as few changes as possible.
2. if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
function solve(s){
  if (s.match(/[A-Z]/g)!== null){
    //you need to have a Uppercase letter if not the length method will throw an error.
    if (s.match(/[A-Z]/g).length> Math.floor(s.length/2)){
      //to Uppercase
      return s.replace(/[a-z]/g,match => match.toUpperCase())
    } else {
      //to Lowercase
      return s.replace(/[A-Z]/g,match => match.toLowerCase())
    }
  } else {
    return s
  }
}
// Faster solution, that skips the problem with the length method:
//replaces the Capitals with '' (=same as removes) and you keep only the lowercase string characters.
//if this string is smaller then halve the size then you know there are less lower cases and you can make everything Upper.
const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()


//KATA: Remove Spaces in a string
function noSpace(x){
  return x.replace(/\s/g, '');
}


