let speed = 38;

// HTML container
let container = document.querySelector('.one')
let progressBar = container.querySelector(".skill-circle");
let valueContainer = container.querySelector(".percent");
let progressValue = 0
let progressEndValue = 65

// NodeJs container
let container2 = document.querySelector('.two')
let progressBar2 = container2.querySelector(".skill-circle");
let valueContainer2 = container2.querySelector(".percent");
let progressValue2 = 0
let progressEndValue2 = 29

// CSS container
let container3 = document.querySelector('.three')
let progressBar3 = container3.querySelector(".skill-circle");
let valueContainer3 = container3.querySelector(".percent");
let progressValue3 = 0
let progressEndValue3 = 60

// Java container
let container4 = document.querySelector('.four')
let progressBar4 = container4.querySelector(".skill-circle");
let valueContainer4 = container4.querySelector(".percent");
let progressValue4 = 0
let progressEndValue4 = 45

// HTML progress
let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #fab430 ${progressValue * 3.6}deg,
        #222 ${progressValue * 3.6}deg
    )`;
    if (progressValue == progressEndValue){
        clearInterval(progress);
    }
}, speed)

// NodeJs progress
let progress2 = setInterval(() => { 
    progressValue2++;
    valueContainer2.textContent = `${progressValue2}%`;
    progressBar2.style.background = `conic-gradient(
        #fab430 ${progressValue2 * 3.6}deg,
        #222 ${progressValue2 * 3.6}deg
    )`;
    if (progressValue2 == progressEndValue2){
        clearInterval(progress2);
    }
}, speed)

// css progress
let progress3 = setInterval(() => { 
    progressValue3++;
    valueContainer3.textContent = `${progressValue3}%`;
    progressBar3.style.background = `conic-gradient(
        #fab430 ${progressValue3 * 3.6}deg,
        #222 ${progressValue3 * 3.6}deg
    )`;
    if (progressValue3 == progressEndValue3){
        clearInterval(progress3);
    }
}, speed)

// Java progress
let progress4 = setInterval(() => { 
    progressValue4++;
    valueContainer4.textContent = `${progressValue4}%`;
    progressBar4.style.background = `conic-gradient(
        #fab430 ${progressValue4 * 3.6}deg,
        #222 ${progressValue4 * 3.6}deg
    )`;
    if (progressValue4 == progressEndValue4){
        clearInterval(progress4);
    }
}, speed)