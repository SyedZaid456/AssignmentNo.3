function Integers() {
  let firstInteger = prompt("This is the first integer");
  let secondInteger = prompt("The second integer is");
  if (firstInteger > secondInteger) {
    document.write(
      `<h1>This is the largest of the two integers: ${firstInteger} </h1>`
    );
    return firstInteger;
  } else if (firstInteger < secondInteger) {
    document.write(
      `<h1>This is the largest of the two integers: ${secondInteger} </h1>`
    );
    return secondInteger;
  } else {
    document.write("<h1>The integers are equal</h1>");
  }
}
Integers();
function integer(a, b) {
  if (a >= 0 && b >= 0) {
    if (a != b) {
      document.write("The larger number is " + Math.max(a, b));
    } else {
      document.write("Both numbers are equal!");
    }
  } else {
    document.write("Please add an integer!");
  }
}

integer(10, 10);
