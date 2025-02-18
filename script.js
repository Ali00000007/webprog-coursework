const startTimerBtn = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");
const resetTimerBtn = document.querySelector("#resetTimer");
const recordTimeBtn = document.querySelector("#recordTime");
const clearRaceBtn = document.querySelector("#clearRace");

let timerInterval;
let elapsedSeconds = 0;

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startStopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    startTimerBtn.textContent = "Start Timer";
  } else {
    startTimerBtn.textContent = "Stop Timer";
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      timerDisplay.textContent = formatTime(elapsedSeconds);
    }, 1000);
  }
}

function resetTimer(){
    elapsedSeconds = 0
    timerDisplay.textContent = formatTime(elapsedSeconds);
}

function recordTime(){
    const timeRecorded = document.createElement("p");
    let time = document.createTextNode(formatTime(elapsedSeconds));
    timeRecorded.append(time);
    document.body.appendChild(timeRecorded);
}

function clearRace(){
    
}

startTimerBtn.addEventListener("click", startStopTimer);
resetTimerBtn.addEventListener("click", resetTimer);
recordTimeBtn.addEventListener("click", recordTime);
clearRaceBtn.addEventListener("click", clearRace);