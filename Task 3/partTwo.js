function EvenorOdd() {
  let x = prompt("This is an integer");
  if (x % 2 === 0) {
    document.write("x is even");
    return x % 2 === 0;
  } else if (x % 2 === 1) {
    document.write("x is odd");
    return X % 2 === 1;
  } else {
    document.write("It is a decimal number");
  }
}
EvenorOdd();
