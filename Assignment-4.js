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

}

