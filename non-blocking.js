/**
 * Created by Owner on 2017-01-11.
 */

// reference the fileSystem module that ships with node
var fs = require('fs');

//get drinks
var drinks = fs.readFile('drink.txt', 'utf8', function(err, drinks) {
    //error handling
    if(err){
        console.log(err);
        return;
    }
    //if we get drinks, print them out
    console.log(drinks);

    //food heading
    console.log('\nFOOD:');

});

//drink heading
console.log('DRINKS:');


//food
var food = fs.readFile('food.txt', 'utf8', function(err, food) {
 console.log(food);
});

