const tijd = document.querySelector('#timer')
const gameOverTekst = document.querySelector('#gameOver')
const gameOverInstructieTekst = document.querySelector('#gameOverInstructies')
const geluidSpring = new Audio("./audio/geluidSpring.mp3") //Laten zien door Marieke in de les
const geluidSlide = new Audio("./audio/geluidSlide.mp3")
const geluidGameOver = new Audio("./audio/geluidGameOver.mp3")

let pop = document.querySelector('#pop')
let muur = document.querySelector('#muur')
let plafond = document.querySelector('#plafond')
let counter = 0
let spelLoopt = true

// Start de game loop, checkt elke 0.1s of er collision is 
const gameLoop = setInterval(function () {
    if (spelLoopt) {
        gameOver()
    }
}, 100)

//function voor de timer/score
function count() {
    if (spelLoopt) {
        tijd.textContent = counter
        counter += 1
    }
}   

//function om het poppetje te laten springen
function springen() {
    if (!pop.classList.contains('springen')) {
        pop.classList.add('springen')
        geluidSpring.play()
    }
    setTimeout(function () {
        pop.classList.remove('springen')
        geluidSpring.load()
    }, 500);
}

//function om poppetje te laten sliden
function sliden() {
    if (!pop.classList.contains('sliden')) {
        pop.classList.add('sliden')
        geluidSlide.play();
    }
    setTimeout(function () {
        pop.classList.remove('sliden')
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
        tijd.textContent = 'Eindscore: ' + counter

        muur.style.animationPlayState = 'paused'
        plafond.style.animationPlayState = 'paused'

        setTimeout(function () {
            geluidGameOver.load()
        }, 3000)
    }
}

//Function die bepaalt wat er gebeurd als je opnieuw wil beginnen
function startOpnieuw() {
    if (spelLoopt === false) {
        counter = 0
        tijd.textContent = '0'
        spelLoopt = true
        gameOverTekst.textContent = ''
        gameOverInstructieTekst.textContent = ''

        muur.style.animation = 'none'
        plafond.style.animation = 'none'

        setTimeout(function () {
            muur.style.animation = 'slide 3s linear infinite'
            plafond.style.animation = 'slide 2.5s linear infinite'

            muur.style.animationPlayState = 'running'
            plafond.style.animationPlayState = 'running'
        }, 100)
    }
}

document.addEventListener('click', startOpnieuw)
//Event listener die keydown 'w' koppelt aan springen - https://www.toptal.com/developers/keycode handige website aangeraden door Manuel
document.addEventListener('keypress', function (event) {
    if (event.key === 'w') {
        springen()
    }
})

//Event listener die keydown 's' koppelt aan sliden
document.addEventListener('keypress', function (event) {
    if (event.key === 's') {
        sliden()
    }
})

//start de timer
setInterval(count, 1000)


