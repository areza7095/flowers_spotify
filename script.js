// var autoPlay = function () {
//   var play = $(".spoticon-play-16");
//   $(".spoticon-skip-back-16").click();
//   var counter = 5;
//   var timer = setInterval(function () {
//     if (counter == 0) {
//       clearInterval(timer);
//       play.click();
//       console.log("Play");
//     } else {
//       console.log(counter);
//     }
//     counter = counter - 1;
//   }, 1000);
// };

// autoPlay();

// window.onSpotifyIframeApiReady = (IFrameAPI) => {
//     let element = document.getElementById('embed-iframe');
//     let options = {
//         width: 200,
//         height: 400,
//         uri: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'
//       };
//     let callback = (EmbedController) => {};
//     IFrameAPI.createController(element, options, callback);
//   };

// function autoplay() {
//     var t = setTimeout(function(){
//         var button = document.querySelector('[data-testid="play-pause-button"]') || false;
//         if (button) {
//             console.log('Click', button)
//             button.click()
//         }
//     }, 999)
// }
// document.addEventListener('DOMContentLoaded', (event) => {
//     autoplay()
// })
