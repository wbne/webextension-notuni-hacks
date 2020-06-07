window.onload = function () {
  var webby;
  var timey;
    function onGot(weburl, time) {
      console.log(document.URL.includes(weburl));
      if(document.URL.includes(weburl)){
          time = time * 60000;
          setTimeout(function(){ alert("Hello, it's time to get back to work"); }, time);
      }
    }
    function onError(error) {
      console.log(`Error: ${error}`);
    }

    function setW(web){
      webby = web.weburl;
    }
    function setT(tim){
      timey = tim.time;
      onGot(webby, timey);
    }

    let getting = browser.storage.sync.get("weburl");
    let gotten = browser.storage.sync.get("time");
    getting.then(setW, onError);
    gotten.then(setT, onError);
};
