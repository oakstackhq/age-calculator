let qr;

function generateQR(){

    const text = document.getElementById("text").value.trim();

    if(text===""){
        alert("Enter a URL or text.");
        return;
    }

    document.getElementById("qrcode").innerHTML="";

    qr = new QRCode(document.getElementById("qrcode"),{
        text:text,
        width:256,
        height:256
    });

    document.getElementById("download").style.display="block";
}

function downloadQR(){

    const canvas = document.querySelector("#qrcode canvas");

    if(canvas){

        const link = document.createElement("a");

        link.download = "oakstack-qr-code.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

        return;
    }

    const img = document.querySelector("#qrcode img");

    if(img){

        const link = document.createElement("a");

        link.download = "oakstack-qr-code.png";

        link.href = img.src;

        link.click();
    }

}