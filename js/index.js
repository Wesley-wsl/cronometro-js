let $inputMain = document.querySelector('#MainInput')
let $start = document.querySelector('[data-js="start"]')
let $stop = document.querySelector('[data-js="stop"]')
let $reset = document.querySelector('[data-js="reset"]')
let timer

function Start() {
    timer = setTimeout(() => {
        $inputMain.value = Number($inputMain.value) + 1
        Start()
    }, 1000)
    $start.setAttribute('disabled','')
}

function Stop() {
    clearTimeout(timer)
    $start.removeAttribute('disabled')
}

function Reset() {
    $inputMain.value = 0
    Stop()
}