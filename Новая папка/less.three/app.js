var names = ['meerim', 'madina', 'ruslan', 'daniyar', 'bahtiyar']
var blacklist = ['Aidana','ruslan', 'john', 'bahtiyar']
for (var i = 0; i < names.length; i++){
    if (blacklist.includes(names[i].toLowerCase())){
        console.warn( `${names[i]} in blacklist`)
        continue
    }
    console.log(`Welcome, dear guest &{names[i]}`)
}

printDelimiter()

//for..of
var children = [2007, 1994, 2021, 2003, 2010, 2015, 1998, 2019, 2000, 2013, 2022, 2007]
var currentYear = 2023
var gifts = 0
for (var child of children){
    var childAge = currentYear - child
    if (children >= 6 && childAge <= 11){
        gifts++
    }
}
console.log(`Gifts total: ${gifts} of ${children.length}`)

printDelimiter()

//for..in
var cars = {
    BMW : '7 марта 1916 год',
    Mersedez_Benz : '2828 июня 1926 год',
    Rolls_Royce: '10 февраля 2011 год',
}
for (var key in cars){
    var foundinngDate = cars[key]
    console.log(`${key} был основан ${foundinngDate}`)
}
printDelimiter()

for (var key2 of Object.keys (cars)){
    console.log(key2)
}


//функции
//function-declaration
function printDelimiter(){
    console.log('_'.repeat(100))
}

printDelimiter()

//function-expression
var doCalc = function (num1, num2){
    console.log(num1 + num2)
}
doCalc(3, 10) 

// вариант 1
// function getMax(num1, num2){
//     if (num1 > num2){
//         console.log(num1)
//     }else{
//         console.log(num2)
//     }
// }
// getMax(12,8)

//вариант 2
var getMax = (n1, n2) => console.log(n1 > n2 ? n1 : n2)
getMax(4, 6)

function printPromt(name){
    console.log(name)
}
printPromt(prompt())