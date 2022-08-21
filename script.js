const wrapper = document.querySelector(".result"),
qrInput = document.querySelector(".form-group input"),
generateBtn = document.querySelector(".form-group button"),
qrImg = document.querySelector(".result img"),
btnDownload= document.querySelector(".result button");
let preValue;
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

btnDownload.addEventListener("click", () => {
    btnDownload.innerText="Downloading...";
    let downloadImage = qrImg.getAttribute('src');
    let fileName = "qrCode.png";
    saveAs(downloadImage, fileName);
    btnDownload.innerText="Download";
});
