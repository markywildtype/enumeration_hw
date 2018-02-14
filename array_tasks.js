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

	// sum: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
