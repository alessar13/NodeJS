function square(num) {
    if (correct(num)) return num*num;
}

function cube(num) {

    if(correct(num)) return num*num*num;
}

function correct(num) {
    if (num > 0) return true;
}

exports.square = square;
exports.cube - cube;