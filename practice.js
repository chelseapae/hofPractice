// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
//I - fruits array
//O - the same array with only the desired fruit
//C - none
//E - none

//use filter
//iterate through fruits
  //if fruit is equal to targetFruit
    //push that into our original array

var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter (fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter (fruits, function(fruit) {
    if (fruit.slice(0, 1) === letter) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter (desserts, function(dessert) {
    if (typeof dessert === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce (products, function(total, item) {
    return total + Number(item.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
//I - array of desserts
//O - an object w dessert types and how many
//C - none
//E - none

//create an obj variable
  //iterate through the array (using _.reduce)
    //if the type of dessert doesn't exist
      //then add to object
    //else
      //add as +1 to object
//return obj variable

var dessertCategories = function(desserts) {
  // return _.reduce (desserts, function(obj, item) {
  //   obj[item.type] ? obj[item.type]++ : obj[item.type] = 1;
  //   return obj;
  // }, {});
  var count = {};
  return _.reduce(desserts, function(memo, dessert) {
    if (count[dessert.type] === undefined) {
      count[dessert.type] = 1;
    } else {
      count[dessert.type]++;
    }
    return count;
  }, 0);
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
//I - array of movie data objects
//O - array with movies that came out between 1990 and 2000
//C - use an array as your accumulator
//E - none

//create an array var
  //use reduce to iterate through
    //if movies.year is in between 1990 and 2000
    //push into array
//return array

var ninetiesKid = function(movies) {
  var result = [];
  _.reduce (movies, function(array, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      result.push(movie.title);
    }
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
//I - array of movie data objects
//O - boolean
//C - none
//E - none
var movieNight = function(movies, timeLimit) {
//use reduce to iterate
  //if the movie time is shorter than timelimit
  //return true
  //else return false
  return _.reduce (movies, function(array, movie) {
    if (movie.time < timeLimit || timeLimit > 60) {
      return true;
    } else {
      return false;
    }
  }, 0);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map (fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
//I - array of dessert objects
//O - return a new array of objects that have a glutenfree property
//C - none
//E - none
var glutenFree = function(desserts) {
//use map to iterate
  //if glutenFree exists
    //push into array
  return _.map (desserts, function(dessert) {
    if (dessert.ingredients.indexOf('flour') === -1) {
      dessert.glutenFree = true;
    } else {
      dessert.glutenFree = false;
    }
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*
//I -
//O - array of items, with their sale prices AND with a new property with the sale price
//C
//E

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var result = _.map(groceries, function(product) {
    product.price = product.price.slice(1);
    product.price = Number(product.price);
    product.salePrice = product.price - product.price * coupon;
    product.salePrice = '$' + product.salePrice.toFixed(2);
  });
  return groceries;
};
