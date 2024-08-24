"use strict";
//クラス
class User_Sou {
    name = "";
    age = 0;
    isAdult() {
        return this.age >= 20;
    }
    setAge(newAge) {
        this.age = newAge;
    }
}
class User_Sou_option {
    name;
    age = 0;
}
const Sou = new User_Sou();
Sou.age = 31;
const isAdult = Sou.isAdult();
Sou.setAge(20);
//コンストラクタ
class User_constract_obj {
    //静的プロパティ　
    static userAdmin = "sousuke";
    static userAdminAge = 100;
    name;
    age; //readonlyも可能
    data;
    constructor(name, age, data) {
        this.name = name;
        this.age = age;
        this.data = data;
    }
}
const Sou_constract = new User_constract_obj("sousuke", 23);
//クラスオブジェクトに直接アクセス
User_constract_obj.userAdmin;
class user_constract_obj1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//継承
class standardUser {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
//extendsで子クラスにする
class premiumUser extends standardUser {
    // //子クラス特有のプロパティ
    // rank:string = "gold";
    //子クラスでコンストラクタ使う場合
    rank;
    //子クラスでコンストラクタを使う場合はsuperが必要
    //まず親のコンストラクタを動かす、という宣言を明示的に行う
    //子クラスにコンストラクタが必要ない場合、勝手に親クラスのコンストラクタが使用される
    constructor(name, age, rank) {
        super(name, age);
        this.rank = rank;
    }
    //親クラスのプロパティやメソッドを上書き（オーバーライド）できる
    //ただし関数型が一致するときのみ
    isAdult() {
        return true;
    }
}
//継承した子クラス作成
//const Sousuke = new premiumUser("sousuke",31)
const Sousuke = new premiumUser("sousuke", 31, "gold");
//standerdUser（親クラス）のプロパティにアクセスできる
console.log(Sousuke.age);
console.log(Sousuke.rank);
//もちろん継承された子クラスは親クラスの部分型になる
//例えばstandardUser型の引数に
//premiumUser型のオブジェクトを引数に取ることができる
const helloUser = (u) => {
    return `こんにちは。${u.name}さん`;
};
const greedName = helloUser(Sousuke);
const Sousuke_isAdult = Sousuke.isAdult;
console.log(Sousuke_isAdult());
//わざとエラーを起こす
try {
    console.log("エラー発生させます");
    throwError();
    console.log("エラー発生後"); //ここは実行されない
}
catch (error) {
    console.log("エラーをキャッチしました");
    console.log(error);
    console.log("おわり");
}
function throwError() {
    //エラーオブジェクトをインスタンス化
    const error = new Error("エラー発生しました！！！！");
    //throw 式　で実行する式を指定する
    throw error;
}
