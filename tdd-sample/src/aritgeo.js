

// function returns true if array is an Arithmetic Progression
const arithmetic = (array) => {
    let commonDiff = array[1] - array[0];
    for (let i = 0; i < array.length -1; i++) {
        if (commonDiff !== (array[i+1] - array[i])) {
            return false;
        }
    }
    return true;	

}

// function returns true if array is a Gometric Progression
const geometric = (array) => {
    let commonRatio = array[1] / array[0];
    for (let i = 0; i < array.length - 1; i++){
        if (commonRatio !== (array[i+1] / array[i])) {
            return false; 
        }
    }
    return true;
}

// function checks if it's an array and is empty
const emptyArray = (array) => {
    if ((array.constructor === Array ) && (array.length < 1 )){
        return true;
    }
    return false;
}




const aritGeo = (array) => {
        //return 0 if an empty array
        if (emptyArray(array)) {
            return 0;		
        }
        //return Arithmetic for arithmetric progression
        if (arithmetic(array)) {
            return "Arithmetic";
        }
        // return Geometric if geometric progression
        if (geometric(array)) {
            return "Geometric";
        }
        //return -1 for neither
        return -1; 
    };

module.exports.aritGeo = aritGeo;

//Test
//console.log(aritGeo([2, 4, 8, 16])) //for Geometric test
//console.log(aritGeo([2, 4, 6, 8])) //for Arithmetic test
//console.log(aritGeo([])) //for empty array test
//console.log(aritGeo([2, 9, 8, 1])) //for neither arithmetic, geometric, nor empt array test