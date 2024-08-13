

type User = {
    name:string;
    age:number;
    premiumUser:boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

//改行コードで配列に分ける
const lines:Array<string> = data.split("/n")
//ユーザー型の配列を作る
const Users:Array<User> = []

//
for(const userInfo of lines){
    if(userInfo === ""){
        continue;
    }
    
    //配列の分割代入を行う
    const [name,ageString,premiumUserString] = userInfo.split(",");
    //splitの戻り値は文字型なので、指定の方に戻す
    const age = Number(ageString);
    const premiumUser = premiumUserString === "1"

    Users.push({name,age,premiumUser})
    
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




const getFizzBuzzString = (num:number):string => {

    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz"
    }
    else if(num % 3 === 0 ) {
        return "Fizz"
    }
    else if(num % 5 === 0){
        return "Buzz"
    }
    else{
        return String(num)
    }
}

const sequence = (min:number,max:number):number[] => {
    const numarray:number[] = [];
    for(let i = min;i<=max;i++){
        numarray.push(i);
    }
    return numarray;
}

for(const i of sequence(1,100)){
    const message = getFizzBuzzString(i);
    console.log(message)
}

//map関数作ろう
function map(num:number[],callback:(x:number)=>number):number[]{
    const array:number[] = [];

    // Forofで書けるので修正
    // for(let i = 0; i < num.length; i++){
    //     const changenum = callback(array[i]);
    //     num[i] = changenum;
    // }

    for(const i of num){
        array.push(callback(num[i]));
    }
    return array;
}
const data_num_a = [1, 1, 2, 3, 5, 8, 13];

const result = map(data_num_a, (x) => x * 10);
// [10, 10, 20, 30, 50, 80, 130] と表示される
console.log(result);

//ジェネリクス使ったmap関数作ろう
const j_map = <T,U>(array:T[],callback:(x:T)=>U):U[] => {
    const return_array:U[] = [];

    for(const i of array){
        return_array.push(callback(i))
    }

    return return_array;
}

const data_tako = [1, -3, -2, 8, 0, -1];
const result_tako: boolean[] = j_map(data_tako, (x) => x >= 0);

class User_practice{
    //ここはコンストラクタ以外で使用しないので読み取り専用に
    readonly name:string;
    readonly age:number;

    constructor(name:string,age:number){
        if(name === ""){
            throw new Error("名前がないよ")
        }

        this.name = name;
        this.age = age;
    }

    getMessage(message:string):string{
        return `${this.name}+(${this.age}「${message}」)`;
    }
}

const createUser = (name:string,age:number):(message:string)=>void =>{
    const getMessage = (message:string):void => {
       console.log(`${name}+(${age}「${message}」)`);
    }
    
    return getMessage
}

