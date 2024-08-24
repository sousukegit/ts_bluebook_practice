const data = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
//改行コードで配列に分ける
const lines = data.split("/n");
//ユーザー型の配列を作る
const Users = [];
//
for (const userInfo of lines) {
    if (userInfo === "") {
        continue;
    }
    //配列の分割代入を行う
    const [name, ageString, premiumUserString] = userInfo.split(",");
    //splitの戻り値は文字型なので、指定の方に戻す
    const age = Number(ageString);
    const premiumUser = premiumUserString === "1";
    Users.push({ name, age, premiumUser });
    //私のくそコード
    // const userInfoArray = userInfo.split(",");
    // if(userInfoArray[2] === 1){
    // }
    // let user:User = {
    //     name:userInfoArray[0],
    //     age:userInfoArray[1],
    //     premiumUser:userInfoArray[2],
    // }
}
const getFizzBuzzString = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }
    else if (num % 5 === 0) {
        return "Buzz";
    }
    else {
        return String(num);
    }
};
const sequence = (min, max) => {
    const numarray = [];
    for (let i = min; i <= max; i++) {
        numarray.push(i);
    }
    return numarray;
};
for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
}
//map関数作ろう
function map(num, callback) {
    const array = [];
    // Forofで書けるので修正
    // for(let i = 0; i < num.length; i++){
    //     const changenum = callback(array[i]);
    //     num[i] = changenum;
    // }
    for (const i of num) {
        array.push(callback(num[i]));
    }
    return array;
}
const data_num_a = [1, 1, 2, 3, 5, 8, 13];
const result = map(data_num_a, (x) => x * 10);
// [10, 10, 20, 30, 50, 80, 130] と表示される
console.log(result);
//ジェネリクス使ったmap関数作ろう
const j_map = (array, callback) => {
    const return_array = [];
    for (const i of array) {
        return_array.push(callback(i));
    }
    return return_array;
};
const data_tako = [1, -3, -2, 8, 0, -1];
const result_tako = j_map(data_tako, (x) => x >= 0);
class User_practice {
    //ここはコンストラクタ以外で使用しないので読み取り専用に
    name;
    age;
    constructor(name, age) {
        if (name === "") {
            throw new Error("名前がないよ");
        }
        this.name = name;
        this.age = age;
    }
    getMessage(message) {
        return `${this.name}+(${this.age}「${message}」)`;
    }
}
const createUser = (name, age) => {
    const getMessage = (message) => {
        console.log(`${name}+(${age}「${message}」)`);
    };
    return getMessage;
};
const isMan = (obj) => {
    return obj.tag === "man";
};
const getAge = (obj) => {
    if (obj.tag === "man") {
        console.log(obj.age);
    }
};
const getAge2 = (obj) => {
    if (isMan(obj)) {
        console.log(obj.age);
    }
};
const examMan = {
    tag: "man",
    age: 2
};
getAge(examMan);
// const isMan = (value:unknown):value is "man" => {
//     return value
// }
// const mapOption = <T>(obj:Option<T>,func:(num:number) => number):Option<T> => {
//     if(obj.tag === "man"){
//         return 
//     }
// }
//戻りにはどちらの型が変えるかわからないのでUをつかう
const mapOption = (opt, callback) => {
    if (opt.tag === "man") {
        return { tag: "man", age: callback(opt.age) };
    }
    else {
        return { tag: "none" };
    }
};
export { mapOption };
