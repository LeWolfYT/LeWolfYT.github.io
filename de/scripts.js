function bee() {
  alert('According to all known laws of aviation,');
  alert('there is no way a bee should be able to fly.');
  alert('Its wings are too small to get its fat little body off the ground.');
  alert('The bee, of course, flies anyway');
}
function jazz() {
  alert('FLASH-SPIELE! SPIELEN SIE FLASH-SPIELE!')
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.title = "\u200E";
async function ok() {
var pjs = "LeWolfYTs Klubecke!"
var tx = ""
for (let i=0; i < pjs.length; i++) {
  tx += pjs[i]
  await sleep(250);
  document.title = "\u200E" + tx;
}
await sleep(250);
document.title = "\u200E" + pjs;
await sleep(pjs.length()*500);
for (let i=pjs.length; i > -1; i--) {
  tx = tx.slice(0, -1);
  await sleep(250);
  document.title = "\u200E" + tx;
}
}
new Audio('https://github.com/LeWolfYT/LeWolfYT.github.io/raw/main/startrace.mp3').play();
setInterval(ok, 19000);
ok();
