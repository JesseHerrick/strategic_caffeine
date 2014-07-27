(function() {
  var App, StrategicCaffeine, gui, os;

  gui = require('nw.gui');

  os = require('os');

  StrategicCaffeine = Ember.Application.extend({
    platform: {
      isWindows: os.type() === 'Windows_NT',
      isMac: os.type() === 'Darwin',
      isLinux: os.type() === 'Linux'
    }
  });

  App = StrategicCaffeine.create();

}).call(this);
