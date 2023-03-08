const text = "Sam is good at codingschool";
const result1 = text.replace("good", "bad").replace("codingschool", "school");
console.log(result1);
const result2 = text.replace("Sam", "Sussi").replace("codingschool", "school");
console.log(result2);
const result3 = text.replace("codingschool", "tennis");
console.log(result3);

document.write(result1 + "<br/>");
document.write(result2 + "<br/>");
document.write(result3 + "<br/>");

