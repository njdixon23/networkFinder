document.getElementById("speedy").addEventListener("mouseover", changeDef);
document.getElementById("ipButton").addEventListener("mousedown", addIP);
document.getElementById("locationButton").addEventListener("mousedown", addLocation);

var ipTestClicked = false;
let apiKey = 'fb729aa07afc67f75787ec919286da17448183a2fbc17c8aed692f03';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  ipInfo = data.ip;
  ccInfo = data.country_code;
  locationInfo = data.city, ", (", ccInfo, ")";

});

//info button
function changeDef() {

  let ele = document.getElementById('speed_help');
  let node = document.createTextNode('For Finding Speed');
  ele.appendChild(node);

}

//draws IP value
function addIP() {
  if (ipTestClicked) {
    var elem = document.getElementById("ipText");
    elem.parentNode.removeChild(elem);
    ipTestClicked = false;
  }
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "ipText");


  // and give it some content
  const newContent = document.createTextNode(ipInfo);
  console.log("Node created...")

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("ipP");
  currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
  console.log("Data printed")

  ipTestClicked = true;
  document.getElementById("ipText").style.color = "red";
  setTimeout(() => { document.getElementById("ipText").style.color = "black"; }, 200);

}

function removeIP(){
  document.getElementById("ipText").remove();
}

//draws location value
function addLocation() {
  printInfo();
  // create a new div element
  const locationDiv = document.createElement("locationDiv");

  // and give it some content
  const locData = document.createTextNode(locationInfo);
  
  // add the text node to the newly created div
  locationDiv.appendChild(locData);

  // add the newly created element and its content into the DOM
  const currentlocDiv = document.getElementById("cityP");
  currentlocDiv.parentNode.insertBefore(locData, currentlocDiv.nextSibling);
}

function json(url) {
  return fetch(url).then(res => res.json());
}


