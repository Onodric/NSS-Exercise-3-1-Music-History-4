"use strict";

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

MusicHistory.loadJSON("data/songs.JSON", MusicHistory.addArray);
MusicHistory.loadJSON("data/more-songs.JSON", MusicHistory.addArray);

// MusicHistory.writeArray(MusicHistory.getSongArray());



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

