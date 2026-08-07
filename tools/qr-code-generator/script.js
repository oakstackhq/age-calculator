let qr;

function generateQR(){

const text=document.getElementById("text").value.trim();

if(text===""){
alert("Enter some text or a URL.");
return;
}

document.getElementById("qrcode").innerHTML="";

qr=new QRCode(document.getElementById("qrcode"),{
text:text,
width:256,
height:256
});

document.getElementById("download").style.display="block";

}

function downloadQR(){

const img=document.querySelector("#qrcode img");

if(!img)return;

const link=document.createElement("a");

link.href=img.src;

link.download="oakstack-qr-code.png";

link.click();

}