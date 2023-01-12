/*an event is signal that something has happened, all DOM nodes generate such signals
some important DOM events are:
1. Mouse Events: click, contextmenu(right click), mouseover/mouseout, mousedown/ mouseup, mousemove
2. Keyboard Events: keydown, keyup, keypress 
3. form element events: submit, focus etc
4. document events: DOMCOntentLoaded
*/

//soln 1 to solve the problem of writing js in html
let a = document.getElementsByClassName("container")[0]
// console.log(a)
a.onclick = () =>{
    // console.log("You have clicked on the container")
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML = "Hello World"
}

