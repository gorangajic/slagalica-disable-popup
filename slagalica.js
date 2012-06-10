$(function() {
  function removeFairPlay() {

    setTimeout( function() {
      if(window.onblur == null) { removeFairPlay(); return false; }
      blurString = window.onblur.toString();
      window.checkCodeBody = function() { if(bIsMSIE) {document.getElementById('flashClient').checkCode(blurString)} else {document.getElementById('flashClient').checkCode(blurString)} };
      window.onblur = null;
    }, 1000);
  }
 // removeFairPlay();
}); 