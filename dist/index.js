"use strict";
const manabe = "hello";
console.log(manabe);
const ManabeFamily = {
    mother: "mie",
    father: "yasusi",
    child: "sou"
};
const nameFam = {
    mother: { name: "mie", sex: "female" },
    father: { name: "yasusi", sex: "male" },
    child: { name: "sou", sex: "male" }
};
const arr1 = ["manabe", "kochu"];
const arr2 = [{ name: "kochu" }, { name: "manabe" }];
const arr3 = [1, 10, 100];
for (const num of arr3) {
    console.log(num);
}
const JapaneseTee = {
    label: "緑茶",
    price: 100,
    kinds: "tee",
    shape: {
        capShape: "circle",
        bottleShape: "500ml"
    }
};
const { label: labelname = "ayataka", price = "600" } = JapaneseTee;
const { kinds = "milk", shape: { capShape } } = JapaneseTee;
const { label, ...restObj } = JapaneseTee;
function range(min, max) {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}
function sayHello(n) {
    for (let i = n; i < n; i++) {
        console.log("hello");
    }
}
const calcBMI = function (human) {
    const BMI = human.weight / human.height ** 2;
    return BMI;
};
const calcBMI_b = function ({ weight, height }) {
    const BMI = weight / height ** 2;
    return BMI;
};
const calcBMI_allow = ({ weight, height }) => {
    const BMI = weight / height ** 2;
    return BMI;
};
const calcBMI_short = ({ weight, height }) => weight / height ** 2;
function nandemoArray(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
const nandemoArray_f = function (element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
const nandemoArray_a = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
const nandemoArray_o = {
    nandemoArray(element, num) {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    }
};
const pair = (left, right) => {
    return [left, right];
};
const p = pair("manabe", 30);
const nandemoArray_ex = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(nandemoArray_ex({
    name: "udon",
    age: 4
}, 3));
