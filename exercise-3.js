function foo(a) {
  let b = 20;

  function bar(c) {
    let d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    console.log(e * -1);
  }

  return bar;
}

let moar = foo(5); // Closure

moar(15);
//10 + a + 20 + C + 30
//a is getting defined when we run foo
//c is getting defined when we run moar
//10 + 5 + 20 + 15 + 30 = 80

//80 * -1 = -80
