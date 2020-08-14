(function () {
  var install = function(hook, vm) {
    preDataLangPattern = /<pre data-lang=/mg;

    hook.ready(function(content) {
      var elements = document.querySelectorAll('pre[data-lang]');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.setAttribute('title', "Double click to expand");
        element.addEventListener("dblclick", function() {
          var isExpanded = this.getAttribute('data-is-expanded') || "false";
          isExpanded = JSON.parse(isExpanded.toLowerCase());
          if (isExpanded) {
            this.setAttribute('title', "Double click to expand");
            this.style['max-height'] = null;
            this.setAttribute('data-is-expanded', false);
          } else {
            this.setAttribute('title', "Double click to collapse");
            this.style['max-height'] = 'none';
            this.setAttribute('data-is-expanded', true);
          }

          var currentPosition = getScroll();
          var targetY = this.offsetTop;
          if (currentPosition[1] > targetY) {
            window.scrollTo(0, targetY);
          }

          setTimeout(function() {
            clearSelection();
          });
        });
      }
    });
  };

  function getScroll() {
    if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
    } else {
      var sx, sy, d = document,
          r = d.documentElement,
          b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
    }
  }

  function clearSelection() {
    var sel;
    if ((sel = document.selection) && sel.empty) {
      sel.empty();
    } else {
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
      }
      var activeEl = document.activeElement;
      if (activeEl) {
        var tagName = activeEl.nodeName.toLowerCase();
        if (tagName == "textarea" ||
           (tagName == "input" && activeEl.type == "text")) {
          // Collapse the selection to the end
          activeEl.selectionStart = activeEl.selectionEnd;
        }
      }
    }
  }

  $docsify.plugins = [].concat(install, $docsify.plugins);
}());