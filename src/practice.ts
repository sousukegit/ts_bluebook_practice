

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



