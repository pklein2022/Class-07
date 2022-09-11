function numberGenerator() {
  // Local “free” variable that ends up within the closure
  let num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number();
//2
//var number is running the numberGenerator function and inside that function, the number 1 has been incremented with the num++. 

//Why does it not increment past two if we run it like this?
let num = 1;
function numberGenerator() {
    // Local “free” variable that ends up within the closure
   
    function checkNumber() {
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number();