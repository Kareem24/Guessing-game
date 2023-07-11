const reset = document.querySelector('.reset')
const mysteryNumber = document.querySelector('.mystery-number')
const input = document.querySelector('#input')
const message = document.querySelector('.message')
const score = document.querySelector('.score-number')
const highScore = document.querySelector('.highscore-number')
const check = document.querySelector('.check')
const main = document.querySelector('.main')
let mysteryDigit = Math.trunc(Math.random() * 20 + 1);
let scoreDigit = 20
let highScoreDigit = 0
highScore.textContent = highScoreDigit
const showMsg = (element, text) => element.textContent = text
const checkInput = () => {
    const inputNumber = Number(input.value);
    if (inputNumber === mysteryDigit) {
        showMsg(message, 'correct!')
        showMsg(mysteryNumber, mysteryDigit)
        main.classList.add('win')
        if (scoreDigit > highScoreDigit) {
            highScoreDigit = scoreDigit
            showMsg(highScore, highScoreDigit)
        }
        return
    }
    if (input.value === '') {
        showMsg(message, 'input number between(1 - 20)')
        return
    }
    if (inputNumber > 1 && inputNumber <= 20) {
        message.textContent = inputNumber > mysteryDigit ? 'too high' : 'too low';

    } else {
        showMsg(message, 'input number between(1 - 20)')
    }
    scoreDigit--
    if (scoreDigit < 1) {
        showMsg(message, 'game over')
        check.removeEventListener('click', checkInput)
        scoreDigit = 0
    }
    showMsg(score, scoreDigit)

}
const resetGame = () => {
    check.addEventListener('click', checkInput)
    mysteryDigit = Math.trunc(Math.random() * 20 + 1);
    main.classList.remove('win')
    showMsg(mysteryNumber, '?')
    input.value = ''
    showMsg(message, 'Start Guessing...')
    if (scoreDigit > highScoreDigit && message.textContent === 'correct!') {
        highScoreDigit = scoreDigit
        showMsg(highScore, highScoreDigit)
    }
    showMsg(highScore, highScoreDigit)
    scoreDigit = 20
    showMsg(score, scoreDigit)
}
check.addEventListener('click', checkInput)
reset.addEventListener('click', resetGame)
