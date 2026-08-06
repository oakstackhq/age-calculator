function calculateTip(){

    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("tip").value);

    if(isNaN(bill) || isNaN(tip)){
        document.getElementById("result").innerText = "Enter both values.";
        return;
    }

    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;

    document.getElementById("result").innerHTML =
        `Tip: <strong>$${tipAmount.toFixed(2)}</strong><br>
         Total: <strong>$${total.toFixed(2)}</strong>`;
}