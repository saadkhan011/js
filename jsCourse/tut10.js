// promises 

// produce 
const bucket = ["chips", "coffee", "salt", "rice", "vegetables"];
// resolve will give the true value and reject will give false value 
const friedricePromise = new Promise((resolve, reject)=>{
    if (bucket.includes("vegetables")&& bucket.includes("rice")&& bucket.includes("salt")){
        resolve("fried rice")
    }
    else{
        reject("couldn't do it")
    }
}) 

// consume
friedricePromise.then((value)=>{
    // value have resolve data 
    // the resolve info come into value 
    console.log("let eat :", value);
}).catch((data)=>{
    // reject  value comes into data 
    console.log(data)
})

// promise is asynchronus task because it provide by browser
// if we add both settimeout method and promise method
// then first synchronus js will run then promise will run then settimeout will run. 

// Promise add in microtask queue 
// setTimeout add in callback queue 
// vanilla js add in call stack 

// vanilla js have higher prority then prromise then setTimeout 

// see example

console.log("script start")

setTimeout(() => {
   console.log("settimeout") 
}, 0);

friedricePromise.then(()=>{
    console.log("promise")
})



for (let index = 0; index < 10; index++) {
    console.log("inside loop");   
}
console.log("script end")




















// friedricePromise.then((value)=>{
//     console.log("let eat :", value);
// },
// (error)=>{
//     console.log(error)
// })