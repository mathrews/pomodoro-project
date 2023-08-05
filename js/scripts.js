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

let configDeCadaTempo = JSON.parse(localStorage.getItem('configuracaoDoTempo')) || [];

function verificarExistenciaDeConfigs() {
    if (configDeCadaTempo.length == 1) {
        configDeCadaTempo = [];
    }
    localStorage.setItem('configuraçaoDoTempo', JSON.stringify(configDeCadaTempo));
}

function submitarFormConfigsDeTempo(){
    event.preventDefault();
    verificarExistenciaDeConfigs();
    let configDoTempo = {
        tempoPomodoro: Number(pomodoroMinutes.value),
        tempoShort: Number(shortBreakMinutes.value),
        tempoLong: Number(longBreakMinutes.value)
    };
    configDeCadaTempo.push(configDoTempo);
    formDosTempos.reset();
    localStorage.setItem('configuraçaoDoTempo', JSON.stringify(configDeCadaTempo));
    pomodoroMode();
    overlay.classList.remove('activeOverlay');
    modal.classList.remove('activeModal');
}

function setarTempo(minutosParam) {
    if (minutosParam) {
        if (minutosParam < 10 && minutosParam >= 1) {
            minuto.innerHTML = `0${minutosParam}`;
        }
        else {
            minuto.innerHTML = `${minutosParam}`;
        }
    }
}

function pomodoroMode(){
    pomodoro.classList.add('active');
    shortBreak.classList.remove('active');
    longBreak.classList.remove('active');
    if (configDeCadaTempo[0].tempoPomodoro == 0) {
        minuto.innerHTML = `00`;
    }
    setarTempo(configDeCadaTempo[0].tempoPomodoro);
}

function shortBreakMode(){
    shortBreak.classList.add('active');
    longBreak.classList.remove('active');
    pomodoro.classList.remove('active');
    if (configDeCadaTempo[0].tempoShort == 0) {
        minuto.innerHTML = `00`;
    }
    setarTempo(configDeCadaTempo[0].tempoShort);
}

function longBreakMode(){
    longBreak.classList.add('active');
    shortBreak.classList.remove('active');
    pomodoro.classList.remove('active');
    if (configDeCadaTempo[0].tempoLong == 0) {
        minuto.innerHTML = `00`;
    }
    setarTempo(configDeCadaTempo[0].tempoLong);
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