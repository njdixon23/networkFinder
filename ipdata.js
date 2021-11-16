let networkFetch = document.getElementById("speed");

networkFetch.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query ({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: json(url),
  });
  console.log("Button Pressed...testing speed")
});

function json(url) {
  return fetch(url).then(res => res.json());
}

let apiKey = 'fb729aa07afc67f75787ec919286da17448183a2fbc17c8aed692f03';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.country_code);
});
