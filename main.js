mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
radius = 4;
lasttouchx = "";
lasttouchy = "";
canvas.addEventListener("touchstart", tS)

function tS(e) {
lasttouchx=e.touches[0].clientX - canvas.offsetLeft;
lasttouchy=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", tM)

function tM(e) {
    currenttouchx = e.touches[0].clientX - canvas.offsetLeft;
    currenttouchy = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginpath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.moveTo(lasttouchx, lasttouchy);
    ctx.lineTo(currenttouchx, currenttouchy);
    ctx.stroke();
    lasttouchx = currenttouchx;
    lasttouchy = currenttouchy;
}