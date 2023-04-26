const number1 = document.querySelector('#inputAge')
const result1 = document.querySelector('#resultFirstExercise')
const number2 = document.querySelector('#inputRemainder')
const result2 = document.querySelector('#resultSecondExercise')
const number3 = document.querySelector('#inputfaceControl')
const result3 = document.querySelector('#resultThirdExercise')
const number4 = document.querySelector('#inputNextAge')
const result4 = document.querySelector('#resultFourthExercise')
const number5 = document.querySelector('#inputcanRide')
const result5 = document.querySelector('#resultFifthExercise')

function getAge(arg1){
    arg1++
    return arg1.toString()
}

number1.addEventListener("input", () => {
    
    result1.textContent = getAge(number1.value)
    
})

function getRemainder(arg2){
    arg2 = arg2 % 3
    return arg2.toString()
}

number2.addEventListener("input", () => {
    
    result2.textContent = getRemainder(number2.value)
    
})

function faceControl(arg3){
    if(arg3 >= 18){
        arg3 = "Welcome"
    }else{
        arg3 = "Отказ"
    }
    return arg3.toString()
}
number3.addEventListener("input", () => {
    result3.textContent = faceControl(number3.value)
    
})

function getNextAge(arg4){
    if(arg4){
        arg4++
        return arg4.toString()
    }else{
        arg4 = 0
        return arg4.toString()
    }
}

number4.addEventListener("input", () => {
    
    result4.textContent = getNextAge(number4.value)
    
})

function canRide(arg5){
    return Boolean(arg5 >= 140).toString()
}

number5.addEventListener("input", () => {
    
    result5.textContent = canRide(number5.value)
    
})