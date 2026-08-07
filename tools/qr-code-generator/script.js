function generateQR(){

    const text = document.getElementById("text").value.trim();

    if(text === ""){
        alert("Enter a URL or text.");
        return;
    }

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.H
    });
}