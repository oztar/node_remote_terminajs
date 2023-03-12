'use strict'
const config = require('./services').config;
require('./source');
const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path') ;
let win;

const http = require('http');


function createWindow() { 
    win = new BrowserWindow({width: 800,
			     height: 600,
			     autoHideMenuBar: true
			    });
    win.webContents.openDevTools()
    win.loadURL('http://localhost:'+config.config.options.port+'/');
    /*
	url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   }))
*/
    win.on('close', function() { //   <---- Catch close event
	http.get('http://localhost:'+config.config.options.port+'/close',function(){});     
    });
}  

app.on('ready', createWindow)




