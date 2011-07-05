window.onload = function() {
  
  var form = document.getElementsByTagName('form')[0],
      styleText = document.getElementById('style-text'),
      savedCssElem = document.getElementById('saved-css'),
      prettyPrinted = document.querySelectorAll('.example.prettyprint'),
      defaultThemeStyle = document.getElementById('default-theme').textContent;

  // set text to last style
  if ( localStorage['neoVisionStyle'] ) {
    styleText.textContent = localStorage['neoVisionStyle'];
    saveStyle( localStorage['neoVisionStyle'] );
  } else {
    styleText.textContent = defaultThemeStyle
  }
  styleText.textContent = localStorage['neoVisionStyle'] || defaultThemeStyle;
  
  prettyPrint();

  // remove prettyprint class
  for (var i=0, len = prettyPrinted.length; i < len; i++) {
    prettyPrinted[i].classList.remove('prettyprint');
  }

  
  function saveStyle( style ) {
    localStorage['neoVisionStyle'] = style;
    savedCssElem.textContent = '/* saved Neo-vision style ****/ \
' + style;
    prettyPrint();
  }

  form.addEventListener( 'submit', function(event) {
    console.log('form submitted');
    
    saveStyle( styleText.textContent )
    event.preventDefault();
  }, false);
  
  // change theme when select is changed
  document.getElementById('themes').addEventListener( 'change', function(event) {
    if ( !event.target.value.length ) {
      return;
    }
    // get content of matching <style id="value-theme" />
    var style = document.getElementById( event.target.value + '-theme').textContent;
    styleText.textContent = style;
  }, false);
  
}