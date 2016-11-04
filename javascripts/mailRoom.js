"use strict";
var MusicHistory = (function(oldMH){
  var songArray = [];

  oldMH.getSongArray = function(){
// Returns the internal array of songs
    return Array.from(songArray);
  };

  oldMH.addSong = function (obj) {
// Adds the object to the internal array
    songArray.push(obj);
  };

  oldMH.addArray = function (obj) {
    let tempSongs = obj.songs;
// This is the callback function! Calls MusicHistory.addSong in a loop
    for (let i = 0; i < tempSongs.length; i++ ){
      MusicHistory.addSong(tempSongs[i]);
    }
    MusicHistory.writeArray(tempSongs);
  };

  oldMH.removeSong = function (event) {
// Removes the specified song from the internal array
    let tempIndex = event.target.id;
    songArray = songArray.splice(tempIndex, 1);
    let tempArr = event.target.parentElement.getElementsByClassName("descriptor");
    let selectArr = [ "album", "artist", "genre"];
    for (let i = 0; i < tempArr.length; i++){
      MusicHistory.cullSelect(tempArr[i].innerHTML, selectArr[i]);
    }
  };
  
  return oldMH;

})(MusicHistory || {});