document.getElementById("web_button").addEventListener("click",function(){
    chrome.tabs.create({
      url: 'main_web.html'
    });
  });
