"use strict";
var MusicHistory = (function(oldMH){

  oldMH.writeSong= function(obj, index){
// Writes the correct card by getting info from obj
    let newElement2;
    let newCard = document.createElement("article");
    let newElement1 = document.createElement('h2');

    newCard.addClass('card');
// Create unique id for the card using title
    newElement1.attr('id', obj.title + index);
    newElement1.innerHTML = obj.title;
    newCard.append(newElement1);
    newElement1 = document.createElement('h5');
    newElement1.addClass('duration');
    newElement1.innerHTML = obj.duration;
    newCard.append(newElement1);
    newElement1 = document.createElement('ul');
    newElement2 = document.createElement('li');
    newElement2.addClass('descriptor');
    newElement2.innerHTML = obj.artist;
    newElement1.append(newElement2);
    newElement2 = document.createElement('li');
    newElement2.addClass('descriptor');
    newElement2.innerHTML = obj.album;
    newElement1.append(newElement2);
    newElement2 = document.createElement('li');
    newElement2.addClass('descriptor');
    newElement2.innerHTML = obj.genre;
    newElement1.append(newElement2);
    newCard.append(newElement1);
    newElement1 = document.createElement("button");
    newElement1.addClass('deleter');
// Create button id based on index (in the main array)
    newElement1.attr('id', 'index');
    newElement1.innerHTML = "Delete";
    newCard.append(newElement1);
// inserts the card at the end of Parent
    document.getElementById('view-songs').append(newCard);
  };

  oldMH.writeArray = function(arr){
// Calls writesong in a loop over the MusicHistory.getsongArray()
    for (let i = 0; i < arr.length; i++){
      MusicHistory.writeSong(arr[i], i);
// calls writeSelect for each song
      MusicHistory.writeSelect(arr[i]);      
    }
  };

  oldMH.deleSong = function(event){
    let tempArr = document.getElementsByTagName('button');    
// Deletes from array (calls removeSong)
    MusicHistory.removeSong(event);
// Deletes event.target.parent of button
    event.target.parentElement.remove();
// Refactors button id's
    for (let i = 0; i < tempArr.length; i++){
      tempArr[i].attr('id', i);
    }
  };

  oldMH.writeSelect = function(){
// Calls .getSelectList on all three selects...
    let albumArr = MusicHistory.getSelectList("album");
    let artistArr = MusicHistory.getSelectList("artist");
    let genreArr = MusicHistory.getSelectList("genre");
    let arrArr = [albumArr, artistArr, genreArr];
    let selectArr = [ "album", "artist", "genre"];
// Loop through each array, and get the results
    for (let i = 0; i < arrArr.length; i++){
      for (let j = 0; j < arrArr[i].length; j++){
// Call buildOption
        MusicHistory.buildOption(arrArr[i][j], selectArr[i]);
      }
    }
  };

  oldMH.buildOption = function(string, listName){
    let newOpt = document.createElement("option");
    let inject = document.getElementById(listName);
    newOpt.innerHTML = string;
// Add to correct select list
    inject.append(newOpt);
  };

  oldMH.cullOptions = function(str, select){
// culls unused items from one select list at a time
    if(!MusicHistory.getSelectList(select).contains(str)){
      document.getElementById(str).remove();
    }
  };
  
  return oldMH;

})(MusicHistory || {});
