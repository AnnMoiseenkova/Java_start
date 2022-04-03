// // // var div = document.getElementById("playground")
// // // var p = document.getElementsByClassName("text")
// // // var h1 = document.getElementsByTagName("h1")
// // // console.log(div)
// // // console.log(p)
// // // console.log(h1)

// // var div = document.querySelector("#playground")
// // var p = document.querySelectorAll(".text")
// // var h1 = document.querySelector("h1")
// // var ul = document.querySelector("div#playground > div ul")
// // // var input = document.querySelector(`input`)
// // // div.innerHTML = `<h2 style="color: red;">Hello</h2>`
// // // h1.textContent =`Changed from JS`
// // //console.log(input.value);
// // // console.log(div.innerHTML);
// // console.log(p);
// // console.log(div);
// // console.log(ul);
// // console.log(h1.textContent)

// // var a = document.querySelector(`a`)
// // // var oldHref = a.getAttribute(`href`)

// // a.setAttribute(`href`, `https://www.youtube.com/playlist?list=PLqKQF2ojwm3l6OE4-tjLBhUNtJXLebHXP`)
// // a.textContent = `Courses`
// // console.log(a.getAttribute(`href`));

// // var box1 = document.querySelector('#box1')
// // var box2 = document.querySelector('#box2')

// // box1.classList.add('red')

// // var hasClass = box2.classList.contains('blue')
// // console.log(hasClass);

// // if(hasClass) {
// //     box2.classList.remove('blue')
// // } else {
// //     box2.classList.add('blue')
// // }

// // var button = document.querySelector('button')
// // var h1 = document.querySelector('h1')
// // var input = document.querySelector('input')

// // //function buttonClick() {
// // //    console.log('clicked');
// //   //  h1.textContent = 'Changed from JS'
// // //}

// // function buttonClick() {
// //     console.log('clicked');
// //     h1.textContent = input.value
// // }

// // button.addEventListener('click', buttonClick)

// // // h1.addEventListener('mouseenter', function () {
// // //     console.log('Mouse has entered');  
// // // })

// // h1.addEventListener('mouseleave', function () {
// //     console.log('Mouse has left');  
// // })

// // h1.addEventListener('mouseenter', function () {
// //     this.style.color = 'red' 
// //     this.style.backgroundColor = 'yellow' 
// // })

// // h1.addEventListener('mouseleave', function() {
// //     this.style.color = 'black';  
// //     this.style.backgroundColor = 'transparent'
// // })

// var divs = document.querySelectorAll('div')
// var link = document.querySelector('a')

// // for (var i = 0; i < divs.length; i++) {
// //     divs[i].addEventListener('click', function() {
// //         console.log(this.getAttribute('id'));        
// //     }, true)
// // }

// for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function(event) {
//         event.stopPropagation()
//         console.log(this.getAttribute('id'));        
//     })
// }

// link.addEventListener('click', handleLinkClick)

// function handleLinkClick (event) {
//     event.preventDefault()

//     var div = divs[0]

//     if (div.style.display === 'none') {
//         div.style.display = 'flex'
//     } else {
//         div.style.display = 'none'
//     }

    // div.style.display = div.style.display === 'none'
    //     ? 'flex'
    //     : 'none'

//     console.log(div.style.display);    
// } 

// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event) {
//         event.target.style.color = 'blue'
//     })
// }

// document.getElementById('wrapper').addEventListener('click', function(event) {
//     var tagName = event.target.tagName.toLowerCase()
    
//     if (tagName === 'p') {
//         event.target.style.color = 'blue'
//     }

//     if (event.target.classList.contains('color')) {
//         event.target.style.color = 'red'
//     }
// })

// document.querySelector('#alert').addEventListener('click', function() {
//     alert('Start')
// })

// document.querySelector('#confirm').addEventListener('click', function() {
//     var decision = confirm('are you sure?')

//     if (decision) {
//         alert('Start')
//     } else {
//         alert('Stop')
//     }
// })

// document.querySelector('#prompt').addEventListener('click', function() {
//     var age = prompt('Write your age') // ('Write your age', 18 - значение по умолчанию)

//     if (age >= 18) {
//         alert('It`s okay')
//     } else {
//         alert('Young')
//     }
// })

// var str ='1,2,3,4,5,6,7,8'
// var array = str.split(',')
// // console.log(array);
// // var array2 = array.join(';')
// // console.log(array.reverse());


// // array.splice(0, 3)
// console.log(array);

// array.splice(1, 0, '9')
// console.log(array);

// var newArray = array.concat(['2', '3'])
// console.log(newArray);

// var objArr = [
//     {name: 'Ed', age: 26},
//     {name: 'Ann', age: 24},
//     {name: 'Danik', age: 19}   
// ]

// var foundPerson = objArr.find(function(person) {
//     return person.age === 24
// });

// console.log(foundPerson);

// var oddArray = [1,2,3,4,5,6,7,8].filter(function(i) {
//     return i% 2 !==0
// })
// console.log(oddArray);

// var numArray = array.map(function(i) {
//     return i * 2
// })

// console.log(numArray);

// console.log(array);

// var num = 2.2

// console.log(Math.floor(num));

// var man = {
//     name: 'Ed',
//     age: 26,
//     car: {
//         model: 'ford'
//     },
//     job: 'Frontend',
//     friends: ['Ann', 'Den']
// }

// var manStr = JSON.stringify(man);
// console.log(manStr);

// console.log(JSON.parse(manStr));

// var date = new Date();

// console.log(date.getDay(), date.getDate());


document.querySelector('button').addEventListener('click', function(event) {
    
    var value = document.querySelector('input').value

    console.log(value);
    
    var obj = {
        text: value
    }
    
    localStorage.setItem('hey', JSON.stringify(obj))
})

document.addEventListener('DOMContentLoaded', function() {
    var obj = {}
    try {
        obj = JSON.parse(localStorage.getItem('hey'))
    } catch (e) {}
    
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text 
    }
})