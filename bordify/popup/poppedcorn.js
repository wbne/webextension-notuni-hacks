/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
 var time = -1;
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
      switch (e.originalTarget.textContent) {
        case "1 min":
          time = 1;
          break;
        case "5 min":
          time = 5;
          break;
        case "15 min":
          time = 15;
          break;
        case "30 min":
          time = 30;
          break;
      }
    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    function timey(tabs)
    {
      time = time * 60000;
      browser.tabs.sendMessage(tabs[0].id, {
        command: "timer",
        length: time
      });
    }

    /**
     * Get the active tab,
     * then call "beastify()" or "reset()" as appropriate.
     */
    if (e.target.id == "button") {
      browser.tabs.query({active: true, currentWindow: true})
      .then(timey)
      .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/content_scripts/happyAlert.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
