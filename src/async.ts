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

//非同期処理のエラーはランタイムエラーでもコンパイルエラーも起こらない
//プログラマーが適切に処理することが大事

//非同期処理が失敗したときの処理の書き方は２つある
//※errorはany型とデフォルトでなっているので、unknown型にしておく
//①catchを別に入れる方法
p.then((data)=>{console.log(data)})
p.catch((error:unknown)=>{console.log("失敗",error)})
//②thenに、成功も失敗もコールバック関数を入れる方法
p.then((data)=>{console.log(data)},(error:unknown)=>{console.log("失敗",error)})

//Promiseオブジェクトをつくる
//promiseのコンストラクタ型引数と1つの引数を持つ
//引数は(resolve)=>{...}というexecuterと呼ばれる関数
//executer関数はコンストラクタ時に即時に実行される

//resolveはnew Promiseで内部的に用意される関数
//関数を使用する際のコールバック関数に当たる部分と思うとわかりやすい

//executer関数内の非同期処理が終わったらresolveを実行してということで送られてくる
//この例でいうとsetTimeoutという非同期処理が終わったらresleveを実行
//多くの場合、new PromiseによるPromiseの作成は、コールバック関数ベースの非同期処理をPromiseに変換するために行われます。

//このexecuter関数は3秒後にresolveが実行されるような関数
//Promiseオブジェクト「createP」は未解決状態で、3秒後に解決される
//これによりcreateP.then()で登録された処理が3秒後に実行される
//resolveに渡した100はPromiseの結果
//3秒後に解決するとき、結果は100になる
//
const createP= new Promise<number>((resolve) =>{
    setTimeout(() => {resolve(100)},3000)
})
//thenにセットした引数dataは必ず100になる
createP.then((data)=>{console.log("createP:"+data)})

//タイマーをPromiseでつくる
//thenでセットされたコールバック関数はresolveに当たる
//rejectは失敗したときの関数
const sleep = (duration:number) => {
    return new Promise<void>((resolve,reject) => {
        setTimeout(resolve,duration);
    })
}
sleep(3000).then(()=>console.log("3秒"))

//promiseの静的メソッド
//promiseに直接アクセスする方法

//即座に非同期処理が実行される
const goodResult = Promise.resolve(100)
goodResult.then((data)=>console.log("goodResult"+ data))
//意味は下記と同じ
const goodResult_2 = new Promise((resolve) => {resolve(100)})
//即座位に失敗する
const badResult = Promise.reject(100)
badResult.catch((error) => {console.log(error)});

//複数の非同期処理を配列にまとめる
//例　複数ファイルの読み込み
//どれか１つが失敗したら、reject（エラー時に実行するコールバック関数）が実行される
const pFoo = fs_p.readFile("foo.txt", "utf8");
const pBar = fs_p.readFile("bar.txt", "utf8");
const pBaz = fs_p.readFile("baz.txt", "utf8");

const p_all = Promise.all([pFoo, pBar, pBaz]);

p_all.then((results) => {
  console.log("foo.txt:", results[0]);
  console.log("bar.txt:", results[1]);
  console.log("baz.txt:", results[2]);
},(error)=>{console.log(error)});

// promiseチェーン
// then自体には新たなpromiseオブジェクトが帰ってくる
goodResult.then((data)=>console.log("goodResult"+ data)).then().catch
//最後のエラー処理のcatchの処理を必ず行う

//async/await
//async functionで必ず戻り値がpromiseが帰ってくる
//new Promise の returnではなく、promiseに結果が内包されたオブジェクトが帰ってくる
async function get3():Promise<number>{
    console.log("２：get3が呼び出されました")
    await sleep(1000)
    return 3
}
console.log("１：get3を呼び出しましす")
const p_get3:Promise<number> = get3();
p_get3.then((result)=>{console.log(`４：結果は${result}`)})
console.log("３：get3を呼び出しました")

const main = async() => {
    //インポート事態に非同期処理が必要なモノはimport()で記述できる
    const {readFile,writeFile} = await import("fs/promises");
    const naiyo = await readFile("practice.txt","utf-8");
    await writeFile("practice.txt",naiyo+naiyo);

    //await writeFileが失敗したときの処理はtry-catheで記述できる
    const main = async() => {
        //インポート事態に非同期処理が必要なモノはimport()で記述できる
        const {readFile,writeFile} = await import("fs/promises");
        const naiyo = await readFile("practice.txt","utf-8");
        await writeFile("practice.txt",naiyo+naiyo);
        //await writeFileが失敗したときの処理はtry-catheで記述できる
        try {
            console.log("書き込み終了");
        } catch (error) {
            console.log(error);
        }
    
    }
    
    main().then((data)=>{console.log("mainが完了した")})
    console.log("書き込み終了");
}

main().then((data)=>{console.log("mainが完了した")})
