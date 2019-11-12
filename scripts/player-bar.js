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

  $('#time-control input').on('input', function(event) {
    player.skipTo(event.target.value)
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime(); //grabs the part of the song that's played
    const duration = player.getDuration(); // grabs the entire duration of the songs
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(currentTime); //the current time gets passed in to HTML as text
    $('#time-control input').val(percent); //this sets the inputs value in the HTML to whatever is calculated for the percent.
    $('#time-control .total-time').text(duration); //adds the total duration.
  }, 1000);

  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value)
  });

}
