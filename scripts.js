function bee() {
  alert('According to all known laws of aviation,');
  alert('there is no way a bee should be able to fly.');
  alert('Its wings are too small to get its fat little body off the ground.');
  alert('The bee, of course, flies anyway');
}
function jazz() {
  alert('Hello again! There\'s a new button. Click it and check out Piskel4All, Piskel for mobile and much more!')
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.title = "\u200E";
async function ok() {
var pjs = "PJ\'S ROOM!"
var tx = ""
for (let i=0; i < pjs.length; i++) {
  tx += pjs[i]
  await sleep(250);
  document.title = "\u200E" + tx;
}
await sleep(250);
document.title = "\u200E" + pjs;
await sleep(5000);
for (let i=pjs.length; i > -1; i--) {
  tx = tx.slice(0, -1);
  await sleep(250);
  document.title = "\u200E" + tx;
}
}
setInterval(ok, 9500);
ok();
