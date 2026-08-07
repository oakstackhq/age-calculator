let qr;

function generateQR(){

    const text = document.getElementById("text").value.trim();

    if(text === ""){
        alert("Enter a URL or text.");
        return;
    }

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    qr = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        correctLevel: QRCode.CorrectLevel.H
    });

    const downloadButton = document.getElementById("download");

    downloadButton.style.display = "block";

    if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
        downloadButton.innerText = "Save QR Code";
    } else {
        downloadButton.innerText = "Download PNG";
    }
}


function downloadQR(){

    const canvas = document.querySelector("#qrcode canvas");

    if(!canvas){
        alert("Generate a QR code first.");
        return;
    }

    /*
     * iPhone / iPad
     * Show the QR image directly so the user can
     * press and hold it and save it to Photos.
     */
    if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){

        const image = document.createElement("img");

        image.src = canvas.toDataURL("image/png");
        image.alt = "Generated QR Code";

        image.style.width = "256px";
        image.style.height = "256px";
        image.style.display = "block";
        image.style.margin = "25px auto 10px";
        image.style.background = "#fff";
        image.style.padding = "10px";
        image.style.border = "1px solid #ddd";
        image.style.borderRadius = "10px";

        const existing = document.getElementById("saveImage");

        if(existing){
            existing.remove();
        }

        const saveArea = document.createElement("div");

        saveArea.id = "saveImage";

        saveArea.innerHTML =
            "<p><strong>Press and hold the QR code below to save it.</strong></p>";

        saveArea.appendChild(image);

        document.getElementById("qrcode").appendChild(saveArea);

        return;
    }

    /*
     * Desktop
     */
    canvas.toBlob(function(blob){

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "oakstack-qr-code.png";

        document.body.appendChild(link);

        link.click();

        link.remove();

        setTimeout(function(){
            URL.revokeObjectURL(url);
        },1000);

    }, "image/png");

}