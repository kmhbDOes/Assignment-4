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

function isLGSeven() {

}




