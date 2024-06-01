const tijd = document.querySelector('#timer')
const gameOverTekst = document.querySelector('#gameOver')
const eindScore = document.querySelector('#score')
const gameOverInstructieTekst = document.querySelector('#gameOverInstructies')

const geluidSpring = new Audio("./audio/geluidSpring.mp3") //Laten zien door Marieke in de les
const geluidSlide = new Audio("./audio/geluidSlide.mp3")
const geluidGameOver = new Audio("./audio/geluidGameOver.mp3")

geluidSpring.volume = 0.1

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
}, 10)

// Timer om elke seconde de animatie kans te berekenen
let animatieLoop1 = setInterval(startAnimatieTot10, 2600)
let animatieLoop2 = setInterval(startAnimatieTot20, 2100)
let animatieLoop3 = setInterval(startAnimatieTot30, 1800)
let animatieLoop4 = setInterval(startAnimatieTot40, 1500)
let animatieLoop5 = setInterval(startAnimatieTot50, 1200)
let animatieLoop6 = setInterval(startAnimatieTot60, 1000)
let animatieLoop7 = setInterval(startAnimatieVan60, 900)

// Functie om animaties willekeurig te starten t/m 15 seconden
function startAnimatieTot10() {
    if (spelLoopt && counter > 0 && counter <= 10) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 2.5s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 2.5')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 2500)
        }
        else {
            plafond.style.animation = 'obstakelSlide 2.5s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 2.5')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 2500)
        }}    
}

function startAnimatieTot20() {
    if (spelLoopt && counter > 11 && counter <= 20) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 2s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 2')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 2000)
        }
        else {
            plafond.style.animation = 'obstakelSlide 2s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 2')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 2000)
        }}    
}

function startAnimatieTot30() {
    if (spelLoopt && counter > 21 && counter <= 30) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 1.7s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 1.7')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 1700)
        }
        else {
            plafond.style.animation = 'obstakelSlide 1.7s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 1.7')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 1700)
        }}    
}

function startAnimatieTot40() {
    if (spelLoopt && counter > 31 && counter <= 40) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 1.4s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 1.4')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 1400)
        }
        else {
            plafond.style.animation = 'obstakelSlide 1.4s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 1.4')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 1400)
        }}    
}

function startAnimatieTot50() {
    if (spelLoopt && counter > 41 && counter <= 50) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 1.1s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 1.1')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 1100)
        }
        else {
            plafond.style.animation = 'obstakelSlide 1.1s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 1.1')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 1100)
        }}    
}

function startAnimatieTot60() {
    if (spelLoopt && counter > 51 && counter <= 60) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 0.9s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 0.9')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 900)
        }
        else {
            plafond.style.animation = 'obstakelSlide 0.9s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 0.9')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 900)
        }}    
}

function startAnimatieVan60() {
    if (spelLoopt && counter > 61) {
        if (Math.random() < 0.5) {
            muur.style.animation = 'obstakelSlide 0.8s linear'
            muur.style.animationPlayState = 'running'
            console.log('Muur komt! 0.8')

            setTimeout (function() {
                muur.style.animation = 'none'
                muur.style.animationPlayState = 'paused'
            }, 800)
        }
        else {
            plafond.style.animation = 'obstakelSlide 0.8s linear'
            plafond.style.animationPlayState = 'running'
            console.log('Plafond komt! 0.8')

            setTimeout (function () {
                plafond.style.animation = 'none'
                plafond.style.animationPlayState = 'paused'
            }, 800)
        }}    
}

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
    }, 500)
}

//function om poppetje te laten sliden
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
            muur.style.animation = ''
            plafond.style.animation = ''

            muur.style.animationPlayState = 'running'
            plafond.style.animationPlayState = 'running'
        }, 100)
    }
}


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


