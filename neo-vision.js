(function() {

  chrome.extension.sendRequest({method: "getStyle"}, function(response) {
    console.log('extension status', response);
    
    var pres = document.getElementsByTagName('pre');

    if ( !pres.length || document.body.querySelectorAll('*').length !== 1 ) {
      console.log('not proceeding')
      return;
    }

    var style = document.createElement("style");
    style.type = "text/css";
    console.log( response )
    style.textContent = response;
    document.head.appendChild(style);

        // get file extension
    var ext = window.location.href.split('/').pop().match(/\.(js|css)/i).slice(1);
    console.log( ext );
    pres[0].className = "prettyprint lang-" + ext;
    prettyPrint();
  });



})();