(function () {
  var install = function(hook, vm) {
    titlePattern = /^#+ ([^\n]+) :figure=([a-zA-Z0-9-_]+)$/mg;
    figureNumberPattern = /\{f#\}/mg;

    hook.beforeEach(function(content) {
      var replacements = [];
      var figures = {};
      var figureNum = 0;
      var me = this;

      // Find figure titles
      var match = this.titlePattern.exec(content);
      while (match != null) {
        var replacement = {
          label: match[1],
          name: match[2],
          index: match.index,
          length: match[0].length,
          figureNum: ++figureNum,
          replace: function(content) {
            var id = this.name.toLowerCase();
            var replacementString = content.substring(0, this.index) + '<p id="' + id + '"><a data-id="' + id + '"></a><em>' + this.label.replace(me.figureNumberPattern, this.figureNum) + '</em></p>' + content.substring(this.index + this.length);
            return replacementString;
          }
        };
        replacements.push(replacement);
        figures[replacement.name] = figureNum;             
        match = this.titlePattern.exec(content);
      }

      // Find figure links
      for (var figureName in figures) {
        if (figures.hasOwnProperty(figureName)) {
          var figureNum = figures[figureName];

          var linkPattern = new RegExp("\\[([^\\]]+)\\]\\(#" + figureName + "\\)", "g");
          var match = linkPattern.exec(content);
          while (match != null) {
            var replacement = {
              label: match[1],
              name: figureName,
              index: match.index,
              length: match[0].length,
              figureNum: figureNum,
              replace: function(content) {
                var replacementString = content.substring(0, this.index) + '[' + this.label.replace(me.figureNumberPattern, this.figureNum) + '](#' + this.name + ')' + content.substring(this.index + this.length);
                return replacementString;
              }
            };
            replacements.push(replacement);
            match = linkPattern.exec(content);
          }
        }
      }

      // Sort the replacements in reverse order
      replacements.sort(function(a, b) {
        return parseFloat(b.index) - parseFloat(a.index);
      });

      // Do the replacements
      for (var i = 0; i < replacements.length; i++) {
        var replacement = replacements[i];
        content = replacement.replace(content);
      }

      return content;
    });
  };

  $docsify.plugins = [].concat(install, $docsify.plugins);

}());