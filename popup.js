document.getElementById("speedy").addEventListener("mouseover", changeDef);
document.getElementById("speedy").addEventListener("mouseleave", removeText);
document.getElementById("speed").addEventListener("mousedown", speedTest);

let ipInfo;
let cityInfo;
let countryInfo;

function changeDef() {
  let ele = document.getElementById('speed_help');
  let node = document.createTextNode('For Finding Speed');
  ele.appendChild(node);
}



function removeText() {
  document.getElementById('speed_help').textContent = null;
}

function speedTest(){
  console.log("Button Pressed...testing speed")
  printInfo();
  let speedEle = document.getElementById('ipP');
  console.log("Element found")
  let speedNode = document.createTextNode(ipInfo);
  speedEle.appendChild(speedNode);
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
  cityInfo = data.city;
  console.log(data.country_code);
  countryInfo = data.country_code;
});
}

