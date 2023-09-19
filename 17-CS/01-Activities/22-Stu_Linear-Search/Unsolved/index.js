const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {

    for (let i = 0; i < array.length; i++) {
        ///if the items the one we're looking for, then retun the i of the item 

        if (element == array [i]){
            return i; 
        }
        
    }
    return -1;
// otterwise retun - 1 

};

module.exports = {linearSearch}

//linear serach looking at every item in the array 
//this is not a super effective way but its good if the array is not sorted
