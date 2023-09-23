

const url=document.getElementById("url")
const qr=document.getElementById("qr_img")
const sub=document.getElementById("sub")

function hello(){
    alert("hello")
    console.log(url.value)
    qr.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url.value}` 
}

