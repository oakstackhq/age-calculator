const box = document.getElementById("text");

function upper(){
    box.value = box.value.toUpperCase();
}

function lower(){
    box.value = box.value.toLowerCase();
}

function titleCase(){
    box.value = box.value
        .toLowerCase()
        .replace(/\b\w/g, c => c.toUpperCase());
}

function sentenceCase(){
    let text = box.value.toLowerCase();

    text = text.replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());

    box.value = text;
}

function copyText(){
    navigator.clipboard.writeText(box.value);

    const btn = event.target;
    const old = btn.innerText;

    btn.innerText = "Copied!";

    setTimeout(()=>{
        btn.innerText = old;
    },1000);
}