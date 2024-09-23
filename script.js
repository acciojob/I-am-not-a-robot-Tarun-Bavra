//your code here
const resetBtn = document.getElementById('reset');
const resetBtn = document.getElementById('verify');
const div = document.querySelector("div")
/// render sixth Image randomly
const newImgElement = document.createElement("img");
const imgClasses = ["img1","img2","img3","img4","img5"];
let randomIndex = Math.floor(Math.random()*imageClasses.length);
const randomImgClass = imgClasses[randomIndex];
newImgElement.className = randomImgClass;
div.append(newImgElement)






