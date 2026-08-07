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

        const dataUrl = canvas.toDataURL("image/png");

        window.open(dataUrl, "_blank");

        return;
    }

    const img = document.querySelector("#qrcode img");

    if(img){
        window.open(img.src, "_blank");
    }

}