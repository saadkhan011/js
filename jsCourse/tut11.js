// setTimeout in promises 

function mypromise(){
    return new Promise((resolve, reject)=>{
        const value = true;
        setTimeout(()=>{
            if (value) {
                resolve()
            }
            else{
                reject()
            }
        }, 2000)
    })
}

mypromise().then(()=>{
    console.log("resolved")
}).catch(()=>{
    console.log("rejected")
})

// Promise.resolve  
// Promise resolve will return promise with resolve value 5
const myResolvePromise = Promise.resolve(5);
myResolvePromise.then((value)=>{
    console.log(value)
})



// Promise chaining 
// then method always return promise 

function mychainPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo")
    })
}
mychainPromise().then(
    (value)=>{
        console.log(value)
        value += "bar"
        // value is not a string it is promise so we are returning promise 
        // console.log(value)
        return value;
        // if we dont return any value then js will return undeefined 
    })
    .then(value=>{
        console.log(value)
        value += "baaz";
        return value;
    })
    .then(value=>{
        console.log(value)
    })


// converting pyramid of dom in promises
const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")

function makingcolor(heading, time, color) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            heading.style.color = color;
            resolve()
        }, time);
    })
}

makingcolor(head1, 1000, "red")
.then((value)=>{
    return makingcolor(head2, 1000, "orange")
}).then(()=>{
    return makingcolor(head3, 1000, "brown")
})
.then(()=>{
    return makingcolor(head4, 1000, "purple")
})
.then(()=>{
    return makingcolor(head5, 1000, "green")
})
.then(()=>{
    makingcolor(head6, 1000, "yellow")
})
