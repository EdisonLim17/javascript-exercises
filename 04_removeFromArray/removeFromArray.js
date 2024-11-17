const removeFromArray = function(n, ...args) {
    a = [];
    for (const element of n){
        if (!args.includes(element)) a.push(element);
    }
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
