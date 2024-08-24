"use strict";
const hu_in = {
    species: "human",
    name: "manabe",
    age: 23
};
//「データだけないかもしれない可能性」を表現したいだけの場合に向いている
//例えば、先ほどのオプショナルだと、プロパティが「存在しない」のか「値がない」のかわからない
//プロパティの省略に特に強い動機がない場合はこちらの方が型エラーとなるので安心
//オプショナルチェイニング
//値がないときにプロパティにアクセスする
const useMaybyAnimal = (animal) => {
    const name = animal?.name;
    console.log(name);
};
const useTime = (getTimeFunc) => {
    //引数として関数が存在したら実行する
    const timeOrUndefined = getTimeFunc?.();
};
const checkFuncAdultUser = (loginuser) => {
    if (loginuser?.isAdult()) {
        console.log("オトナのコンテンツ見せて上げる");
    }
};
const foostring = "foo"; // このようにしか使用できない
const foostring_a = "foo"; //これもリテラル型（"foo"型）
//おもにリテラル型のユニオン型で使用されることがTSで多い
//いくつかの特定の値のみを受け付けたいという場合にユニオン型とリテラル型の組み合わせが非常に適している
const plusOrMinus = (hugou) => {
    return hugou === "plus" ? 1 : -1;
};
//型アサーション
function getFirstFiveLetters(strOrNum) {
    const str = strOrNum;
    return str.slice(0, 5);
}
// "uhyoh" と表示される
console.log(getFirstFiveLetters("uhyohyohyo"));
// ランタイムエラーが発生！
console.log(getFirstFiveLetters(123));
//any型
const doWhatever = (obj) => {
    //好きなプロパティにアクセス
    console.log(obj.user.name);
    //関数もOK
    obj();
    //計算もOK
    const result = obj * 3;
    //文字型もOK
    const moji = obj;
};
//コンパイルエラーがでないが必ずランタイムエラー
doWhatever("a");
//ユーザー定義型ガード（型述語）
//sometingの型を絞り込む機能
//isStringOrNumberの戻り値は真偽値だけど、戻り値がtrueだった場合
//somethingにstring|number型が付与される
const isStringOrNumber = (value) => {
    return typeof value === "string" || typeof value === "number";
};
const something = 232;
if (isStringOrNumber(something)) {
    //ここでsomething_numはstring|number型
    console.log(something.toString());
}
