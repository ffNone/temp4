let x = document.getElementById("first")
let b = document.getElementById("firstt")

let x1 = document.getElementById("second")
let b1 = document.getElementById("secondd")
let x2 = document.getElementById("third")
let b2 = document.getElementById("thirdd")
let x3 = document.getElementById("fourth")
let b3 = document.getElementById("fourthh")


x.onfocus = function () {
    b.style.color = 'black'
}
x.onblur = function () {
    b.style.color = 'rgba(0, 0, 0, 0.524)'
}
x1.onfocus = function () {
    b1.style.color = 'black'
}
x1.onblur = function () {
    b1.style.color = 'rgba(0, 0, 0, 0.524)'
}
x2.onfocus = function () {
    b2.style.color = 'black'
}
x2.onblur = function () {
    b2.style.color = 'rgba(0, 0, 0, 0.524)'
}
x3.onfocus = function () {
    b3.style.color = 'black'
}
x3.onblur = function () {
    b3.style.color = 'rgba(0, 0, 0, 0.524)'
}






let megaman = document.getElementById("megaman")
let zero = document.getElementById("zero")
let sigma = document.getElementById("sigma")


megaman.onclick = function () {
    sigma.style = 'none';
    zero.style = 'none';
    megaman.style.cssText = 'border: 2px solid #0075ff; color: #0075ff;'
}

zero.onclick = function () {
    megaman.style = 'none';
    sigma.style = 'none';
    zero.style.cssText = 'border: 2px solid #0075ff; color: #0075ff;'
}

sigma.onclick = function() {
    zero.style = 'none';
    megaman.style = 'none';
    sigma.style.cssText = 'border: 2px solid #0075ff; color: #0075ff;'
}




 