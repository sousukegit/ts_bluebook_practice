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