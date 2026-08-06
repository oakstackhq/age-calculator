const length=document.getElementById("length");
const lengthValue=document.getElementById("lengthValue");

length.oninput=()=>{
lengthValue.innerText=length.value;
};

function generatePassword(){

let chars="";

if(document.getElementById("uppercase").checked)
chars+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if(document.getElementById("lowercase").checked)
chars+="abcdefghijklmnopqrstuvwxyz";

if(document.getElementById("numbers").checked)
chars+="0123456789";

if(document.getElementById("symbols").checked)
chars+="!@#$%^&*()_-+=<>?/{}[]";

if(chars===""){
alert("Select at least one option.");
return;
}

let password="";

for(let i=0;i<length.value;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("password").value=password;

}

function copyPassword(){

const box=document.getElementById("password");

box.select();

document.execCommand("copy");

}

generatePassword();