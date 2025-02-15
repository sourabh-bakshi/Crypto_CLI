#!/usr/bin/env node

const {Command} = require('commander');
const pkg = require('../package.json');
const colors = require('colors');
const program = new Command();

program
.version(pkg.version)
.command('check','Check Price')
.description('A Cliche Crypto Tool For You')
.parse(process.argv);

console.log(`Welcome To the CryptoCLI tool`.green);
console.log(`Please Enter 'cryptocli check price' OR enter 'cryptocli check price --help' to see instructions`.bgMagenta);
