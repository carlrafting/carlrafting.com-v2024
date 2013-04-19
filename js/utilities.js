/**
 * Utilities for adding/removing events and classes.
 * 
 * Adapted from following sources:
 * 
 * - https://gist.github.com/desandro/4624426
 * - http://snipplr.com/view/3561/addclass-removeclass-hasclass/
 * - http://www.dustindiaz.com/getelementsbyclass/
 */
(function (window) {

'use strict';

var addEventSimple, removeEventSimple, addEvent, removeEvent, classListSupport, classReg, addClass, hasClass, removeClass, getElementsByClass;

// Event functions from http://www.quirksmode.org/js/eventSimple.html
addEventSimple = function(el, evt, fn) {
  if (el.addEventListener) {
    el.addEventListener(evt, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + evt, fn);
  }
};

removeEventSimple = function(el, evt, fn) {
  if (el.removeEventListener) {
    el.removeEventListener(evt, fn, false);
  }
  else if (el.detachEvent) {
    el.detachEvent('on' + evt, fn);
  }
};

// alias
addEvent = addEventSimple;
removeEvent = removeEventSimple;

classListSupport = function () {
  return 'classList' in document.documentElement;
};

hasClass = function (ele, cls) {
  return ele.classList.contains(cls);
};

addClass = function(ele, cls) {
  ele.classList.add(cls);
};

removeClass = function(ele, cls) {
  ele.classList.remove(cls);
};

if (!classListSupport) {
  classReg = function (className) {
    return new RegExp('(^|\\s)' + className + '(\\s|$)');
  };
  
  hasClass = function(ele, cls) {
    return ele.className.match(classReg(cls));
  };
  
  addClass = function(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.className += ' ' + cls;
    }
  };
  
  removeClass = function(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = classReg(cls);
      ele.className = ele.className.replace(reg, ' ');
    }
  };
}

if (!document.querySelector || !document.getElementsByClassName) {
  getElementsByClass = function(searchClass, node, tag) {
    var classElements = [], i, j, els, elsLen, pattern;
    if (!node) {
      node = document;
    }
    if (!tag) {
      tag = '*';
    }
    els = node.getElementsByTagName(tag);
    elsLen = els.length;
    pattern = new RegExp('(^|\\s)' + searchClass + '(\\s|$)');
    for (i = 0, j = 0; i < elsLen; i+=1) {
      if (pattern.test(els[i].className)) {
        classElements[j] = els[i];
        j+=1;
      }
    }
    return classElements;
  };
}

window.utilities = {
  addEvent: addEvent,
  removeEvent: removeEvent,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  getElementsByClass: getElementsByClass
};

}(this));