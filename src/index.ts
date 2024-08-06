const manabe:string = "hello";
console.log(manabe);

type Family<Parent,Child> = {
    mother:Parent;
    father:Parent;
    child:Child;
}

const ManabeFamily:Family<string,string> = {
    mother:"mie",
    father:"yasusi",
    child:"sou"
}

type HasName = {
    name: string;
};

type HasNameFamily<Parent extends HasName,Child extends HasName> = {
    mother:Parent;
    father:Parent;
    child:Child;
}

type People = {
    name:string;
    sex:string;
}

const nameFam:HasNameFamily<People,People> = {
    mother:{name:"mie",sex:"female"},
    father:{name:"yasusi",sex:"male"},
    child:{name:"sou",sex:"male"}
}

const arr1:string[] = ["manabe","kochu"]
const arr2:Array<{name:string}> = [{name:"kochu"},{name:"manabe"}]

const arr3: readonly number[] = [1,10,100]

for(const num of arr3){
    console.log(num)
}

type Drink = {
    label:string;
    price?:number;
    kinds:string;
    shape:{
        capShape:string;
        bottleShape:string;
    }
}

const JapaneseTee:Drink = {
    label:"緑茶",
    price:100,
    kinds:"tee",
    shape:{
        capShape:"circle",
        bottleShape:"500ml"
    }
} 

const {label:labelname = "ayataka", price = "600"} = JapaneseTee
const {kinds = "milk",shape:{capShape} } = JapaneseTee

const {label,...restObj} = JapaneseTee

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
function range(min:number,max:number):number[]{
    const result = []
    for(let i = min; i < max; i++){
        result.push(i)
    }
    return result;
}


