function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    weburl: document.querySelector("#weburl").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#weburl").value = result.weburl || "blue";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("weburl");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
