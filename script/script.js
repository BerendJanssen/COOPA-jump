const tijd = document.querySelector('#timer')
const gameOverTekst = document.querySelector('#gameOver')
const eindScore = document.querySelector('#score')
const gameOverInstructieTekst = document.querySelector('#gameOverInstructies')

const geluidSpring = new Audio("./audio/geluidSpring.mp3") //Laten zien door Marieke in de les
const geluidSlide = new Audio("./audio/geluidSlide.mp3")
const geluidGameOver = new Audio("./audio/geluidGameOver.mp3")

let pop = document.querySelector('#pop')
let muur = document.querySelector('#muur')
let plafond = document.querySelector('#plafond')

let counter = 0
let spelLoopt = true
let animatieLoop = setInterval(startAnimatie, 2600)

const gameLoop = setInterval(function () {
    if (spelLoopt) {
        gameOver()
    }
}, 10)

// Functie om animatie snelheid te bepalen + muren en plafonds randomizen
function startAnimatie() {
    if (spelLoopt) {
        if (counter <= 10) {
            snelheid = 2.5
        }
        else if (counter <= 20) {
            snelheid = 2.0
            clearInterval(animatieLoop)
            animatieLoop = setInterval(startAnimatie, 2100)
        }
        else if (counter <= 30) {
            snelheid = 1.7
            clearInterval(animatieLoop)
            animatieLoop = setInterval(startAnimatie, 1800)
        }
        else if (counter <= 40) {
            snelheid = 1.4
            clearInterval(animatieLoop)
            animatieLoop = setInterval(startAnimatie, 1500)
        }
        else if (counter <= 50) {
            snelheid = 1.1
            clearInterval(animatieLoop)
            animatieLoop = setInterval(startAnimatie, 1200)
        }
        else if (counter <= 60) {
            snelheid = 0.9
            clearInterval(animatieLoop)
            animatieLoop = setInterval(startAnimatie, 1000)
        }
        else {
            snelheid = 0.8
            clearInterval(animatieLoop)
            animatieLoop = setInterval(startAnimatie, 900)
        }


        if (Math.random() < 0.5) {
            muur.style.animation = `obstakelSlide ${snelheid}s linear`
            muur.style.animationPlayState = 'running'
            console.log('Muur!')
        } else {
            plafond.style.animation = `obstakelSlide ${snelheid}s linear`
            plafond.style.animationPlayState = 'running'
            console.log('Plafond!')
        }
    }
}

function eindMuurAnimatie() {
    muur.style.animation = 'none'
    muur.style.animationPlayState = 'paused'
}

function eindPlafondAnimatie() {
    plafond.style.animation = 'none'
    plafond.style.animationPlayState = 'paused'
}

//function voor de timer/score
function count() {
    if (spelLoopt) {
        tijd.textContent = counter
        counter += 1
    }
}

function springen() {
    if (!pop.classList.contains('springen')) {
        pop.classList.add('springen')
        geluidSpring.play()
    }
    setTimeout(function () {
        pop.classList.remove('springen')
        geluidSpring.load()
    }, 500)
}

function sliden() {
    if (!pop.classList.contains('sliden')) {
        pop.classList.add('sliden')
        pop.style.backgroundImage = 'url(./images/sliden.png)'
        geluidSlide.play();
    }
    setTimeout(function () {
        pop.classList.remove('sliden')
        pop.style.backgroundImage = 'url(./images/pop.png)'
        geluidSlide.load()
    }, 500)
}

// Functie om te controleren wanneer rechthoeken elkaar raken
function collision(rect1, rect2) {
    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)
}

// Functie om 'Game Over' te laten zien en het spel te stoppen - x.getBoundingClientRect aangeraden door Ninti
function gameOver() {
    const popHitbox = pop.getBoundingClientRect()
    const muurHitbox = muur.getBoundingClientRect()
    const plafondHitbox = plafond.getBoundingClientRect()

    if (collision(popHitbox, muurHitbox) || collision(popHitbox, plafondHitbox)) {
        console.log('Game Over')
        spelLoopt = false
        geluidGameOver.play()
        gameOverTekst.textContent = 'Game Over'
        gameOverInstructieTekst.textContent = 'Klik om opnieuw te starten'
        tijd.textContent = ''
        eindScore.textContent = 'Score: ' + counter

        muur.style.animationPlayState = 'paused'
        plafond.style.animationPlayState = 'paused'

        setTimeout(function () {
            geluidGameOver.load()
        }, 3000)
    }
}

function startOpnieuw() {
    if (spelLoopt === false) {
        counter = 0
        tijd.textContent = '0'
        spelLoopt = true
        gameOverTekst.textContent = ''
        eindScore.textContent = ''
        gameOverInstructieTekst.textContent = ''

        muur.style.animation = 'none'
        plafond.style.animation = 'none'

        setTimeout(function () {
            muur.style.animation = ''
            plafond.style.animation = ''

            muur.style.animationPlayState = 'running'
            plafond.style.animationPlayState = 'running'
        }, 100)
    }
}

muur.addEventListener('animationend', eindMuurAnimatie)
plafond.addEventListener('animationend', eindPlafondAnimatie)

document.addEventListener('click', startOpnieuw)

//Event listeners die de key 'w' en 's' koppelen aan springen en sliden - https://www.toptal.com/developers/keycode handige website aangeraden door Manuel
document.addEventListener('keypress', function (event) {
    if (event.key === 'w') {
        springen()
    }
    else if (event.key === 's') {
        sliden()
    }
})

//start de timer
setInterval(count, 1000)

geluidSpring.volume = 0.1


