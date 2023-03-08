const text = "Sam is going to codingschool";
const result1 = text.toUpperCase();
console.log(result1);

const result2 = text.toLowerCase();
console.log(result2);

const result3 = text
  .slice(0, 3)
  .toUpperCase()
  .concat(text.slice(3, 16))
  .concat(text.slice(22, 28).toUpperCase());
console.log(result3);

const result4 = text
  .slice(0, 3)
  .toLowerCase()
  .concat(text.slice(3, 16).toUpperCase())
  .concat(text.slice(16, 28).toLowerCase());
console.log(result4);

const result5 = text
  .slice(0, 4)
  .concat(text.slice(4, 5).toUpperCase())
  .concat(text.slice(5, 7))
  .concat(text.slice(7, 8).toUpperCase())
  .concat(text.slice(8, 13))
  .concat(text.slice(13, 14).toUpperCase())
  .concat(text.slice(14, 16))
  .concat(text.slice(22, 23).toUpperCase())
  .concat(text.slice(23, 28));
console.log(result5);

document.write(result1 + "<br>");
document.write(result2 + "<br>");
document.write(result3 + "<br>");
document.write(result4 + "<br>");
document.write(result5 + "<br>");
