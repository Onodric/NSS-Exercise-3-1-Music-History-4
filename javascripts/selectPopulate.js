"use strict";
var MusicHistory = (function(oldMH){
  let artistOptions = [];
  let albumOptions = [];

// This method loops through the song array and extracts the desired keys' values:
// this returns an array of the needed select/options.

  oldMH.getOption = function(prop){
    let tempArray = MusicHistory.getSongArray;
    let tempOptions = [];
    for (let i = 0; i < tempArray.length; i++){
      let exactProp = tempArray[i][prop];
      let decider = tempOptions.contains(exactProp);
      if (!decider){
        tempOptions.push(exactProp);
      }
    }
    return tempOptions;
  };
  
  return oldMH;

})(MusicHistory || {});