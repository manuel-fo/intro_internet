async function first() {
    let resp = await fetch("https://api.myjson.com/bins/15vr3m");
    return resp.json();
}


function second(x) {
    console.log(x + 2);
}

async function main() {
    let p = await first();
    console.log('first returned ' + p);
    second('second');
    return 'all done';
}
x = main()
console.log('done');
console.log("x = " + x)

