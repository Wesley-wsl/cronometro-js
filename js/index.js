let $start = document.querySelector('[data-js="start"]')
let $stop = document.querySelector('[data-js="stop"]')
let $reset = document.querySelector('[data-js="reset"]')
let $setTimer = document.querySelector('#timer')
let mm = 00
let ss = 00
let ms = 00
let timer

$start.addEventListener('click', Start)
$stop.addEventListener('click', Stop)
$reset.addEventListener('click', Reset)

function Start() {
    timer = setInterval(() => {
        ms += 1
        Timer()
    }, 10)

    $start.setAttribute('disabled', '')
}

function Stop() {
    clearInterval(timer)
    $start.removeAttribute('disabled')
}

function Reset() {
    $setTimer.innerText = '00:00:00'
    mm = 00
    ss = 00
    ms = 00
    Stop()
}

function Timer() {

    if (ms == 100) {
        ss += 1
        ms = 00
    }

    if (ss == 60) {
        mm += 1
        ss = 00
    }

    if (mm == 60) {
        Stop()
    }

    let format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ms < 10 ? '0' + ms : ms)
    $setTimer.innerText = format
}