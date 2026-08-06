const text=document.getElementById("text");

text.addEventListener("input",update);

function update(){

const value=text.value;

const words=value.trim()===""
?0
:value.trim().split(/\s+/).length;

const characters=value.length;

const charactersNoSpaces=value.replace(/\s/g,"").length;

const sentences=value.trim()===""
?0
:value.split(/[.!?]+/).filter(s=>s.trim().length>0).length;

const paragraphs=value.trim()===""
?0
:value.split(/\n\s*\n/).filter(p=>p.trim().length>0).length;

const reading=Math.max(1,Math.ceil(words/200));

document.getElementById("words").innerText=words;
document.getElementById("characters").innerText=characters;
document.getElementById("charactersNoSpaces").innerText=charactersNoSpaces;
document.getElementById("sentences").innerText=sentences;
document.getElementById("paragraphs").innerText=paragraphs;
document.getElementById("reading").innerText=reading+" min";

}

update();