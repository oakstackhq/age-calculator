function calculate(){

    const percent = parseFloat(document.getElementById("percent").value);
    const number = parseFloat(document.getElementById("number").value);

    if(isNaN(percent) || isNaN(number)){
        document.getElementById("result").innerText="Enter both numbers.";
        return;
    }

    const answer = (percent / 100) * number;

    document.getElementById("result").innerText =
        `${percent}% of ${number} = ${answer.toLocaleString()}`;
}