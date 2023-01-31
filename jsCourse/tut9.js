const head1 = document.querySelector(".heading1")
const head2 = document.querySelector(".heading2")
const head3 = document.querySelector(".heading3")
const head4 = document.querySelector(".heading4")
const head5 = document.querySelector(".heading5")
const head6 = document.querySelector(".heading6")


// this is call back hell 
// setTimeout(function(){
//     head1.style.color = "orange";
//     setTimeout(function(){
//         head2.style.color = "red";
//         setTimeout(function(){
//             head3.style.color = "yellow";
//             setTimeout(() => {
//                 head4.style.color = "green";
//                 setTimeout(() => {
//                     head5.style.color = "purple";
//                     setTimeout(() => {
//                         head6.style.color = "black";
//                         head6.style.color = "black";
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000)
//     }, 2000)
// }, 1000)

function makingcolor(heading, time, color, success, failure) {
    setTimeout(() => {
        heading.style.color = color;
        if (success) {
            success();
        }
        else {
            failure();
        }
    }, time);
}

// pyramid of dome 
makingcolor(head1, 1000, "yellow", () => {
    makingcolor(head2, 1000, "orange", () => {
        makingcolor(head3, 1000, "red", () => {
            makingcolor(head4, 1000, "purple", () => {
                makingcolor(head5, 1000, "brown", () => {
                    makingcolor(head6, 1000, "green", () => {
                    }, () => { console.log("error") })
                }, () => { console.log("error") })
            }, () => { console.log("error") })
        }, () => { console.log("error") })
    }, () => { console.log("error") })
}, () => { console.log("error") })