var arrNumber = [9, 4, 6, 3, 10];
function selectionSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var minI = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minI]) {
                minI = j;
            }
        }
        if (minI !== i) {
            _a = [arr[minI], arr[i]], arr[i] = _a[0], arr[minI] = _a[1];
        }
    }
    return arr;
}
console.log(selectionSort(arrNumber));
