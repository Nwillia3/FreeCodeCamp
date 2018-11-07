// data Structures curriculum notes


// Arrays are mutable
.push() // add elements to the end of an array
.unshift() // add elements to the beginning of an array

.pop() // removes an element from end of array
shift() // removes an element from the beginning of an array

.splice() // remove any consective amount of elements from array
.splice(1, 2, 3) // also take up to three Parameters
#1 where you want to start 
# 2 how many elements to delete
    .splice()
/* not only modify the array its being called on, but it also returns a new array containing
the removed values */
#3 add an item/s into an array

function colorChange(arr, index, newColor) {
// arr is defined in the calling which is colorScheme
// index is 2
//newColor is # 332327

arr.splice(index, 1, newColor);
// index is 2
// 1 is how many elements to remove
//newColor is #332327 which is added in replace of #bb7e8c the 3rd element arr[2]
return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];



colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']


//   NOT splice but slice
.slice() // doesnt modify any array but copies or extract a given number of elemeents
.slice(1, 2) // take two paramaters
#1  // where to begin extraction
# 2 // where to stop extraction
// (extraction will occur up to, but not including the element at this index

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']


// Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);

        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

//   Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

// Check For The Presence of an Element With indexOf()
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

// Add Key-Value Pairs to JavaScript Objects

let FCC_User = {
    username: 'awesome_coder',
    followers: 572,
    points: 1741,
    completedProjects: 15
};

To access the number of followers do ...FCC_User['followers'] or FCC_User.followers
    // note that the bracket notation used '' around the prpoerty/key 
    // * brackets allows us to pass in variables * //

    // use delete to remove object property
    delete FCC_User.points

    // Check if an Object has a Property
    .hasOwnProperty()
// can have many arguments/parameters
FCC_User.hasOwnProperty(points)
// Or use in keyword
'points' in FCC_User;
// both return true


// Iterate through an object for ...in statement
for (let pts in FCC_User) {
    console.log(pts)
}
// returns 1741

// Iterate Through the Keys of an Object with a for...in Statement

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {

    let result = 0;
    //init a var to hold the count 
    for (let user in obj) {
        // use a for in to iterate through object users
        if (obj[user].online === true) {
            // user is the key of the each user obj
            // .online is the prop/key to each user in the object
            result++;
            //if online value is truee add 1 to result
        }

    }
    return result
    //DON'T FORGET TO RETURN YOUR RESULT
}

console.log(countOnline(users));