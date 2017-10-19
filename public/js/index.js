var track;
var trackList;
(function(ENV) {
    const client_id = ENV.client_id;
    SC.initialize({
      client_id: client_id
    });


    // stream track id 293
    //  SC.stream('/tracks/293').then(function(player) {

    //});

    // find all sounds of buskers licensed under 'creative commons share alike'

    var songtext = document.getElementById('songtext');

    SC.get('/tracks', {
        q: 'rock',
      }).then(function(tracks) {
          let firstTrack = tracks[0];

          SC.stream('/tracks/' + firstTrack.id).then(function(player) {
            track = player;
            player.play();
            //firstTrack.id = songtext.innerHTML;

            //all event listeners for buttons in here
            var btn1 = document.getElementById('btn1');
            var btn2 = document.getElementById('btn2');
            var btn3 = document.getElementById('btn3');
            var btn4 = document.getElementById('btn4');
            var search = document.getElementById('search')
            var songtext = document.getElementById('songtitle');
            var release = document.getElementById('releasedate');

            songtext.innerHTML = firstTrack.title;
            //    songtext.innerHTML = 'Genre ' + firstTrack.genre;
            //  release.innerHTML = (firstTrack.release_month + firstTrack.release_day + ', ' + firstTrack.release_year)


            function play() {
              player.play();
            };

            function pause() {
              player.pause();
            };

            btn1.addEventListener('click', play);
            btn2.addEventListener('click', pause);
            btn3.addEventListener('click', stop);
            btn4.addEventListener('click', next);

                function stop() {
                player.pause();
             player.seek(0);
           };



//          function next() {
//            SC.get('/tracks', {
//              q: 'rock',
//            }).then(function(tracks) {
//            let secondTrack = tracks[1];
//             SC.stream('/tracks/' + secondTrack.id).then(function(player) {
//                player.play();


//                btn1.addEventListener('click', play);
//                btn2.addEventListener('click', pause);
//                btn3.addEventListener('click', stop);
//  //              btn4.addEventListener('click', next);

});
});


            //rest of code goes here


          })  (ENV)
