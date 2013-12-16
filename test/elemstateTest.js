// Filename: elemstateTest.js  
// Timestamp: 2013.12.16-00:24:51 (last modified)  
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

    
    // should not break if given empty values
    console.log(elemst.up(null, ''));
  }
};
