setTimeout(function() {
  blurString = window.onblur.toString();
  window.checkCodeBody() { if(bIsMSIE) {document.getElementById('flashClient').checkCode(blurString)} else {document.getElementById('flashClient').checkCode(blurString)} };
  window.onblur = null;
},3000);