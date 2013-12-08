// Filename: elemstateTest.js  
// Timestamp: 2013.12.08-13:22:17 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: elemst.js

var elemstateTest = {
  init : function () {

    var bttnElem = document.getElementById('Bttn');

    console.log(elemst.is(bttnElem, 'select-active'));
    elemst.up(bttnElem, 'select-active');
    console.log(elemst.is(bttnElem, 'select-active'));    
    elemst.rm(bttnElem, 'select');    
    console.log(elemst.is(bttnElem, 'select-active'));

    console.log(elemst.is(bttnElem, 'active'));
    elemst.up(bttnElem, 'active');
    console.log(elemst.is(bttnElem, 'active'));    
    elemst.rm(bttnElem, 'active');    
    console.log(elemst.is(bttnElem, 'active'));
  }
};
