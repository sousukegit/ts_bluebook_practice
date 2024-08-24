type Animal = {
    species:string;
    name:string;
}
type Man = {
    species:string;
}
type unionUser = Animal | Man

//コンパイルエラー
// const getName = (user:unionUser):string => {
//     return user.name;
// }
//インターセクション型
type Human_inter = Animal & {age:number}

const hu_in:Human_inter = {
    species:"human",
    name:"manabe",
    age:23
}
type Takagi = {
    name:string;
    age?:number;
}

//下記は意味が違う
//この型はageプロパティを持たないと型エラーとなる
type Takagi_undfined = {
    name:string;
    age:number|undefined;
}

//「データだけないかもしれない可能性」を表現したいだけの場合に向いている
//例えば、先ほどのオプショナルだと、プロパティが「存在しない」のか「値がない」のかわからない
//プロパティの省略に特に強い動機がない場合はこちらの方が型エラーとなるので安心


//オプショナルチェイニング
//値がないときにプロパティにアクセスする
const useMaybyAnimal = (animal:Animal|undefined):void => {
    const name = animal?.name;
    console.log(name)
}
//関数呼び出しの場合にも使用する
//関数自体が存在すれば実行（関数呼び出しオプショナル）
//関数が与えられているときのみ呼び出したい
//用途：ボタンなどのUIコンポーネントに仕込む関数など
type GetTimeFunc = () => Date;
const useTime = (getTimeFunc:GetTimeFunc|undefined):void =>{
    //引数として関数が存在したら実行する
    const timeOrUndefined = getTimeFunc?.();
}
//オブジェクトが存在すれば実行（メソッド呼び出しオプショナル）
type loginUser = {isAdult():boolean}
const checkFuncAdultUser = (loginuser:loginUser|null):void =>{
    if(loginuser?.isAdult()){
        console.log("オトナのコンテンツ見せて上げる")
    }
}

//リテラル型
//その値しか代入ができない型
//"foo"という型の意味は「"foo"という文字列のみが代入できる型」
type FooString = "foo";
const foostring:FooString = "foo"; // このようにしか使用できない
const foostring_a = "foo"; //これもリテラル型（"foo"型）

//おもにリテラル型のユニオン型で使用されることがTSで多い
//いくつかの特定の値のみを受け付けたいという場合にユニオン型とリテラル型の組み合わせが非常に適している
const plusOrMinus = (hugou:"plus"|"minus") : number => {
    return hugou === "plus" ? 1 :-1;
}

//型アサーション
function getFirstFiveLetters(strOrNum: string | number) {
    const str = strOrNum as string;
    return str.slice(0, 5);
  }
  
  // "uhyoh" と表示される
  console.log(getFirstFiveLetters("uhyohyohyo"));
  
  // ランタイムエラーが発生！
  console.log(getFirstFiveLetters(123));

//any型
const doWhatever = (obj:any) => {
    //好きなプロパティにアクセス
    console.log(obj.user.name);
    //関数もOK
    obj();
    //計算もOK
    const result = obj * 3;
    //文字型もOK
    const moji:string = obj;

}
//コンパイルエラーがでないが必ずランタイムエラー
doWhatever("a")

//ユーザー定義型ガード（型述語）

//sometingの型を絞り込む機能
//isStringOrNumberの戻り値は真偽値だけど、戻り値がtrueだった場合
//somethingにstring|number型が付与される
const isStringOrNumber = (value:unknown):value is string|number => {
    return typeof value === "string" || typeof value === "number";
}
const something:unknown = 232;

if(isStringOrNumber(something)){
    //ここでsomething_numはstring|number型
    console.log(something.toString());
}