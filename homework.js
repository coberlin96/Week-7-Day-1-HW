//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let name of dog_names){
        if(dog_string.includes(name)){
            return "Matched dog_name";
            
        }
    }
    return "No Matches"
}

console.log(findWords())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(i=0; i<arr.length; i=i+2){
        arr[i] = "even index"
    }
    return arr
}

console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Code Wars Redos with JS

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function vowelCount(word){
    vowels = 0
    for(i=0; i<word.length; i++){
        if(word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o'|| word[i] == 'u'){
            vowels++
        }
    }
    return vowels
}

testString = 'alpha bravo delta'
console.log(vowelCount(testString))


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function threeOrFive(num){
    sum = 0
    for(i=0; i<num; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum+=i
        }
    }
    return sum
}

console.log(threeOrFive(15))