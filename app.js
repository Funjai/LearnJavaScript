// let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ :")
// let random_number = Math.floor(Math.random() * 100)

// document.getElementById("random").innerHTML = random_number

// if(lotto_number == random_number){
//     document.getElementById("result").innerHTML = "ยินดีด้วย ! คุณถูกรางวัลเลขท้าย 2 ตัว"

// }else{
//     document.getElementById("result").innerHTML = "เสียใจด้วย ! คุณไม่ถูกรางวัลเลขท้าย 2 ตัว"
// }

// console.log(1 == 1)
// console.log(4 == "4")
// console.log(4 === "4")
// console.log(5 == 6)

// console.log("hello" != "Hello")

// let age = prompt("กรุณากรอกอายุของคุณ")
// if(age > 13) {
//     document.getElementById("content").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/X3bQzBhRMKQ?si=N_JQ5plVjcixkXFr\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
// }

// let score = prompt("คะแนนของคุณ :")
// if(score >= 80){
//     document.getElementById("result").innerHTML = "คุณได้เกรด A"
// }else if(score >= 70){
//     document.getElementById("result").innerHTML = "คุณได้เกรด B"
// }else if(score >= 60){
//     document.getElementById("result").innerHTML = "คุณได้เกรด C"
// }else if(score >= 50){
//     document.getElementById("result").innerHTML = "คุณได้เกรด D"
// }else{
//     document.getElementById("result").innerHTML = "คุณได้เกรด F"
// }

// let qrt = prompt("จำนวนสินค้า")
// let sum = 0
// for(var i = 1; i <= qrt; i++)
// {
//     let item_price = prompt("ราคาสินค้าชิ้นที่" + i)
//     sum = sum + parseInt(item_price)
//     document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + " : " +item_price +"บาท" + "<br>"  
// }
// document.getElementById("result").innerHTML = "ราคารวม" + sum + "บาท"

// let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ")
// for(var i = 0; i < round; i++){
//     var answer = prompt("หัว หรือ ก้อย")
//     var random_answer = ""
//     if(Math.floor(Math.random() *10) <= 4){
//         random_answer = "หัว"
//     }else{
//         random_answer = "ก้อย"
//     }

//     if(answer == random_answer){
//         alert("ตอบถูก ! ยินดีด้วย")
//     }else{
//         alert("ตอบผิด ! เสียใจด้วย")
//     }
//     console.log(random_answer+ ":" + answer)
// }

// while(prompt("ถ้าจะออกพิมพ์ Exit") != "Exit"){
//     document.getElementById("result").innerHTML += "ไม่ได้พิมพ์ Exit" + "<br>"
// }

// function sayHello(){
//     alert("Hello")
// }
// sayHello()
// sayHello()
// console.log("Exit")

// function toCelsius(){
//     let fahrenheit = prompt("Fahrenheit:")
//     let value = (fahrenheit = 32) * 5/9
//     document.getElementById("toCelsius").innerHTML = value.toFixed(2) + "°C";
// }

// function toFahrenheit(){
//     let celsius = prompt("Celsius:")
//     let value = (celsius * 9) / 5 + 32
//     document.getElementById("toFahrenheit").innerHTML = value.toFixed(2) + "°F"
// }
// toCelsius()
// toFahrenheit()

function toCelsius(fahrenheit){
    let value = (fahrenheit - 32) * 5/9
    return  value.toFixed(2) + "°C";
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<i>" + value+ "</i>"
}

function toFahrenheit(celsius){
    let value = (celsius * 9) / 5 + 32
   return value.toFixed(2) + "°F"
}
function toCelsiusProgram(value){
    alert(toCelsius(value))
}
function toFahrenheitProgram(value){
    alert(toFahrenheit(value))
}
// alert(toCelsius(150))
// display("toCelsius",toCelsius(150))
// alert(toFahrenheit(32))
// display("toFahrenheit",toFahrenheit(150))


// function sayHello(userName, userLastname){
//     return "Hello" + userName + "" + userLastname
// }
// function getAge(){
//     return 28
// }
// let userInput = prompt("Input your name :")
// alert(sayHello("userInput,BorntoDev"))