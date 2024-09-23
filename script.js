//your code here
const h3 = document.getElementById("h");
const para = document.getElementById("para");
/// render sixth Image randomly.
const div = document.querySelector("div");
const newImgElement = document.createElement("img");
const imgClasses = ["img1", "img2", "img3", "img4", "img5"];
let randomIndex = Math.floor(Math.random() * imgClasses.length);
const randomImgClass = imgClasses[randomIndex];
newImgElement.className = randomImgClass;
div.append(newImgElement);
const imgArr = document.querySelectorAll("img");
console.log(imgArr);
//sixth random image generated successfully.
let count = 0;
for (let image of imgArr) {
  image.addEventListener("click", (eventDetails) => {
    count = count + 1;
    if (count === 1) {
      const resetBtn = document.createElement("button");
      resetBtn.id = "reset";
      resetBtn.textContent = "RESET";
      let main = document.querySelector("main");
      main.append(resetBtn);
    }
    if(count===2){
            const verifyBtn = document.createElement("button");
            verifyBtn.id = "verify";
            verifyBtn.textContent = "VERIFY"
            let main = document.querySelector("main");
            main.append(verifyBtn);
    
    }
    if(count>2){

    }
  });
}
