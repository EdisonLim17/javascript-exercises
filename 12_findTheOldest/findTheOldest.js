const findTheOldest = function(arr) {
return arr.reduce((oldest, curr) => {
        if(!oldest.yearOfDeath){
            oldest.yearOfDeath = (new Date()).getFullYear();
        }
        if(!curr.yearOfDeath){
            curr.yearOfDeath =  (new Date()).getFullYear();
        }
        if(curr.yearOfDeath - curr.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth){
            oldest = curr;
        }
        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
