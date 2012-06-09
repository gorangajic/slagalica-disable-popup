console.log($.fn.jquery);
setTimeout( function() {
  blurString = window.onblur.toString();
  window.checkCodeBody = function() { if(bIsMSIE) {document.getElementById('flashClient').checkCode(blurString)} else {document.getElementById('flashClient').checkCode(blurString)} };
  window.onblur = null;
}, 5000);