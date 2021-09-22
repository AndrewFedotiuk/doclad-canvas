const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(50, 50, 150, 150);

ctx.strokeRect(250, 50, 150, 150);

ctx.fillRect(50, 250, 150, 150);
ctx.strokeRect(250, 250, 150, 150);
ctx.clearRect(150, 320, 200, 50);

// ctx.strokeStyle = "red";
// ctx.strokeRect(150, 320, 200, 50);


ctx.fillStyle = "hsl(0, 70%, 50%)";
ctx.fillRect(450, 50, 150, 150);

ctx.fillStyle = "rgba(0, 0, 200, .5)";
ctx.fillRect(470, 70, 150, 150);