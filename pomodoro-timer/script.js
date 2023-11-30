//Adding Elements from HTML
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const stopBtn = document.getElementById('stop');
const timer = document.querySelector('.time')
const addTime = document.getElementById('addTime');
const subTime = document.getElementById('subTime');
const studySet = document.getElementById('studySet');
const subBreak = document.getElementById('subBreak');
const addBreak = document.getElementById('addBreak');
const breakSet = document.getElementById('breakSet');
const uiContainer = document.querySelector('.uiContainer')


let time = 1500;
const initalTime = time
let breakTime = 300;
let longBreakTime = 1800;
let interval;
let studyTimes = 0
let breakTimes = 0;
let rounds = 0;

updateTimer()
//Format Timer on HTML
function updateSetStudyTime(){
    let min = Math.floor(time/60);
    let sec = time%60;
    let formmattedTime = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
    studySet.innerHTML = formmattedTime
    updateTimer()
}
function updateBreakTime(){
    let min = Math.floor(breakTime/60);
    let sec = breakTime%60;
    let formmattedTime = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
    breakSet.innerHTML = formmattedTime
}
function updateTimer(){
    let min = Math.floor(time/60);
    let sec = time%60;
    let formmattedTime = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
    timer.innerHTML = formmattedTime
}

//Start button 
function startTimer(){
    interval = setInterval(() => {
        time--;
        updateTimer()
    
    },1000)

    uiContainer.classList.add('hidden')
    startBtn.classList.add('disable')
    startBtn.setAttribute('disabled', '#start')

}


//Reset Timer
function resetTimer() {
    clearInterval(interval)
    time = initalTime
    rounds = 0;
    studyTimes = 0;
    breakTimes = 0;
    updateTimer()
    updateSetStudyTime()
    uiContainer.classList.remove('hidden')
    startBtn.classList.remove('disable')
    startBtn.removeAttribute('disabled')
}


//Stop Timer
function stopTimer(){
    clearInterval(interval)
    startBtn.classList.remove('disable')
    startBtn.removeAttribute('disabled')
}



//User Set Time/Break
function addMinute(){
    time += 60
    updateSetStudyTime()
    
}
function subMinute(){
    time -= 60
    updateSetStudyTime()
}
function addBreakTime(){
    if(breakTime >= time/5){
        breakTime = breakTime
    }else{
        breakTime += 60
        updateBreakTime()
    }
}
function subBreakTime(){
    breakTime -= 60;
    updateBreakTime()
}



function main(){

    



    startBtn.addEventListener('click', startTimer);
    resetBtn.addEventListener('click', resetTimer);
    stopBtn.addEventListener('click', stopTimer);
    addTime.addEventListener('click', addMinute);
    subTime.addEventListener('click', subMinute);
    addBreak.addEventListener('click', addBreakTime);
    subBreak.addEventListener('click', subBreakTime);
}
main()