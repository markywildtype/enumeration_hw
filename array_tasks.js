const arrayTasks = {

	concat: function(arr1, arr2){
    const concatenatedArray = [];
    arr1.forEach(function(item){
      concatenatedArray.push(item);
    });
    arr2.forEach(function(item){
      concatenatedArray.push(item);
    })
    return concatenatedArray;
	},

	insertAt: function(arr, itemToAdd, index){
    arr.splice(index, 0, itemToAdd);
    return arr;
	},

	square: function(arr){
    const result = arr.map(function(number){
      return number ** 2;
    });
    return result;
	},

	sum: function(arr){
    const result = arr.reduce(function(counter, current){
      return counter + current;
    }, 0);
    return result;
	},

	removeAndClone: function(arr, valueToRemove){
    const filteredArray = arr.filter(function(value){
      return value !== valueToRemove;
    });
    return filteredArray;
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
