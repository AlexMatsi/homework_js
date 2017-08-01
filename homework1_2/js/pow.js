const numPower    = prompt('Enter num');
const powerPrompt = prompt('Enter power');
const myPow = (num,power)=>{
    let out = num;
    for(let i = 1;i<power;i++){
         out *= num;
    }
    return out;
}
console.log(myPow(numPower,powerPrompt));
