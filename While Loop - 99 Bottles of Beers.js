
var numberOfBottles = 99;

    
while (numberOfBottles <= 99 && numberOfBottles >= 1){
    if (numberOfBottles == 1){
        console.log(numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer. ");
        --numberOfBottles;
        console.log("Take one down and pass it around, " + numberOfBottles + " bottle of beer on the wall.");
    } else if (numberOfBottles <= 99){
        console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. ");
        --numberOfBottles;
        console.log("Take one down and pass it around, " + numberOfBottles + " bottles of beer on the wall.");
    } 
}
console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.");




