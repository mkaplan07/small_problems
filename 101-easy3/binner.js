let rs = require('readline-sync');

function binner() {
    let dec = rs.question('Enter a decimal number:\n');
    let places = placer(dec);
    return binus(dec, places);
}

function placer(dec) {
    let places = 0;
    let i = 1;
    while (dec > 0) {
        dec = dec - i;
        places += 1;
        i *= 2;
    }
    return places;
}

function binus(dec, places) {
    let result = '';
    while (places > 0) {
        if ((dec - Math.pow(2, places - 1)) >= 0) {
            result += 1;
            dec -= Math.pow(2, places - 1);
        } else {
            result += 0;
        }
        places -= 1;
    }
    return result;
}

console.log(binner());
