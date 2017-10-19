
var track;
var trackList;
(function(ENV) {
const client_id = ENV.client_id;
SC.initialize({
  client_id: client_id
});


// stream track id 293
SC.stream('/tracks/12429667').then(function(player){
  ;
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {  q: 'songs', }).then(function(tracks) {
  let firstTrack = tracks[0];
  SC.stream('/tracks/' + firstTrack.id).then(function(player) {
    player.play();

//all event listeners go buttons in here
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var next = document.getElementById('next');



function play() {
  player.play();
}

function pause() {
  player.pause();
}

function stop() {
  player.pause();
}

//function next() {
//  SC.get('/tracks', {  q: 'john', }).then(function(tracks) {
//    let firstTrack = tracks[0];
//    SC.stream('/tracks/' + firstTrack.id).then(function(player) {
//      player.play();
//});



play.addEventListener('click', play)
pause.addEventListener('click', pause)
next.addEventListener('click', next)
stop.addEventListener('click', stop)



  });

});


//rest of code goes here


})(ENV)
