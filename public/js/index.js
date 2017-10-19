
var track;
var trackList;
(function(ENV) {
const client_id = ENV.client_id;
SC.initialize({
  client_id: client_id
});


// stream track id 293
SC.stream('/tracks/12429667').then(function(player){
  
});

// find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {  q: 'songs', }).then(function(tracks) {
  let firstTrack = tracks[0];
  SC.stream('/tracks/' + firstTrack.id).then(function(player) {
    player.play();

//all event listeners go buttons in here
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');



function play() {
  player.play();
}

function pause() {
  player.pause();
}

//function stop() {
//  player.pause();
//}

//function next() {
//  SC.get('/tracks', {  q: 'john', }).then(function(tracks) {
//    let firstTrack = tracks[0];
//    SC.stream('/tracks/' + firstTrack.id).then(function(player) {
//      player.play();
//});



btn1.addEventListener('click', play)
btn2.addEventListener('click', pause)
btn3.addEventListener('click', next)
btn4.addEventListener('click', stop)



  });

});


//rest of code goes here


})(ENV)
