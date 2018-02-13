const utils = require('../utils/utils');
const console = require('better-console');

function Script() {
    this.info = 'This is my first script!';
    this.path = process.argv[1];
    this.args = process.argv.slice(2);
    this.meta = {};
}

Script.prototype.init = function () {
    this.setArguments();
}

Script.prototype.setArguments = function () {
    this.meta = utils.parseArguments(this.args);
}

Script.prototype.analyze = function () {
    var str = '',
        keys = Object.keys(this.meta);
    // console.group('List of parameters introduced');
    // console.info('Key - Value');
    // for (var p in keys) {
    //     console.log('%s - %s', keys[p], this.meta[keys[p]]);
    // }
    // console.groupEnd('List of parameters introduced');
    
    console.log("Hola");
    console.table([this.meta]);
}


module.exports = new Script();