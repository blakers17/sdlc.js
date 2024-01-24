///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0;
for (let i = 0; i < fujiAcres.length; i++) {
totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}
console.log(totalAcres);
// I had some trouble with this one. i got how to do the loop and got that added but i forgot the code +=, i tried just = first but that didnt come out right as i know there were not only 9 acres picked between all of the days.
// I also tried to use [] first for the totalacres but it came out with a number like 8000000 long and that was wrong for sure as the code needed a starting point.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let daysOfWeek = 0
 daysOfWeek = fujiAcres.length
let averageDailyAcres = totalAcres / daysOfWeek;
console.log(averageDailyAcres);
// daysofweek had to be set to the loop being run through in order to devide it by totalacres, this way we could get the averagedailyacres to give us a set number for how many acres could be picked per day.




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0 ) {
    days++;
    acresLeft -= averageDailyAcres;
}
console.log(days)
// we were adding a day each time it ran through a days worth of acres picked. as long as there was acres left to pick from it would add a day. logging those days to the variable "day"

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let tonsPerAcre = 6.5
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * tonsPerAcre);
    galaTons.push(galaAcres[i] * tonsPerAcre);
    pinkTons.push(pinkAcres[i] * tonsPerAcre);
}
console.log("Fuji Tons:", fujiTons);
console.log("Gala Tons", galaTons);
console.log("Pink Tons", pinkTons)
// let fujiTons =
// let galaTons =
// let pinkTons =

// This way might be a bit longer but it made more sense to me. i will need a refresher on the splice meathod as i couldnt figure it out. 
// i made variables for each of the tons and then used the previous variables for acres to get the total number per day of apples picked of each veriety.  



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
let tonsToPounds = 2000
let fujiTotalPounds = fujiTons.reduce((total, tons) => total + tons, 0) * tonsToPounds;
let galaTotalPounds = galaTons.reduce((total, tons) => total + tons, 0) * tonsToPounds;
let pinkTotalPounds = pinkTons.reduce((total, tons) => total + tons, 0) * tonsToPounds;

console.log("Fuji Total Pounds :", fujiTotalPounds);
console.log("Gala Total Pounds :", galaTotalPounds);
console.log("Pink Total Pounds :", pinkTotalPounds);

// i used reduce in this array which takes each element in the array and sums them all together into one number. i got the formula form chat gpt. and then we console log each apple type and we have our amount in pounds.
// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiTotalPounds * fujiPrice;
let galaProfit = galaTotalPounds * galaPrice;
let pinkProfit = pinkTotalPounds * pinkPrice;

console.log("Fuji Profit :", fujiProfit);
console.log("Gala Profit :", galaProfit);
console.log("Pink Profit", pinkProfit);







// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Totoal Profit :", totalProfit)