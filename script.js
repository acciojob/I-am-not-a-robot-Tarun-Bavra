//your code here
const imgClasses = ["img1","img2","img3","img4","img5"];
const images = document.querySelectorAll("img");
let randomIndex = Math.floor(Math.random()*images.length);
const resetBtn = document.getElementById('reset');
const newImg = document.createElement("img");
newImg.className = imgClasses[randomIndex];
resetBtn.addEventListener("click",resetHandler);
function resetHandler(){
	
}