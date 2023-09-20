var input= document.getElementsByClassName("input");
var row=document.getElementsByClassName("row");
var inputResult=getElementsByClassName("result-div");


function addition(num1,num2){
    return num1+num2;
}
function subtruction(num1,num2){
    return num1-num2;
}
function multiplication(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}

row.addEventListener('click',()=>{
    input.textContent=row.textContent;
})

// function result(){
//     var expression=input.value;
//     var result = eval(expression);
    
// }