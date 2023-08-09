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

function iniciarContagem() {    
    controleParada = setInterval(() => {
        contarSegundos();
    }, 1000);
}

// função que para o cronometro.
function pararContagem() {
    clearInterval(controleParada);
    pararSom();
}

function estadosBotaoPlay() {
    switch (botaoPlay.getAttribute('estado')) {
        case 'i':
            botaoPlay.setAttribute('estado', 'p')
            botaoPlay.innerHTML = 'stop';
            iniciarContagem();
        break;
        case 'p':
            botaoPlay.setAttribute('estado', 'c')
            botaoPlay.innerHTML = `Continue`
            pararContagem();
        break;
        case 'c':
            botaoPlay.setAttribute('estado', 'p')
            botaoPlay.innerHTML = 'stop';
            iniciarContagem();
        break;
    }
}


const audio = document.querySelector("audio");
function iniciarSom() {
    audio.play();  
}

function pararSom() { 
    audio.pause();  
}

function contarSegundos(){
    if (p_minutos <= 0) {
        if (p_segundos == 0) {
            segundo.innerHTML = '00';
            clearInterval(i_contarSegundos);
            botaoPlay.setAttribute('estado', 'i');
            botaoPlay.innerHTML = 'play';
            return;
        }
    }else{
        if(p_segundos == 0){
            p_segundos = 59;
            p_minutos--;
            minuto.innerHTML = p_minutos.innerHTML = p_minutos < 10 ? `0${p_minutos}` : p_minutos;
            segundo.innerHTML = '59';
            return;
        }
    }
    p_segundos--
    segundo.innerHTML = p_segundos < 10 ? `0${p_segundos}` : p_segundos;
}

botaoPlay.onclick = () => {
    estadosBotaoPlay();
}