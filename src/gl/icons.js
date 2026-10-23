// Emblems for each step of the journey, drawn in greys on a transparent canvas.
// The engraving shader turns the greys into line weight: dark = thick lines.

const SIZE = 900;
const g = (v) => `rgb(${v},${v},${v})`;

function canvas() {
  const c = document.createElement('canvas');
  c.width = c.height = SIZE;
  const ctx = c.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  return { c, ctx };
}

function poly(ctx, pts) {
  ctx.beginPath();
  pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
}

// before · software: a monitor with code on the screen
function monitor() {
  const { c, ctx } = canvas();
  // stand and foot
  let grad = ctx.createLinearGradient(400, 0, 500, 0);
  grad.addColorStop(0, g(70));
  grad.addColorStop(0.45, g(190));
  grad.addColorStop(1, g(60));
  ctx.fillStyle = grad;
  poly(ctx, [[410, 640], [490, 640], [510, 760], [390, 760]]);
  ctx.fill();
  ctx.fillStyle = g(150);
  ctx.beginPath();
  ctx.roundRect(250, 752, 400, 34, 14);
  ctx.fill();
  ctx.strokeStyle = g(40);
  ctx.lineWidth = 6;
  ctx.stroke();
  // bezel
  grad = ctx.createLinearGradient(80, 120, 820, 660);
  grad.addColorStop(0, g(225));
  grad.addColorStop(1, g(110));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.roundRect(70, 130, 760, 520, 34);
  ctx.fill();
  ctx.stroke();
  // screen
  ctx.fillStyle = g(55);
  ctx.beginPath();
  ctx.roundRect(110, 168, 680, 440, 12);
  ctx.fill();
  // lines of code, indented like a block
  const lines = [[0, 260], [1, 330], [2, 210], [2, 280], [1, 150], [0, 90]];
  lines.forEach(([ind, w], i) => {
    ctx.fillStyle = g(i % 3 ? 150 : 215);
    ctx.beginPath();
    ctx.roundRect(160 + ind * 46, 210 + i * 46, w, 20, 10);
    ctx.fill();
  });
  // </> mark
  ctx.strokeStyle = g(235);
  ctx.lineWidth = 24;
  ctx.beginPath();
  ctx.moveTo(600, 400); ctx.lineTo(545, 455); ctx.lineTo(600, 510);
  ctx.moveTo(700, 400); ctx.lineTo(755, 455); ctx.lineTo(700, 510);
  ctx.moveTo(670, 385); ctx.lineTo(630, 525);
  ctx.stroke();
  return c;
}

// after · projects: a database, three discs stacked like a cylinder
function database() {
  const { c, ctx } = canvas();
  const cx = 450;
  const rx = 290;
  const ry = 92;
  const tops = [200, 380, 560];
  // body, shaded like a cylinder, drawn from the bottom up so each top sits on the one below
  for (let k = tops.length - 1; k >= 0; k--) {
    const y = tops[k];
    const h = 150;
    const grad = ctx.createLinearGradient(cx - rx, 0, cx + rx, 0);
    grad.addColorStop(0, g(70));
    grad.addColorStop(0.3, g(215));
    grad.addColorStop(1, g(55));
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(cx - rx, y);
    ctx.lineTo(cx - rx, y + h);
    ctx.ellipse(cx, y + h, rx, ry, 0, Math.PI, 0, true);
    ctx.lineTo(cx + rx, y);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = g(40);
    ctx.lineWidth = 6;
    ctx.stroke();
    // the lit top of each disc
    const top = ctx.createLinearGradient(cx - rx, y - ry, cx + rx, y + ry);
    top.addColorStop(0, g(240));
    top.addColorStop(1, g(150));
    ctx.fillStyle = top;
    ctx.beginPath();
    ctx.ellipse(cx, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // a status light on the front of each disc
    ctx.fillStyle = g(30);
    ctx.beginPath();
    ctx.arc(cx + 190, y + 110, 15, 0, Math.PI * 2);
    ctx.fill();
  }
  return c;
}

// next · ANBIMA: a graduation cap with its tassel, for the certifications ahead
function cap() {
  const { c, ctx } = canvas();
  // skull cap under the board
  let grad = ctx.createLinearGradient(250, 0, 650, 0);
  grad.addColorStop(0, g(70));
  grad.addColorStop(0.45, g(140));
  grad.addColorStop(1, g(55));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(240, 380);
  ctx.lineTo(660, 380);
  ctx.lineTo(650, 590);
  ctx.quadraticCurveTo(450, 660, 250, 590);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = g(35);
  ctx.lineWidth = 6;
  ctx.stroke();

  // thickness of the board
  ctx.fillStyle = g(60);
  poly(ctx, [[90, 330], [450, 490], [810, 330], [810, 354], [450, 516], [90, 354]]);
  ctx.fill();
  // board
  grad = ctx.createLinearGradient(160, 180, 740, 480);
  grad.addColorStop(0, g(235));
  grad.addColorStop(1, g(150));
  ctx.fillStyle = grad;
  poly(ctx, [[450, 170], [810, 330], [450, 490], [90, 330]]);
  ctx.fill();
  ctx.stroke();

  // button, cord and tassel
  ctx.fillStyle = g(40);
  ctx.beginPath();
  ctx.arc(450, 330, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = g(45);
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(450, 330);
  ctx.quadraticCurveTo(640, 340, 720, 380);
  ctx.lineTo(722, 560);
  ctx.stroke();
  grad = ctx.createLinearGradient(695, 0, 750, 0);
  grad.addColorStop(0, g(50));
  grad.addColorStop(0.5, g(130));
  grad.addColorStop(1, g(45));
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(708, 552);
  ctx.lineTo(736, 552);
  ctx.lineTo(752, 700);
  ctx.lineTo(692, 700);
  ctx.closePath();
  ctx.fill();
  return c;
}

// today · assessor: a bank facade, like the vignette on a banknote
function bank() {
  const { c, ctx } = canvas();
  // pediment
  ctx.fillStyle = g(200);
  poly(ctx, [[100, 330], [450, 130], [800, 330]]);
  ctx.fill();
  ctx.fillStyle = g(120);
  poly(ctx, [[180, 312], [450, 160], [720, 312]]);
  ctx.fill();
  ctx.strokeStyle = g(40);
  ctx.lineWidth = 6;
  poly(ctx, [[100, 330], [450, 130], [800, 330]]);
  ctx.stroke();
  // entablature
  ctx.fillStyle = g(225);
  ctx.fillRect(90, 330, 720, 44);
  ctx.fillStyle = g(60);
  ctx.fillRect(90, 374, 720, 14);
  // wall behind the columns
  ctx.fillStyle = g(95);
  ctx.fillRect(130, 388, 640, 302);
  // columns, shaded like cylinders
  for (const x of [205, 365, 535, 695]) {
    const grad = ctx.createLinearGradient(x - 40, 0, x + 40, 0);
    grad.addColorStop(0, g(85));
    grad.addColorStop(0.35, g(240));
    grad.addColorStop(1, g(70));
    ctx.fillStyle = grad;
    ctx.fillRect(x - 38, 410, 76, 262);
    ctx.fillStyle = g(215);
    ctx.fillRect(x - 52, 390, 104, 22);
    ctx.fillRect(x - 52, 670, 104, 22);
  }
  // steps
  ctx.fillStyle = g(210);
  ctx.fillRect(80, 692, 740, 36);
  ctx.fillStyle = g(160);
  ctx.fillRect(50, 728, 800, 36);
  ctx.fillStyle = g(110);
  ctx.fillRect(20, 764, 860, 40);
  return c;
}

export const ICONS = [monitor, database, bank, cap];
