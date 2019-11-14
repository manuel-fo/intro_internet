"use strict";

let p = new Promise(function(resolve, reject) {
    let tot = 0;
    for(let i = 0; i < 1000000; i++) {
        tot += i;
    }
    if(tot > 0)
        resolve(tot);
    else
        reject(tot);
});

console.log('hello');
p.then((v) => console.log(v));
p.catch((err) => console.log(err));
console.log('world');

function randomTotal(cnum) {
    let p = new Promise(function(resolve, reject) {
        let tot = 0;
        for(let i = 0; i < 1000000*Math.random(); i++) {
            tot += i;
        }
        if(tot > 0)
            resolve({callnum: cnum, result: tot});
        else
            reject(tot);
    });
    return p;
}

let pArray = [];
for(let i of [1,2,3,4,5,6,7]) {
    pArray.push(randomTotal(i))
}

Promise.all(pArray).then((messages => console.log(messages)));


async function aRandomTotal(cnum) {
    let p = new Promise(function(resolve, reject) {
        let tot = 0;
        for(let i = 0; i < 1000000*Math.random(); i++) {
            tot += i;
        }
        if(tot > 0)
            resolve({callnum: cnum, result: tot});
        else
            reject(tot);
    });
    return p;
}

async function main() {
    let t = await aRandomTotal(1);
    console.log(t);
}

main()