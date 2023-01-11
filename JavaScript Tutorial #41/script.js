let x = document.getElementsByTagName('span')[0]
console.log(x)
console.dir(x)

//innerHTML returns everything inside that element
//ex-> first.innerHTML returns
// <b>HI</b> this is a span' as a string.

/*
first.outerHTML
'<span id="first"> <b>HI</b> this is a span</span>'
so outerhtml gives everything, innerHTML + element itself
*/
