// const loadScript = async (src)=>{
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => console.log(`${src} is loaded!`);
//     document.head.append(script);
// }


//question1
// const main2 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }

// main2();

//question 3

// let p1 = async()=>{ return new Promise((resolve, reject)=>{
//     setTimeout(() => reject(new Error("Error")), 3000)
// })};

// let a = async ()=>{
//     try{
//         let result = await p1();
//         console.log(result);
//     }catch(e){
//         console.log(e.name);
//     }
// }

// a()