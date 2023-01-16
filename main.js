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

document.addEventListener("click", function (e) {
    if (e.target === x) {
        x.style.backgroundColor = '#0077ff2b'
    }
    x.onblur = function () {
        x.style.backgroundColor = 'rgba(136, 136, 136, 0.074)' 
        b.style.color = 'rgba(0, 0, 0, 0.524)'
    }
})
document.addEventListener("click", function (e) {
    if (e.target === x1) {
        x1.style.backgroundColor = '#0d6ad5b0'
    }
    x1.onblur = function () {
        x1.style.backgroundColor = 'rgba(136, 136, 136, 0.074)' 
        b1.style.color = 'rgba(0, 0, 0, 0.524)'
    }
})
document.addEventListener("click", function (e) {
    if (e.target === x2) {
        x2.style.backgroundColor = 'rgba(136, 136, 136, 0.375)'
    }
    x2.onblur = function () {
        x2.style.backgroundColor = 'rgba(136, 136, 136, 0.074)' 
        b2.style.color = 'rgba(0, 0, 0, 0.524)'
    }
})
document.addEventListener("click", function (e) {
    if (e.target === x3) {
        x3.style.backgroundColor = '#f443364e'
    }
    x3.onblur = function () {
        x3.style.backgroundColor = 'rgba(136, 136, 136, 0.074)' 
        b3.style.color = 'rgba(0, 0, 0, 0.524)'
    }
})

// document.addEventListener("click", function (e) {
//     if (e.target === x ) {
         
//         let y =setTimeout( function () {
//             alert("Write Your Twitter UserName!")
            
//         } ,100)
//        document.onclick = function () {
//         clearTimeout(y)
//     }

//     }
// })




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




 