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
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.title = "";
function ok() {
var pjs = "PJ\'S ROOM!"
var tx = ""
for (let i=0; i < pjs.length; i++) {
  tx += pjs[i]
  sleep(500).then(() => {document.title = tx;});
}
sleep(5000).then(() => {document.title = pjs;});
for (let i=pjs.length; i > 0; i--) {
  tx.pop();
  sleep(500).then(() => {document.title = tx;});
}
}

setInterval(ok, 14000)
