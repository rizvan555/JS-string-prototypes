const A = "Susi is going to codingschool";

const result1 = A.slice(0, 4);
console.log(result1);
const result2 = A.slice(5, 8);
console.log(result2);
const result3 = A.slice(5);
console.log(result3);
const result4 = A.slice(23);
console.log(result4);
const result5 = result1 + " " + result2 + result4;
console.log(result5);

const result6 = result1 + " " + result2 + A.slice(7);
console.log(result6);

document.write(result1 + "<br />");
document.write(result2 + "<br />");
document.write(result3 + "<br />");
document.write(result4 + "<br />");
document.write(result5 + "<br />");