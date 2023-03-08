const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";
const text4 = "to the movie Theater";
const text5 = "gym";

document.write(text1.concat(`${text3} ${text4}  <br/>`));
document.write(text1.replace("codinschool", text4) + "<br/>");
document.write(
  `${text2} ${text3} ${
    text1.replace("is", "are").concat(text1.slice(28)) + "<br/>"
  }`
);
document.write(
  `${text2} ${text3} ${text1
    .replace("is", "are")
    .replace("codingschool", text5)} ${text3} ${text4} <br/>`
);

document.write(`${text2 + " ".concat(text1.slice(4))} ${text3} ${text4}`);
