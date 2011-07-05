(function() {

  console.log('execute: NEO VISION')

  var pres = document.getElementsByTagName('pre');
  
  if ( !pres.length || document.body.querySelectorAll('*').length !== 1 ) {
    console.log('not proceeding')
    return;
  }
  
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(" \
    body{background:#000; color:white; line-height:1.17em;} \
    .str{color:#65B042} \
    .kwd{color:#E28964} \
    .com{color:#555;font-style:italic;} \
    .typ{color:#89bdff} \
    .lit{color:#3387CC} \
    .pun{color:#EDC} \
    .pln{color:#EEE} \
    .tag{color:#89bdff} \
    .atn{color:#bdb76b} \
    .atv{color:#65B042} \
    .dec{color:#3387CC} \
    ol.linenums{margin-top:0;margin-bottom:0} \
    li.L0,li.L1,li.L2,li.L3,li.L5,li.L6,li.L7,li.L8{ list-style:none; } \
    li.L1,li.L3,li.L5,li.L7,li.L9{background:#111; } \
  "));
  document.head.appendChild(style);
  
      // get file extension
  var ext = window.location.href.split('/').pop().match(/\.(js|css)/i).slice(1);
  console.log( ext );
  pres[0].className = "prettyprint lang-" + ext;
  prettyPrint();

})();