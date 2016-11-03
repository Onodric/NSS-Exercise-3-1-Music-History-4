"use strict";

// Callback Function...

function showSongs(songArray){
  //populate the DOM
}

// we are getting strings ready to insert into the DOM for select options....!

MusicHistory.addSong("data/song.JSON", showSongs);
MusicHistory.addSong("data/more-songs.JSON", showSongs);



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

/* EXAMPLE ONE
function executeThisCodeAfterFileIsLoaded () {
  // A bit more about what `this` is here. What is the execution context?
  console.log(this.responseText);

  // Show usage of JSON.parse() here to get a POJO
}

// Create an XHR object

// XHR objects emit events when their operation is complete, or an error occurs

// Then tell the XHR object exactly what to do

// Tell the XHR object to start
*/

