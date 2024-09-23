//your code here
const resetBtn = document.getElementById('reset');
const verify = document.getElementById('verify');
const h3 = document.getElementById('h');
const para = document.getElementById('para');
const div = document.querySelector("div")
/// render sixth Image randomly.
const newImgElement = document.createElement("img");
const imgClasses = ["img1","img2","img3","img4","img5"];
let randomIndex = Math.floor(Math.random()*imgClasses.length);
const randomImgClass = imgClasses[randomIndex];
newImgElement.className = randomImgClass;
div.append(newImgElement)
//sixth random image generated successfully.







