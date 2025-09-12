// function gretting (name: string) {
//     return `Hello ${name}`;
// }

// console.log(gretting("User"));

// function sum(num1: number, num2: number) {
    // return num1 + num2;
// }
// 
// console.log(sum(2, 2))


// function isLegal (age: number) {
    // if(age > 18) {
        // return true
    // }else {
        // return false
    // }
// }
// 
// let obj1 = isLegal(13);
// 
// console.log(obj1)


function delayedCall (fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(()=> {
    console.log("hell0 there")
})