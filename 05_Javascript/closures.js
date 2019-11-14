function makeCounter() {
    var counter = 0;

    var add = function () {
        counter += 1;
        return counter;
    };

    return add;
}


add = makeCounter();

console.log(add())
console.log(add())


function makeCounter() {
    var counter = 0;

    return function () {
        counter += 1;
        return counter;
    };

}

// iterator

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}


function* range(start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

for (let i of range(0,10)) {
    console.log(i)
}

y = range(0,10)
console.log(y.next())