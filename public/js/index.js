(function(ENV) {
    const client_id = ENV.client_id;
    SC.initialize({
      client_id: client_id
    });

    var songtext = document.getElementById('songtext');
    var searchtext = document.getElementById('search');
    var picture = document.getElementById('pic');
    var searchbutton = document.getElementById('searchbtn');
    var songlink = document.getElementById('songlink');

    SC.get('/tracks', {
         q: 'blinded',
      }).then(function(tracks) {

          let firstTrack = tracks[0];

          SC.stream('/tracks/' + firstTrack.id).then(function(player) {
            player.play();

            //all event listeners for buttons in here
            var btn1 = document.getElementById('btn1');
            var btn2 = document.getElementById('btn2');
            var btn3 = document.getElementById('btn3');
            var btn4 = document.getElementById('btn4');
            var songtext = document.getElementById('songtitle');
            var release = document.getElementById('releasedate');
            var searchtext = document.getElementById('search');
            var picture = document.getElementById('pic');

            songtext.innerHTML = firstTrack.title;
            songinfo.innerHTML = firstTrack.description;
            songlink.innerHTML = "Track: " + firstTrack.permalink_url;
            picture.src = firstTrack.artwork_url;


          function play() {
            player.play();
          };

          function pause() {
            player.pause();
          };

          function stop() {
          player.pause();
          player.seek(0);
          };


            btn1.addEventListener('click', play);
            btn2.addEventListener('click', pause);
            btn3.addEventListener('click', stop);
            btn4.addEventListener('click', next);
            searchbtn.addEventListener('click', playmusic)


});
});


function play() {
  player.play();
};

function pause() {
  player.pause();
};

function stop() {
player.pause();
player.seek(0);
};




function next() { SC.get('/tracks', {
    q: "kids"
  }).then(function(tracks) {

 let secondTrack = tracks[1];

    SC.stream('/tracks/' + secondTrack.id).then(function(player) {
        player.play();


        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var btn3 = document.getElementById('btn3');
        var btn4 = document.getElementById('btn4');
        var search = document.getElementById('search')
        var songtext = document.getElementById('songtitle');
        var release = document.getElementById('releasedate');
        var picture = document.getElementById('pic');

        songtext.innerHTML = secondTrack.title;
        songinfo.innerHTML = secondTrack.description;
        songlink.innerHTML = "Track: " + secondTrack.permalink_url;
        picture.src = secondTrack.artwork_url;

        function play() {
          player.play();
        };

        function pause() {
          player.pause();
        };

        function stop() {
        player.pause();
        player.seek(0);
        };




        btn1.addEventListener('click', play);
        btn2.addEventListener('click', pause);
        btn3.addEventListener('click', stop);
        btn4.addEventListener('click', next);


      });
      });
}





            //rest of code goes here


          })  (ENV)
