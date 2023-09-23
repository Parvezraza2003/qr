// function onScanSuccess(decodedText, decodedResult) {
//     // Handle on success condition with the decoded text or result.
//     console.log(`Scan result: ${decodedText}`, decodedResult);
// }

// function onScanError(errorMessage) {
//     // handle on error condition, with error message
// }

// var html5QrcodeScanner = new Html5QrcodeScanner(
//     "reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess, onScanError);
// https://api.qrserver.com/v1/read-qr-code/?fileurl=[URL-encoded-webaddress-url-to-qrcode-image-file]

// function readit(){
    
// }


// let dirHandle;
// async function readConfig(){

//     dirHandle = await window.showDirectoryPicker();
//     const file = await dirHandle.getFileHandle("config.json", {
//         create: true
//  })
//  fileData = await file.getFile();
//  let text = await fileData.text()
//  alert(text)
// }

// readConfig();
// const button = document.querySelector('button');
// const pre = document.querySelector('pre');
// document.querySelector('button').addEventListener('click', async () => {
//     const dirHandle = await window.showDirectoryPicker();
//     for await (const entry of dirHandle.values()) {
//       if (entry.kind === "file"){
//         const file = await entry.getFile();
//         const text = await file.text();
//         console.log(text);
//       }
//     //   if (entry.kind === "directory"){
//     //     /* for file in this directory do something */ 
//     //   }
//     }
//   });
//   https://api.qrserver.com/v1/read-qr-code/?fileurl=


function onScanSuccess(qrCodeMessage) {
  document.getElementById("result").innerHTML =
    '<span class="result">' + qrCodeMessage + "</span>";
}

// When scan is unsuccessful fucntion will produce error message
function onScanError(errorMessage) {
  // Handle Scan Error
}

// Setting up Qr Scanner properties
var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

// in
html5QrCodeScanner.render(onScanSuccess, onScanError);
