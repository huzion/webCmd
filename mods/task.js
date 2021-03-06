// Generated by CoffeeScript 1.9.3
var _gitPath, config, e, fileCon, fs, taskPad;

fs = require('fs');

config = {};

try {
  fileCon = fs.readFileSync('config.json', 'utf-8');
  config = JSON.parse(fileCon);
} catch (_error) {
  e = _error;
}

_gitPath = config.gitPath;

taskPad = {
  select: function(name, cmd, msg) {
    var _cmdStr, _path, _src;
    _cmdStr = '';
    _path = config.task[name].path;
    _src = config.task[name].src;
    switch (cmd) {
      case 'gulp':
        _cmdStr = "cd " + _path + " && cd build && gulp";
        break;
      case 'status':
        _cmdStr = "cd " + _path + " && " + _gitPath + " status";
        break;
      case 'push':
        _cmdStr = "cd " + _path + " && " + _gitPath + " add . && " + _gitPath + " commit -m '" + msg + "' && " + _gitPath + " push";
        break;
      case 'build':
        _cmdStr = "cd " + _path + " && cd build && gulp --e dev";
        break;
      case 'diff':
        _cmdStr = "cd " + _path + " && " + _gitPath + " diff " + _src;
        break;
      case 'checkout':
        _cmdStr = "cd " + _path + " && " + _gitPath + " checkout " + msg;
        break;
      case 'pull':
        _cmdStr = "cd " + _path + " && " + _gitPath + " pull origin " + msg;
        break;
      default:
        _cmdStr = "cd " + _path + " && " + _gitPath + " status";
        break;
    }
    return _cmdStr;
  }
};

module.exports = taskPad;
