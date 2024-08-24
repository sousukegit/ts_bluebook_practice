import * as fs from "fs";

const fileText:string = fs.readFileSync("practice.txt",{encoding:"utf-8"})

let startIndex = 0;
let count = 0;

while(true){
    let nextIndex =  fileText.indexOf("uhyo",startIndex);
    if(nextIndex >= 0){
        count += 1;
        startIndex = nextIndex + 1;
    }else{
        break;
    }
}
console.log(count)