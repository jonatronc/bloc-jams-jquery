{

//PLAY AND PAUSE BUTTON
  //when the #play-pause button is clicked run the function that will call on the playPause() method from the player.js file. Makes the Play button work
  $('button#play-pause').click( 'click', function() {
    player.playPause();
    $(this).attr('playState', player.playState); //adds the attribute to HTML which makes the CSS display effective, so it shows and hides the pause button according to the playState defined in the playPause() method in player.js
  });

//NEXT BUTTON
  $('button#next').click( 'click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying)
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if (nextSongIndex >= album.songs.length){ return; }
    player.playPause(nextSong);
  });

  //PREVIOUS BUTTON
  $('button#previous').click( 'click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying)
    const prevSongIndex = currentSongIndex - 1; //takes the current song index and subtracts one to get previous song index
    const prevSong = album.songs[prevSongIndex]; //pulls the song from the album object via the prevSongIndex value.
    if (prevSongIndex < 0) { return; } //if the previous song index is less then zero exit function
    player.playPause(prevSong); //otherwise it will play the previous song

  });
}
