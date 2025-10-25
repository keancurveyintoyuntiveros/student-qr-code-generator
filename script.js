const input = document.getElementById("qrInput");
const canvas = document.getElementById("qrCanvas");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return alert("Please enter some text or JSON.");
  QRCode.toCanvas(canvas, text, { width: 256 }, err => {
    if (err) console.error(err);
  });
};

downloadBtn.onclick = () => {
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};

