var os = require('os');
var colors = require('colors');
var OSinfo = require('./modules/OSInfo');
var ConvertTimeMinutes = require('./modules/ConvertTimeMinutes');
var ConvertTimeHours = require('./modules/ConvertTimeHours');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/getConvertTimeMinutes':
                ConvertTimeMinutes.print();
                break;
            case '/getConvertTimeHours':
                ConvertTimeHours.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});