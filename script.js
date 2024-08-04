const countDownElement= document.getElementById('countDown');
const resetValueElement= document.querySelector('.resetValue');

let starCount=0;
let intervalId;

//Function to star the timer
const startTimer = () =>{
    intervalId = setInterval(() => {
        countDownElement.innerHTML= starCount++;
    }, 1000);

}

//Function to stop the timer adn show stop time

const stopTimer = () => {
    ShowStopValue();
    clearInterval(intervalId);
}


//Function to reset the timer
const resetTimer = () =>{
    starCount=0
    countDownElement.innerHTML = starCount;

    clearInterval(intervalId)
}


// Function to show stop value
const ShowStopValue = () => {
    const newPara= document.createElement("p")
    newPara.innerText = `The stop time is ${starCount - 1}`;
    
    resetValueElement.append(newPara);
}

// Function to clear ShowStopValue
const clearTimeValue = () => {
    resetValueElement.innerHTML= ""

}


//get start button
document.querySelector(".start_btn")
.addEventListener('click', startTimer)

//get stop time button
document.querySelector(".stop_btn")
.addEventListener('click', stopTimer )

//get reset button
document.querySelector(".reset_btn")
.addEventListener('click', resetTimer)

//Get Time button
document.querySelector(".time_btn")
.addEventListener('click', ShowStopValue)


//clear getTime
document.querySelector(".clear_btn")
.addEventListener('click', clearTimeValue)