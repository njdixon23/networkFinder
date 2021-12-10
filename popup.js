
document.getElementById("ipButton").addEventListener("mousedown", addIP);
document.getElementById("locationButton").addEventListener("mousedown", addLocation);
document.getElementById("secCheck").addEventListener("mousedown", checkSecurity);

var ipTestClicked = false;
var locTestClicked = false;
var secTestClicked = false;
var is_proxy = false;

let apiKey = 'fb729aa07afc67f75787ec919286da17448183a2fbc17c8aed692f03';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  ipInfo = data.ip;
  ccInfo = data.country_code;
  
  locationInfo = data.city, ", (", ccInfo, ")";

   if (is_proxy == false) {
    secInfo = "Proxy not connected"
     console.log("secInfo printed...")
   }
   

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
  console.log("IP node created...")
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("ipP");
  currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling);
  console.log("IP data printed")


  document.getElementById("ipText").style.color = "red";
  ipTestClicked = true;
  setTimeout(() => { document.getElementById("ipText").style.color = "black"; }, 200);
}
//draws location value
function addLocation() {
  if (locTestClicked) {
    var locElem = document.getElementById("locText");
    locElem.parentNode.removeChild(locElem);
    locTestClicked = false;
  }
  // create a new div element
  const locationDiv = document.createElement("div");
  locationDiv.setAttribute("id", "locText");

  // and give it some content
  const locData = document.createTextNode(locationInfo);
  console.log("Location node created...)")

  // add the text node to the newly created div
  locationDiv.appendChild(locData);

  // add the newly created element and its content into the DOM
  const currentlocDiv = document.getElementById("cityP");
  currentlocDiv.parentNode.insertBefore(locationDiv, currentlocDiv.nextSibling);
  console.log("Location data printed")


  document.getElementById("locText").style.color = "red";
  locTestClicked = true;
  setTimeout(() => { document.getElementById("locText").style.color = "black"; }, 200);
}

function checkSecurity() {
  const secDiv = document.createElement("secDiv");

  // and give it some content
  const secData = document.createTextNode(secInfo);
  console.log("Security node created...");

  // add the text node to the newly created div
  secDiv.appendChild(secData);
  console.log("secData append complete...")
  
  // add the newly created element and its content into the DOM
  const currentsecDiv = document.getElementById("secP");
  currentsecDiv.parentNode.insertBefore(secData, currentsecDiv.nextSibling);
  console.log("Security data printed");
}

function removeIP() {
  document.getElementById("ipText").remove();
}

function json(url) {
  return fetch(url).then(res => res.json());
}


