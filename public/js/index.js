(function(ENV) {
const client_id = ENV.client_id;
SC.initialize({
  client_id: client_id
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play();
});


//rest of code goes here


})(ENV)
