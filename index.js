// Code your solutions in this file

function writeCards(names, event) {
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}