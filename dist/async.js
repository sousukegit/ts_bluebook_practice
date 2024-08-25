import { readFile } from "fs";
import { performance } from "perf_hooks";
import * as fs_p from "fs/promises";
//非同期処理
//ファイルを読み込むという非同期処理が終了したら、コールバック関数実行
const startTime = performance.now();
const data = readFile("practice.txt", "utf-8", (err, data) => {
    const endTime = performance.now();
    console.log(`${endTime - startTime}ミリ秒かかりました`);
});
console.log(data);
//非同期処理に渡した関数は同期処理が終わるまで実行されない
setTimeout(() => { console.log("タイマーが呼び出されました"); }, 100);
const startTime_2 = performance.now();
let count = 0;
while (performance.now() - startTime_2 < 1000) {
    count++;
}
console.log(count);
//promise
//promise版のFSを使う
const p = fs_p.readFile("practice.txt", "utf-8");
//非同期処理が終わった後、then以降の関数が実行される
p.then((data) => { console.log(data); });
//非同期処理のエラーはランタイムエラーでもコンパイルエラーも起こらない
//プログラマーが適切に処理することが大事
//非同期処理が失敗したときの処理の書き方は２つある
//※errorはany型とデフォルトでなっているので、unknown型にしておく
//①catchを別に入れる方法
p.then((data) => { console.log(data); });
p.catch((error) => { console.log("失敗", error); });
//②thenに、成功も失敗もコールバック関数を入れる方法
p.then((data) => { console.log(data); }, (error) => { console.log("失敗", error); });
//Promiseオブジェクトをつくる
//promiseのコンストラクタ型引数と1つの引数を持つ
//引数は(resolve)=>{...}というexecuterと呼ばれる関数
//executer関数はコンストラクタ時に即時に実行される
//resolveはnew Promiseで内部的に用意される関数
//中の非同期処理が終わったらresolveを実行してということで送られてくる
//この例でいうとsetTimeoutという非同期処理が終わったらresleveを実行
//多くの場合、new PromiseによるPromiseの作成は、コールバック関数ベースの非同期処理をPromiseに変換するために行われます。
//このexecuter関数は3秒後にresolveが実行されるような関数
//Promiseオブジェクト「createP」は未解決状態で、3秒後に解決される
//これによりcreateP.then()で登録された処理が3秒後に実行される
//resolveに渡した100はPromiseの結果
//3秒後に解決するとき、結果は100になる
//
const createP = new Promise((resolve) => {
    setTimeout(() => { resolve(100); }, 3000);
});
createP.then((data) => { console.log("createP:" + data); });
