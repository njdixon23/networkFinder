document.getElementById("speedy").addEventListener("mouseover", changeDef);
document.getElementById("speedy").addEventListener("mouseleave", removeText);
// document.getElementById("speedy").addEventListener("mouseover", addElement);
// document.body.onload = addElement;
function changeDef() {

  let ele = document.getElementById('speed_help');
  let node = document.createTextNode('For Finding Speed');
  ele.appendChild(node);


}
function removeText() {
  document.getElementById('speed_help').textContent = null;
}


// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("For finding speed");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("speedy");
//   document.body.insertBefore(newDiv, currentDiv);
// }
