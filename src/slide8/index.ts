export { };
const canvas = <HTMLCanvasElement>document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const lingrad = ctx.createLinearGradient(0, 0, 0, 130);
lingrad.addColorStop(0.5, 'green');
lingrad.addColorStop(1, 'rgba(200, 0, 0, 1)');

ctx.fillStyle = lingrad;
ctx.strokeStyle = lingrad;

ctx.fillRect(10, 10, 130, 130);
ctx.strokeRect(170, 60, 130, 130);




// const radGrad = ctx.createRadialGradient(430, 80, 5, 450, 100, 70);

// radGrad.addColorStop(0, '#00C9FF');
// radGrad.addColorStop(0.9, '#0364ff');
// radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

// ctx.fillStyle = radGrad;
// ctx.fillRect(370, 20, 160, 160);