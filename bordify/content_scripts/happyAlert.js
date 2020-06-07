(function() {

  if(window.hasRun){
    return;
  }
  window.hasRun = true;

  function alarm(length)
  {
    setTimeout(function(){ alert("Hello, it's time to get back to work"); }, length);
  }

  browser.runtime.onMessage.addListener((message) => {
    if(message.command == "timer"){
        alarm(message.length);
    }
  });

})();
