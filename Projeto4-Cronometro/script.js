//Dom
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let millisecondsEl = document.getElementById('milliseconds');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resumeBtn = document.getElementById('resumeBtn');
let resetBtn = document.getElementById('resetBtn');

//Variaveis globais
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

//ADDeventListener
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', continueTimer);
resetBtn.addEventListener('click', resetTimer);

//Função de iniciar o tempo
function startTimer(){
    interval = setInterval(()=>{
        if(!isPaused){
            milliseconds += 10;

            if(milliseconds === 1000){
                seconds++
                milliseconds = 0;
            }
            if(seconds === 60){
                minutes++
                seconds = 0;
            }
            if(minutes === 60){
                hours++
                minutes=0;
            }

            millisecondsEl.textContent = formatMilli(milliseconds);
            secondsEl.textContent = formatTime(seconds);
            minutesEl.textContent = formatTime(minutes);
            hoursEl.textContent = formatTime(hours);
        }

    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

//Função de parar o tempo
function pauseTimer(){
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
}

//Função para continuar o tempo
function continueTimer(){
    isPaused = false;
    pauseBtn.style.display = 'block'
    resumeBtn.style.display = 'none'
}

//Função de resetar o tempo
function resetTimer(){
    clearInterval(interval)
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    millisecondsEl.textContent = '000';
    secondsEl.textContent = '00';
    minutesEl.textContent = '00';
    hoursEl.textContent = '00';

    startBtn.style.display = 'block';
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'none';
}


//Formatando o tempo
function formatTime(time){
    return time < 10 ? `0${time}` : time
}

function formatMilli(time){
    return time < 100 ? `${time}`.padStart(3, '0') : time
}