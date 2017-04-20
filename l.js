#!/usr/bin/env node
"use strict";

//Require directory search module
var glob = require("glob");

//Require commandline process module
const exec = require('child_process').exec;

//Extend the array prototype
let map = Array.prototype.map;

//Clean up the input arguments
var args = process.argv.slice(2);

//Assign the name of the directory alias persistent on Desktop
let aliasDir = "Desktops";

//Run the main process
(function(action) {

  //Declare variables for the location and destiantion of file folders
  var fileLocation,fileDestination;

  //Based on the input action assign the proper values to these variables
  if (action === "checkout") {
    fileLocation = "files/";
    fileDestination = "/users/larryschirmer/desktop";
  }else if ( action === "recall" ) {
    fileLocation = "/users/larryschirmer/desktop/";
    fileDestination = "./files";
  }

  //Glob searches for all of the matching files in the assigned directory
  //In this case we are looking for all of the files in the fileLocation
  glob(fileLocation+"*", function (er, files) {

    //Loop through each one of the files and delimit all of the spaces
    for (var i = 0; i < files.length; i++) {

      //Read each letter's charCode and replace spaces with "\ "
      let a = map.call(`${files[i]}`, function(x) {

        //Assign the character number to this variable
        let characterNumber = x.charCodeAt(0);

        //Check if the character is a space (i.e. space = 32)
        if (characterNumber == "32") {
          return "\\ ";
        //Check if the character is a apostrophe (i.e. space = 39)
        }else if (characterNumber == "39") {
          return "\\'";
        }else {
          return x;
        }
      });

      //a is a single letter array that needs to be rejoined
      a = a.join('');

      //Move all of the files in the directory location except the persistent
      //directory alias assigned at the top
      if ( a !== `${fileLocation}${aliasDir}` ) {

        //exec runs a command in the commandline
        //Here we are moving the space delimited file name to the new
        //destination folder
        exec(`mv ${a} ${fileDestination}`, (e,o,er) => {

          //check for errors and print them out
          if (e) {
            console.error(`exec error: ${e}`);
            return;
          }
        });
      }
    }
  });

})(args[0]);
