// Problem 1: Let’s play a mind game ******

//  function mindGame here has one parameter named mindGamInput which takes a number and we make a calculation based on the input with mindGameOutput having the below formula and thus we return mindGameOutput
function mindGame(mindGameInput) {
    let mindGameOutput = (mindGameInput * 3 + 10) / 2 - 5;

    if (typeof mindGameInput == 'string') {
        return "Please Enter a valid number:"
    }

    return mindGameOutput;
}
let mindGameResult = mindGame(5);
console.log(mindGameResult);




// Problem 2: Finding even or odd

// function evenOdd takes a string as input and counts the length and returns based on the count that if it's even or odd

function evenOdd(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.length % 2 == 0) {
            return "even";
        }
        else {
            return "odd";
        }
    }
    return string;
}

let checkEvenOdd = evenOdd("Phero");
console.log(checkEvenOdd);




// Problem 3: Is Less or Greater than seven

// function isLGSeven takes a number parameter as input, If that number is less than 7 then return difference between that number and 7 otherwise double the input.

function isLGSeven(isLGSevenInput) {
    let inputValueDifference = isLGSevenInput - 7
    if (inputValueDifference < 7) {
        return inputValueDifference;
    }
    if (typeof isLGSevenInput == 'string') {
        return "Enter Valid Number";
    }
    return isLGSevenInput * 2;

}

let lr = isLGSeven(6);
console.log(lr);



// Problem 4: Finding Bad data

// function findingBadData takes a array as input which will have positive/ negative values. If there is negative values, this function will count them in and return the total amount of bad data.

function findingBadData(inputArray) {
    let badDataCount = 0;
    for (let i = 0; i < inputArray.length; i++)
        if (inputArray[i] < 0) {
            badDataCount++;
        }
    return badDataCount;
}

let res = findingBadData([-4, -9, -5, -33, -55])
console.log(res);



// Problem 5: Convert your gems into diamond

// This function will count how much diamond can one friend generate in total with three parameters, Given each friend has preset values. And if the total diamond amount is twice of one thousand then 2000 will be deducted from 2000 and thus it returns total remaining diamond.

function gemsToDiamond(friendOne, friendTwo, friendThree) {
    const firstFriendConvertedDiamond = friendOne * 21;
    const secondFriendConvertedDiamond = friendTwo * 32;
    const thirdFriendConvertedDiamond = friendThree * 43;
    const totalDiamond = firstFriendConvertedDiamond + secondFriendConvertedDiamond + thirdFriendConvertedDiamond;

    if (totalDiamond > 2000) {
        return totalDiamond - 2000;
    }
    return totalDiamond;
}

let resDi = gemsToDiamond(100, 5, 1);
console.log(resDi);




