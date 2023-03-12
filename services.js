'use strict'
const lib = require('config-autoreload');

const path_file_config = 'C:/proyectos/node_remote-terminaljs/config/config.json';

lib.createConfig(path_file_config);

//lib.createMem(['']);

module.exports.config  = lib;
module.exports.express = require('express');
module.exports.http    = require('http');
module.exports.io      = require('socket.io');
module.exports.wjs     = require('./source/lib_rtjs');
