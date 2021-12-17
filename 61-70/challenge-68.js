// MERGE TWO SORTED ARRAYS IN PLACE INTO ARRAY1
var array1 = [1, 2, 3, 0, 0, 0];
var array2 = [2, 5, 6];
var merge = function (array1, m, array2, n) {
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
    while (k >= 0) {
        if (i < 0) {
            array1[k] = array2[j];
            j--;
        }
        else if (j < 0) {
            array1[k] = array1[i];
            i--;
        }
        else if (array1[i] > array2[j]) {
            array1[k] = array1[i];
            i--;
        }
        else {
            array1[k] = array2[j];
            j--;
        }
        k--;
    }
    return array1;
};
console.log(merge(array1, 3, array2, 3));
