(function() {

  var pres = document.getElementsByTagName('pre');

  // don't proceed if no <pre> or more than one item
  if ( !pres.length || document.body.querySelectorAll('*').length !== 1 ) {
    return;
  }

  chrome.extension.sendRequest({method: "getStyle"}, function(response) {
    
    var pre = pres[0],
        filesize = Math.round( pre.textContent.length / 1024 ), // in KB
        style = document.createElement("style");

    // add theme CSS
    style.textContent = response;
    document.head.appendChild(style);
    
    // back out if its a big file
    // Prettyprint craps out at about 70KB and will crash the browser
    if ( filesize > 70 ) {
      console.log('Whoa, that\'s a big file. ' + filesize + 'KB. Neo-vision is not active so it won\'t crash this browser window.');
      return;
    }

    // get file extension
    var ext = window.location.href.split('/').pop().match(/\.(js|css)/i).slice(1);
    pre.className = "prettyprint lang-" + ext;
    prettyPrint();
    
  });

})();