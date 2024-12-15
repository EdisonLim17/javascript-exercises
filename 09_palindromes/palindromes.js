const palindromes = function (s) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const arr = s.toLowerCase().split("");
    const filtered = arr.filter(c => alphanumerical.includes(c)).join("");
    const reversed = filtered.split("").reverse().join("");
    return filtered === reversed;
};

// Do not edit below this line
module.exports = palindromes;