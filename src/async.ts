import {readFile} from "fs";
import { performance } from "perf_hooks";
import * as fs_p from "fs/promises";

//非同期処理
//ファイルを読み込むという非同期処理が終了したら、コールバック関数実行
const startTime = performance.now()
const data = readFile("practice.txt","utf-8",(err,data)=>{
    const endTime = performance.now()
    console.log(`${endTime-startTime}ミリ秒かかりました`)
})

console.log(data)

//非同期処理に渡した関数は同期処理が終わるまで実行されない
setTimeout(()=>{console.log("タイマーが呼び出されました")},100);

const startTime_2 = performance.now();
let count = 0;
while(performance.now()-startTime_2<1000){
    count ++;
}
console.log(count);

//promise
//promise版のFSを使う
const p = fs_p.readFile("practice.txt","utf-8")
//非同期処理が終わった後、then以降の関数が実行される
p.then((data)=>{console.log(data)})
