async function first(){
    console.log('here')
    let x = new Promise( function (resolve, reject) {
        setTimeout( function() {
          console.log(1);
          resolve();
        }, 500 );
    })
    return x;
  }

  function second(){
    console.log(2);
  }

  first().then(second)
  //second()
