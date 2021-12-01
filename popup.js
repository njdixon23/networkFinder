document.getElementById("speedy").addEventListener("mouseover", changeDef);
document.getElementById("speedy").addEventListener("mouseleave", removeText);

document.getElementById("speed").addEventListener("mousedown", addIP);
document.getElementById("speed").addEventListener("mouseleave", removeIPText);

let apiKey = 'fb729aa07afc67f75787ec919286da17448183a2fbc17c8aed692f03';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  ipInfo = data.ip;
  console.log(data.city);
  cityInfo = data.city;
  console.log(data.country_code);
  countryInfo = data.country_code;
});
// document.getElementById("speedy").addEventListener("mouseover", addElement);
// document.body.onload = addElement;


function changeDef() {
  let ele = document.getElementById('speed_help');
  let node = document.createTextNode('For Finding Speed');
  ele.appendChild(node);
}


function addIP() {
  printInfo();
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(ipInfo);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("ipP");
  currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);

}

function removeText() {
  document.getElementById('speed_help').textContent = null;
}
function removeIPText() {
  document.getElementById('speed_help').textContent = null;
}

function speed() {
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);
  });
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function speedTest() {
  printInfo();
  console.log("Button Pressed...testing speed")
  document.getElementById('ipP').style.color = "teal";


  document.getElementById('ipP').textContent = "IP:";
  let speedEle = document.getElementById('ipP');
  console.log("Element found")
  let speedNode = document.createTextNode(ipInfo);
  speedEle.appendChild(speedNode);

  console.log("Info printed");
  await sleep(1000);
  document.getElementById('ipP').style.color = "black";
  console.log("changed color");



  printInfo();
  let netIP = document.getElementById('ipP');
  let locationData = document.getElementById('cityP')

  console.log("Element found")
  let ipNode = document.createTextNode(ipInfo);
  let locationNode = document.createTextNode(locationInfo)
  netIP.appendChild(ipNode);
  locationData.appendChild(locationNode)
  
  console.log("Info printed");

  

}

function json(url) {
  return fetch(url).then(res => res.json());
}

function printInfo() {
  let apiKey = 'fb729aa07afc67f75787ec919286da17448183a2fbc17c8aed692f03';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    ipInfo = data.ip;
    console.log(data.city);
    locationInfo = data.city, ", (", data.country_code, ")";
  });
}

