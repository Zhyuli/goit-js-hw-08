import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const KEY_CURRENT_TIME = "videoplayer-current-time";

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(KEY_CURRENT_TIME, JSON.stringify(seconds));
}

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_CURRENT_TIME)) || 0);


// const onPlay = function (data) {
//     localStorage.setItem("videoplayer-current-time", data.seconds);
// }
// player.on('play', throttle(onPlay, 1000));

// const currentTime = +localStorage.getItem("videoplayer-current-time");
// // console.log(currentTime);

// player.setCurrentTime(currentTime).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
// });

// * on(event: string, callback: function): void
// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

//  *setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>

//     player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });