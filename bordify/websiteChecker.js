window.onload = function () {
    function onError(error) {
      console.log(`Error: ${error}`);
    }

    function onGot(item) {
      let weburl = "www.google.com";
      if (item.weburl) {
        weburl = item.weburl;
      }
      alert(weburl);
    }

    let getting = browser.storage.sync.get("weburl");
    getting.then(onGot, onError);
};
