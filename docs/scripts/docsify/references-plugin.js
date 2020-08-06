(function () {
  var install = function(hook, vm) {
    refTargetPattern = /\[([^\]]*)\]\(([a-zA-Z0-9.]+) +:ref\)/mg;
    refSourcePattern = /:ref=([a-zA-Z0-9.]+)/mg;

    hook.beforeEach(function(content) {
      var replacements = [];
      var figures = {};
      var figureNum = 0;
      var me = this;

      // Find sources
      var match = this.refSourcePattern.exec(content);
      while (match != null) {
        var replacement = {
          type: match[1],
          index: match.index,
          length: match[0].length,
          replace: function(content) {
            var id = this.type.replace(/\./mg, '-').toLowerCase();
            var replacementString = ':id=' + id;
            var result = content.substring(0, this.index) + replacementString + content.substring(this.index + this.length);
            return result;
          }
        };
        replacements.push(replacement);            
        match = this.refSourcePattern.exec(content);
      }

      // Find references
      var match = this.refTargetPattern.exec(content);
      while (match != null) {
        var replacement = {
          label: match[1],
          type: match[2],
          index: match.index,
          length: match[0].length,
          replace: function(content) {
            var label = this.label;
            if (!label) {
              label = this.type.substring(this.type.lastIndexOf('.') + 1);
            }
            var id = this.type.replace(/\./mg, '-').toLowerCase();
            var replacementString = '<a class="reference" href="#/Reference?id=' + id + '" title="' + this.type + '"><code>' + label + '</code></a>';
            var result = content.substring(0, this.index) + replacementString + content.substring(this.index + this.length);
            return result;
          }
        };
        replacements.push(replacement);            
        match = this.refTargetPattern.exec(content);
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