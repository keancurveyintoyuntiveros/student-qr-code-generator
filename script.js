const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const canvas = document.getElementById("qrCanvas");

generateBtn.onclick = () => {
  const name = document.getElementById("name").value.trim();
  const id = document.getElementById("id").value.trim();
  const address = document.getElementById("address").value.trim();
  const section = document.getElementById("section").value.trim();

  if (!name || !id || !address || !section) {
    alert("Please fill in all fields.");
    return;
  }

  const qrData = {
    name,
    id,
    address,
    section
  };

  QRCode.toCanvas(canvas, JSON.stringify(qrData), { width: 256 }, err => {
    if (err) console.error(err);
  });
};

downloadBtn.onclick = () => {
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
};

