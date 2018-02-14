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

	// findIndexesOf: function(arr, itemToFind){
  //   const indexes = [];
  //   const indexArray = arr.map(function(item){
  //     if(item === itemToFind){
  //       return arr.indexOf(item);
  //     }
  //   });
  //   console.log(indexArray);
	// },

	sumOfAllEvenNumbersSquared: function (arr) {
    const evens = arr.filter(function(item){
        return item % 2 === 0;
      });
    const squared = evens.map(function(item){
      return item ** 2;
    });
    const sum = squared.reduce(function(counter, current){
      return counter + current;
    }, 0);
    return sum;
	}

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
