var defaultOptions = {
  topBarBgColor: '#DDD',
  lockButtonColor: 'blue',
  topBarHeight: '1.5em',
  lineNumberSideBarWidth: '1.5em',
  lineNumberSideBarBgColor: '#DDD',
  lineNumberSideBarTextColor: '#AAA',
  contentBackgroundColor: 'white',
  contentTextColor: 'black',
  lineHeight: '1.5em',
  hammerSize: '2em',
  hammerColor: 'white'
};

function createCPUINTxtTemplate(id) {
  var cpuiNtxtElem = $(`
    <div class="cpui-ntxt-wrapper" id="${id}">
        <div class="cpui-ntxt-top-bar">
            <p class="cpui-lock-btn">&#x1f511</p>
        </div>
        <div class="cpui-ntxt-textarea">
            <div class="cpui-ntxt-linenumber-col">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>  
                <p>9</p>                    
                <p>10</p>                    
                <p>11</p>                    
                <p>12</p>                    
                <p>13</p>                    
                <p>14</p>                    
                <p>15</p>
            </div>
            <div class="cpui-ntxt-textarea-wrapper">
                <textarea></textarea>
            </div>
        </div>
    </div>
  `);
  cpuiNtxtElem.css({
    width: '100%'
  });
  cpuiNtxtElem.find('p').css({
    margin: 0
  });
  cpuiNtxtElem.find('.cpui-ntxt-textarea').css({
    display: 'flex',
    height: '240px',
    'overflow-y': 'scroll'
  });
  cpuiNtxtElem.find('.cpui-ntxt-textarea .cpui-ntxt-linenumber-col ').css({
    width: '1.5em'
  });
  cpuiNtxtElem.find('.cpui-ntxt-textarea .cpui-ntxt-linenumber-col p').css({
    'font-size': '11px',
    color: '#AAA',
    'background-color': '#DDD',
    'line-height': '1.5em',
  });
  cpuiNtxtElem.find('.cpui-ntxt-textarea .cpui-ntxt-textarea-wrapper .cpui-lock-overlay').css({
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    'z-index': 5,
    'background-color': 'black'
  })
  cpuiNtxtElem.find('.cpui-ntxt-textarea .cpui-ntxt-textarea-wrapper textarea').css({
    position: 'absolute',
    width: '100%',
    padding: 0,
    'padding-left': '10px',
    'padding-right': '10px',
    border: 'none',
    resize: 'none',
    'line-height': '1.5em'
  })
  return cpuiNtxtElem;
}

function setStyling(elem, options) {
  setTopbarStyle(elem, options);
  setLineNumberStyle(elem, options);
  setContentStyle(elem, options);
}

function setTopbarStyle(elem, options) {
  var topbarElem = elem.find('.cpui-ntxt-top-bar');
  var lockBtn = elem.find('.cpui-ntxt-wrapper .cpui-ntxt-top-bar .cpui-lock-btn');
  if (options !== null && options.topBarBgColor) {
    topbarElem.css('background-color', options.topBarBgColor);
  }
  else {
    topbarElem.css('background-color', defaultOptions.topBarBgColor);
  }

  if (options !== null && options.lockButtonColor) {
    lockBtn.css('color', options.lockButtonColor);
  }
  else {
    lockBtn.css('color', defaultOptions.lockButtonColor);    
  }

  if (options !== null && options.topBarHeight) {
    topbarElem.css('height', options.topBarHeight);
  }
  else {
    topbarElem.css('height', defaultOptions.topBarHeight);    
  }
}

function setLineNumberStyle(elem, options) {
  var lineNumberCol = elem.find('.cpui-ntxt-textarea .cpui-ntxt-linenumber-col');
  var lineNumberText = elem.find('.cpui-ntxt-textarea .cpui-ntxt-linenumber-col p'); 
  if (options !== null && options.lineNumberSideBarWidth) {
    lineNumberCol.css('width', options.lineNumberSideBarWidth);
  }
  else {
    lineNumberCol.css('width', defaultOptions.lineNumberSideBarWidth);
  }

  if (options !== null && options.lineNumberSideBarBgColor) {
    lineNumberText.css('background-color', options.lineNumberSideBarBgColor);
  }
  else {
    lineNumberText.css('background-color', defaultOptions.lineNumberSideBarBgColor);
  }

  if (options !== null && options.lineNumberSideBarTextColor) {
    lineNumberText.css('color', options.lineNumberSideBarTextColor);
  }
  else {
    lineNumberText.css('color', defaultOptions.lineNumberSideBarTextColor);
  }
}

function setContentStyle(elem, options) {
  var textarea = elem.find('.cpui-ntxt-textarea .cpui-ntxt-textarea-wrapper textarea');
  var lineNumberColText = elem.find('.cpui-ntxt-textarea .cpui-ntxt-linenumber-col p');
  if (options !== null && options.contentBackgroundColor) {
    textarea.css('background-color', options.contentBackgroundColor);
  }
  else {
    textarea.css('background-color', defaultOptions.contentBackgroundColor);
  }

  if (options !== null && options.contentTextColor) {
    textarea.css('color', options.contentTextColor);
  }
  else {
    textarea.css('color', defaultOptions.contentTextColor);
  }

  if (options !== null && options.lineHeight) {
    textarea.css('line-height', options.lineHeight);
    lineNumberColText.css('line-height', options.lineHeight);    
  }
  else {
    textarea.css('line-height', defaultOptions.lineHeight);
    lineNumberColText.css('line-height', defaultOptions.lineHeight);
  }
}

function initNTxt(selector, options = null) {
  var selectorId = $(selector).attr('id');
  var width = $(selector).width();
  var height = $(selector).height();
  var cpuiNtxtObj = {
    id: selectorId,
    element: createCPUINTxtTemplate(selectorId)
  };
  setStyling(cpuiNtxtObj.element, options);
  registerLockEvent(cpuiNtxtObj.element);
  registerTextAreaEvent(cpuiNtxtObj.element, options);
  $(selector).replaceWith(cpuiNtxtObj.element);
  return cpuiNtxtObj;
}

// Lock event
function registerLockEvent(elem) {
  var isLock = false;
  var lockBtn = elem.find('.cpui-ntxt-top-bar .cpui-lock-btn');
  var textAreaWrapper = elem.find('.cpui-ntxt-textarea .cpui-ntxt-textarea-wrapper');
  var resetLock = function() {
    isLock = false;
  };
  lockBtn.click(function (event) {
    if (!isLock) {
      isLock = true;
      textAreaWrapper.prepend(createLockoverlay(resetLock));
    }
  });
}

function createLockoverlay (resetLock) {
  var lockoverlayElement = $('<div class="cpui-lock-overlay"></div>');
  var count = 5;
  lockoverlayElement.click(function () {
    if (count === 1) {
      lockoverlayElement.remove();
      resetLock();
    }
    else {
      count -= 1;
      lockoverlayElement.css({
        'background-color': `rgba(0,0,0, ${count / 5})`
      });
    }
  })
  return lockoverlayElement;
}

// Textarea event
function registerTextAreaEvent(elem, options) {
  var textareaElem = elem.find('.cpui-ntxt-textarea .cpui-ntxt-textarea-wrapper textarea');
  textareaElem.css({ height: 240 });
  var lineNumberCol = elem.find('.cpui-ntxt-textarea .cpui-ntxt-linenumber-col');
  var currentLineNumber = 15;
  textareaElem.keyup(function(event) {
    var textareaContentHeight = this.scrollHeight;
    var baseHeight = $(lineNumberCol.find('p')[0]).height();
    if (textareaContentHeight > baseHeight * currentLineNumber) {
      var newLineNumber = textareaContentHeight / baseHeight;
      for (var i = currentLineNumber + 1; i <= newLineNumber; i += 1) {
        var lineNumber = $(`<p>${i}</p>`);
        lineNumber.css({
          'font-size': '11px',
          'line-height': '1.5em',
          margin: 0,
        })
        if (options !== null && options.lineNumberSideBarBgColor) {
          lineNumber.css('background-color', options.lineNumberSideBarBgColor);
        }
        else {
          lineNumber.css('background-color', defaultOptions.lineNumberSideBarBgColor);
        }

        if (options !== null && options.lineNumberSideBarTextColor) {
          lineNumber.css('color', options.lineNumberSideBarTextColor);
        }
        else {
          lineNumber.css('color', defaultOptions.lineNumberSideBarTextColor);
        }
        if (options !== null && options.lineHeight) {
          lineNumber.css('line-height', options.lineHeight);    
        }
        else {
          lineNumber.css('line-height', defaultOptions.lineHeight);
        }
        lineNumberCol.append(lineNumber);
      }
      currentLineNumber = newLineNumber;
    }
    textareaElem.css({ height: textareaContentHeight });
    textareaElem.scrollTop(textareaContentHeight);
  })
}

window.cpui = {
  initNTxt: initNTxt
};
