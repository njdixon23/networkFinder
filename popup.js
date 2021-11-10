document.getElementById("speedy").addEventListener("mouseover", changeDef);
document.getElementById("speedy").addEventListener("mouseleave", removeText);
function changeDef() {

  let ele = document.getElementById('speed_help');
  let node = document.createTextNode('For Finding Speed');
  ele.appendChild(node);

}
function removeText() {
  let string = document.getElementById('speed_help');
  string = string.replace(/For Finding Speed/i, ' ');
}
