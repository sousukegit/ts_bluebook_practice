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

function range(min:number,max:number):number[]{
    const result = []
    for(let i = min; i < max; i++){
        result.push(i);
    }
    return result;
}

function sayHello(n:number):void {
    for(let i = n; i < n; i++){
        console.log("hello");
    }
}

//関数式
type Human = {
    weight:number;
    height:number;
};

const calcBMI = function(human:Human):number  {
    const BMI:number = human.weight / human.height ** 2
    return BMI
};
const calcBMI_b = function({weight,height}:Human):number  {
    const BMI:number = weight / height ** 2
    return BMI
};

const calcBMI_allow = ({weight,height}:Human):number => {
    const BMI:number = weight / height ** 2
    return BMI
};
const calcBMI_short = ({weight,height}:Human):number =>  weight / height ** 2;

function nandemoArray<T>(element:T,length:number):T[]{
    const result:T[] = []
    for(let i = 0;i < length;i++){
        result.push(element)
    }
    return result
}

const nandemoArray_f = function<T>(element:T,length:number):T[]{
    const result:T[] = []
    for(let i = 0;i < length;i++){
        result.push(element)
    }
    return result
}

const nandemoArray_a = <T>(element:T,length:number):T[] => {
    const result:T[] = []
    for(let i = 0;i < length;i++){
        result.push(element)
    }
    return result
}

const nandemoArray_o = {
    nandemoArray<T>(element:T,num:number):T[]{
        const result:T[] = []
        for(let i = 0;i < length;i++){
            result.push(element)
        }
        return result
    }
}

const pair = <Left,Right>(left:Left,right:Right):[Left,Right] => {
    return [left,right]
}
const p = pair("manabe",30)

const nandemoArray_ex = <T extends {name:string}>(element:T,length:number):T[] => {
    const result:T[] = []
    for(let i = 0;i < length;i++){
        result.push(element)
    }
    return result
}

type Pet = {
    name:string;
    age:number;
};

console.log(nandemoArray_ex({
    name:"udon",
    age:4
},3))


//クラス

class User_Sou {
    name:string = "";
    age:number = 0; 
 
    isAdult():boolean{
     return this.age >= 20;
    }
 
    setAge(newAge:number):void{
     this.age = newAge
    }
 }
 class User_Sou_option {
     name?:string;
     age:number = 0; 
  }
 const Sou = new User_Sou();
 Sou.age = 31;

 const isAdult:boolean = Sou.isAdult()
 Sou.setAge(20)

 //コンストラクタ
 class User_constract_obj<T>{
    //静的プロパティ　
    static userAdmin:string = "sousuke";
    static userAdminAge:number = 100;

    name:string;
    readonly age:number; //readonlyも可能
    data?:T;


    constructor(name:string,age:number,data?:T){
        this.name = name;
        this.age = age;
        this.data = data;
    }

 }

 const Sou_constract = new User_constract_obj("sousuke",23)
//クラスオブジェクトに直接アクセス
User_constract_obj.userAdmin

class user_constract_obj1{
    constructor(public name:string,private age:number){}
}

class standardUser{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}
class premiumUser extends standardUser{
    rank:string = "gold"
}
const Sousuke = new premiumUser("sousuke",31)
console.log(Sousuke.age)
console.log(Sousuke.rank)
