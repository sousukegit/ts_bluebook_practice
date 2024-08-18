type Animal = {
    species:string;
    name:string;
}
type Man = {
    species:string;
}
type unionUser = Animal | Man

//コンパイルエラー
const getName = (user:unionUser):string => {
    return user.name;
}
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
type GetTimeFunc = () => Date;
const useTime = (getTimeFunc:GetTimeFunc|undefined):void =>{
    //引数として関数が存在したら実行する
    const timeOrUndefined = getTimeFunc?.();
}
//オブジェクトが存在すれば実行（メソッド呼び出しオプショナル）
