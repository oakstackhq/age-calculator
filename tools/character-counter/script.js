const text = document.getElementById("text");

text.addEventListener("input", update);

function update(){

    const value = text.value;

    const characters = value.length;

    const noSpaces = value.replace(/\s/g, "").length;

    const letters = (value.match(/[A-Za-z]/g) || []).length;

    const numbers = (value.match(/[0-9]/g) || []).length;

    const spaces = (value.match(/\s/g) || []).length;

    const lines = value === "" ? 0 : value.split(/\r?\n/).length;

    document.getElementById("characters").textContent = characters;

    document.getElementById("noSpaces").textContent = noSpaces;

    document.getElementById("letters").textContent = letters;

    document.getElementById("numbers").textContent = numbers;

    document.getElementById("spaces").textContent = spaces;

    document.getElementById("lines").textContent = lines;
}

update();