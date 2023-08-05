let myHeading=document.querySelector("h1");
myHeading.textContent="hello world!";
let myVariable="李磊";
let yourVariable=[1,'李雷','韩美',10];
let iceCream='chocolate';
if(iceCream=='chocolate'){
    alert("我最喜欢巧克力冰淇淋了。");
}else{
    alert("但是巧克力才是我的最爱呀。。。");
}

let myID=document.querySelector('h1');
let myCD=document.querySelector('p');
alert("hello!");
function multiply(num1,num2){
    let result=num1*num2;
    return result;
}
multiply(4,6);
multiply(20,20);
//点击事件
document.querySelector('html').addEventListener("click",function(){
    alert("别戳我，我怕疼。");
});
document.querySelector("html").addEventListener("click",()=>{
    alert("别戳我，我怕疼");
});