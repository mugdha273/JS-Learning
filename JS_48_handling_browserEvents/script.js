btn = document.getElementById("btn")
console.log(btn)

//these happens when one process is completed, although you can ask for another process to be done by stopping the first one to execute
// btn.addEventListener('click',function(){
//     alert("you are into a click event")
// })

// btn.addEventListener('click',function(){
//     alert("you are into a click event2")
// })


//if you want to remove the event listener

let x= function(){
    alert("you are into a click event1")
}

let y= function(){
    alert("you are into a click event2")
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("do you want to remove the event listener?")

if(a=="yes"){
    btn.removeEventListener('click',x)
}