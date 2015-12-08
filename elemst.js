// Filename: elemst.js  
// Timestamp: 2013.12.16-00:25:06 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// methods for handling "state" of an element through className:
//
// elemstate.up()
// elemstate.is()
// elemstate.rm()

var elemst = module.exports = {

  // elemstate.up(elem, 'select-active');
  // - ensures `st-select-active` is defined on elem.className
  // - if `st-select-active` is defined on elem.className, elem is not modified
  // - if `st-select-\w*` is defined on elem.className, it is replaced.
  // 
  // all states are prefixed with `st-`
  // ex, 
  //  elemstate.up(elem, 'select-active'); // st-select-active
  //  elemstate.up(elem, 'active'); // st-active
  //
  // why? easier to identify and replace classNames associated with this script
  //
  // if a hyphen is given the word behind the first hyphen
  // is recognized as an *id*. word(s) after hyphen are the
  // *state*. if no hyphen, value is assumed to be *state*.
  //
  // Use of *id* allows one to store multiple states on a className, associating 
  // each with a different *id*, for example:
  //  `st-isselected-true st-isopen-true st-iscomplete-false`
  //
  // *id* is not required -this OK:
  //  `st-active`
  //
  up : function (elem, stateidStr) {
    var className, 
        newclass = 'st-' + stateidStr,
        stateid = (stateidStr || '').match(/(\w*(?:-)|\b)(\w*)/) || [],
        state = stateid[2],
        id = stateid[1] || '';

    if (elem && state) {
      className = elem.className;
      if (!className.match(newclass)) {
        stateid = new RegExp('st-' + '\(' + id + '\\w*\)');
        if (className.match(stateid)) {
          elem.className = className.replace(stateid, newclass);
        } else {
          elem.className = className + ' ' + newclass;
        }
      }
    }
  },

  // elemstate.rm(elem, 'select');
  // - removes entire word class with substring at index 0 matching stateidstr
  //
  // console.log(elem.className); // bttn st-select-active st-active
  // elemstate.rm(elem, 'select');
  // console.log(elem.className); // bttn st-active
  // elemstate.rm(elem, 'active');
  // console.log(elem.className); // bttn
  //
  rm : function (elem, stateidStr) {
    var className, 
        stateid = new RegExp('[\b ]st-' + stateidStr + '\(-\\w*\)?');

    if (elem) {
      className = elem.className;
      if (className.match(stateid)) {
        elem.className = className.replace(stateid, '');
      }
    }
  },

  is : function (elem, stateidStr) {
    return (elem && elem.className.match('st-' + stateidStr)) ? true : false;
  }
};
