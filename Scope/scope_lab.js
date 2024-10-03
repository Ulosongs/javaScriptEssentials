//Global scope
var globalVar="I'm a global variable";
let globalLet="I'm also global, but scoped with let";
const globalConst="I'm a global constant";

{
// Block scope
var blockVar = "I'm a block-scope var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

function show(){
// Block scope
var functionVar = "I'm a block-scope var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);

// console.log(blockVar);
// console.log(blockLet);