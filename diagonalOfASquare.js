function diagonal() {
  console.log("My name is mogembo");
  let x = prompt("What is the base?");
  let y = prompt("What is the height");
  let hyp = Math.sqrt(x ** 2 + y ** 2);
  console.log(hyp);
  document.write(
    `<h2>This is the diagonal of a square for the following data: ${hyp} </h2>`
  );
  return hyp;
  // println(hyp);
}
diagonal();
function area() {
  const base = 5;
  const height = 6;
  const hyp = 7;
  const res = (base + height + hyp) / 2;
  const finalArea = Math.sqrt(
    res * (res - base) * (res - height) * (res - hyp)
  );
  console.log(finalArea);
  document.write(`<h3> This is the final Area: ${finalArea}</h3>`);
  return finalArea;
}
area();
function circumference() {
  const radius = 4;
  let finalCircumference = 2 * Math.PI * radius;
  console.log(finalCircumference);
  document.write(
    `<h4> This is the final circumference of a circle: ${finalCircumference}</h4>`
  );
  return finalCircumference;
}
circumference();
function surfaceArea() {
  const rad = 4;
  let finalCircleArea = Math.PI * rad ** 2;
  console.log(finalCircleArea);
  document.write(
    `<h5> This is the final Area of the circle: ${finalCircleArea}</h5>`
  );
  return finalCircleArea;
}
surfaceArea();
