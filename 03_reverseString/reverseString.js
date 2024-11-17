const reverseString = function(s) {
    let r = "";
    for(let i = s.length - 1; i >= 0; i--){
        r += s[i];
    }
    return r;
};

// Do not edit below this line
module.exports = reverseString;
