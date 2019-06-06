// Dependencies
var replace = require('replace');
var fs = require('fs');

// Paths
var buildFolder = './build/';
var installFileHtml = buildFolder + 'install-page.html';
var srcFolder = './src/';

// Get entire contents of processed bookmarklet code as var
var bookmarkletContent = fs.readFileSync(buildFolder + 'bookmarklet_export.js');

// Copy template install page to build folder
fs.copyFileSync(srcFolder + 'install-page-template.html',installFileHtml);

// Replace placeholder variable in install HTML file with raw contents
replace({
    regex : "{{bookmarklet_code}}",
    replacement : bookmarkletContent,
    paths : [installFileHtml],
    recursive : true,
    silent : false
});