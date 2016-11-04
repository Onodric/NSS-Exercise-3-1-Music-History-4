"use strict";

// FINISHED

//   dataRequester.js
//     DONE! MusicHistory.loadJSON("file", callBackFn)
//       returns an array of the JSON to the callback function

//   mailRoom.js -- internal data handlers
//     DONE! MusicHistory.getSongArray()
//       returns the internal array of songs
//     DONE! MusicHistory.addSong(obj)
//       adds the object to the internal array
//       called by eventListener on add page
//     DONE! MusicHistory.addArray(songArray)
//       this is the callback function! calls MusicHistory.addSong in a loop
//     DONE! MusicHistory.removeSong(obj)
//       removes the specified song from the internal array
//       can this return the deleted song object???
//       called from delete button on card

//   dataParser.js
//     DONE! MusicHistory.getPropValue(indexNum, prop)
//       returns a property value of a specific object in the main array
//     DONE! MusicHistory.getSelectList(prop)
//       calls .getPropertyValue() for a select list
//       returns an array of the options needed...

//   shredder.js -- internal deleters
//     MusicHistory.removeArray()
//       deletes all songs data from the internal array
//       don't know if we will need this...

// NEEDED

//   domGuy.js -- domwriter
//     DONE! MusicHistory.writeSong(domIdOfCardParent, obj)
//       takes an object and domId
//       writes the correct card by getting info from .getPropValue()
//       inserts the card at the end of domIdOfParent
//     DONE! MusicHistory.writeArray(arr)
//       Calls writesong in a loop over the MusicHistory.getsongArray()
//     MusicHistory.deleSong(obj)
//       takes a card object (taken from event.target.parent)
//       deletes from array (calls removeSong)
//       deletes event.target.parent of button
//       called from delete button on card
//     MusicHistory.writeSelect()
//       called by eventListener on add page
//       calls .getSelectList(prop)
//       loops through that ^ array
//       calls buildOption
//       adds to correct select list
//     MusicHistory.buildOption(string)
//       document.createElement(option)
//       .innerHTML = string
//       .id = string
//       set other attributes too
//     MusicHistory.removeSelect(obj)
//       called by event listener at same time as removeSong()
//       loops through the three? props
//       calls cullOptions
//     MusicHistory.cullOptions(str)
//       Called AFTER .removeSong and .deleSong
//       culls one select list at a time
//       if (!.getSelectList.contains(str)){ .remove(choice id = str)

// order of operations:
  // event listener on add page
    // add json calls 


//Here we invoke the JSON loads,
  // which calls the module to write the JSON into the internal array
  // which calls the internal array push on each member of the JSON file.
// Then we call the dom array writer
  // it calls the song builder and
  // the select list builder
    // which calls the option builder

MusicHistory.loadJSON("data/song.JSON", MusicHistory.addArray);
MusicHistory.loadJSON("data/more-songs.JSON", MusicHistory.addArray);
MusicHistory.writeArray(MusicHistory.getSongArray());



// THIS SHOULD BE THE MAIN HANDLER.

// Part One
// 1. Read from local JSON file with an XHR.
// 2. Loop over results and inject into Music History list view.
// 3. Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

// Part Two
// 1. Take your music and split it into two JSON file instead of them all living on one file.
// 2. Add a button at the bottom of your music list and label it "More >".
// 3. Load the songs from the first list and inject the DOM into the document as you've already done.
// 4. When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

