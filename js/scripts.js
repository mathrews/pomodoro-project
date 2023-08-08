btnGear.onclick = () => {
    overlay.classList.add('activeOverlay')
    modal.classList.add('activeModal')
}

overlay.onclick = () => {
    overlay.classList.remove('activeOverlay')
    modal.classList.remove('activeModal')
}

btnCrossModal.onclick = () => {
    overlay.classList.remove('activeOverlay')
    modal.classList.remove('activeModal')
}

let linhaDoTempo = ['POMODORO', 'SHORTBREAK', 'POMODORO', 'LONGBREAK'];
let p_segundos = 0;
let p_minutos = 0;
let i_contarSegundos;
let i_contarMinutos;

function configurarTemposFormSubmit(){
    event.preventDefault();
    pomodoroMode();
    formDosTempos.reset();
    overlay.classList.remove('activeOverlay');
    modal.classList.remove('activeModal');
}

function configurarTempos(segundos) {
    if (segundos) {
        if (segundos > 59) {
            let minutos = parseInt((segundos / 60) % 60);
            segundos = parseInt(segundos % 60);
            minuto.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
            p_minutos = minutos;
            segundo.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
            p_segundos = segundos;
            return;
        }
        segundo.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
        p_segundos = segundos;
    } else {
        minuto.innerHTML = '00';
        segundo.innerHTML = '00';
    }
}

function pomodoroMode(){
    pomodoro.classList.add('active');
    shortBreak.classList.remove('active');
    longBreak.classList.remove('active');
    configurarTempos(pomodoroMinutes.value);
}

function shortBreakMode(){
    shortBreak.classList.add('active');
    longBreak.classList.remove('active');
    pomodoro.classList.remove('active');
    configurarTempos(shortBreakMinutes.value);
}

function longBreakMode(){
    longBreak.classList.add('active');
    shortBreak.classList.remove('active');
    pomodoro.classList.remove('active');
    configurarTempos(longBreakMinutes.value);
}

function estadosBotaoPlay() {
    switch (botaoPlay.getAttribute('estado')) {
        case 'i':
            botaoPlay.setAttribute('estado', 'p')
            botaoPlay.innerHTML = 'stop';
        break;
        case 'p':
            botaoPlay.setAttribute('estado', 'i')
            botaoPlay.innerHTML = 'play';
        break;
    }
}

botaoPlay.onclick = () => {
    estadosBotaoPlay();
}