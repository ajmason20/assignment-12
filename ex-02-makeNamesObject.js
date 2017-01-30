// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }

var makeNamesObject = function(stringInput1, stringInput2, stringInput3) {

var name1 = stringInput1.split(' ')
var name2 = stringInput2.split(' ')
var name3 = stringInput3.split(' ')

// var firstName1 = name1[0];
// var firstName2 = name2[0];
// var firstName3 = name3[0];
// var lastName1 = name1[1];
// var lastName2 = name2[1];
// var lastname3 = name3[1];

var newObject = {
  [name1[0]]:name1[1],
  [name2[0]]:name2[0],
  [name3[0]]:name3[1]}
return newObject;
}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj.Abe === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
