function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    weburl: document.querySelector("#weburl").value,
    time: document.querySelector("#time").value
  });
}

function restoreOptions() {

  function setCurrentURL(result) {
    document.querySelector("#weburl").value = result.weburl || "blue";
    console.log(document.querySelector("#weburl").value);
  }

  function setCurrentTime(result) {
    document.querySelector("#time").value = result.time || "42";
    console.log(document.querySelector("#time").value);
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("weburl");
  let gotten = browser.storage.sync.get("time");
  getting.then(setCurrentURL, onError);
  gotten.then(setCurrentTime, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
