// Code your solutions in this file

function writeCards(names, event) {
    let messages = [];
    for(let c = 0; c < names.length; c++) {
        messages.push(`Thank you, ${names[c]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(int) {
    while(int != -1) {
        console.log(int);
        int -= 1;
    }
}