console.log("Первое задание:")
var task1 = [4, 6, 16, 73, 5]
var result1 = 0
function sumArray(a) {
    a.forEach(x => { result1 += x})
    return result1
}
console.log("Сумма всех элементов: " + sumArray(task1) + "\n")

console.log("Второе задание:")
var task2 = [1, -3, -2, 4, 10]
function getAboveZero(a) {
    return a.filter(x => x >= 0)
}
console.log("Массив положительных чисел: " + getAboveZero(task2) + "\n")

console.log("Третье задание:")
var task31 = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy']
var test31 = ['AppleJack']
var task32 = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy']
var test32 = ['Spike']
function getPonies(a, b){
    if(a.find(result3 => result3 == b)){
        return a.find(result3 => result3 == b)
    }else{
        return "пони с таким именем в списке нет"
    }
}
console.log("Пони: " + getPonies(task31, test31))
console.log("Пони: " + getPonies(task32, test32) + "\n")

console.log("Четвертое задание:")
var task41 = ['0xaea0', '0x8f80', '0xf3ad', '0x17ec']
var test41 = ['0xaea0']
var task42 = ['0xaea0', '0x8f80', '0xf3ad', '0x17ec']
var test42 = ['0x9e0a']
function isTxIncluded(bk, tx){
    if(bk.find(result3 => result3 == tx)){
        return true
    }else{
        return false
    }
}
console.log("Транзакция tx входит в блок транзакий bk: " + isTxIncluded(task41, test41))
console.log("Транзакция tx входит в блок транзакий bk: " + isTxIncluded(task42, test42) + "\n")

console.log("Пятое задание:")
var task5 = ["Moscow", "Coding", "School"]
var result51 = ""
var result52 = ""
function getSizes(a){
    a.forEach(x => {
        x.split("")
        j = 0
        for(i = 0; i < x.length; i++){
            j = j + 1
        }
        result51 += j
    })
    for(i = 0; i < a.length; i++){
        if(a.length - i > 1) result52 += result51[i] + ", "
        else result52 += result51[i]
    }
    return "[" + result52 + "]"
}
console.log("Длины элементов в строке: " + getSizes(task5) + "\n")

console.log("Шестое задание:")
var task6 = ["Moscow", "never", "sleep"]
var result6 = 0
function getWithSpaces(a){
    a.forEach(x => {
        x.split("")
        j = 0
        for(i = 0; i < x.length; i++){
            j = j + 1
        }
        result6 += j
    })
    return "[''" + a.join(" ") + " '']" + ", " + result6
}
console.log("Объединенный массив и длина всех элементов в строке: " + getWithSpaces(task6) + "\n")

console.log("Седьмое задание:")
var anime = {
    title: "Code Geass",
    episodes: 25
}
function getEpisodes(anime){
    return "Аниме " + anime.title + " включает " + anime.episodes + " серий"
}
console.log(getEpisodes(anime) + "\n")

console.log("Восьмое задание:")
var task8 = 2
const triple = (a) => {
    return a * 3
}
console.log("Параметр умноженный на 3: " + triple(task8) + "\n")

console.log("Девятое задание:")
task9 = [5.4, 8.1, 6.3, 4.9]
var result9 = 0
function getAvgGlucose(checks) {
    checks.forEach(x => { result9 += x})
    return (result9/checks.length).toFixed(1)
}
console.log("Среднее арифметическое замеров глюкозы: " + getAvgGlucose(task9))