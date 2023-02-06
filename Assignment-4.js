// Problem 1: Let’s play a mind game ******

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

function evenOdd(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.length % 2 == 0) {
            console.log(string, "is Even");
        }
        else {
            return "Odd";
        }
        return string;
    }
}

let checkEvenOdd = evenOdd("Pheroo");
console.log(checkEvenOdd);




// Problem 3: Is Less or Greater than seven

function isLGSeven(isLGSevenInput) {
    if (isLGSevenInput < 7) {
        return (isLGSevenInput - 7);
    }
    return isLGSevenInput * 2;

}

let lr = isLGSeven(15);
console.log(lr);



// Problem 4: Finding Bad data

function findingBadData(inputArray) {
    let negativeCount = 0;
    for (let i = 0; i < inputArray.length; i++)
        if (inputArray[i] < 0) {
            negativeCount++;
        }
    return negativeCount;
}

let res = findingBadData([-4, -9, -5, -33, -55])
console.log(res);



// Problem 5: Convert your gems into diamond

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




