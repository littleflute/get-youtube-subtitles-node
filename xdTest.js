

var getYoutubeSubtitles = require('./index.js');
let videoId = 'nRFkbZE7OjQ'
console.log("xd1: ...");

getYoutubeSubtitles(videoId,'auto')
.then(subtitles => {
  console.log("xd2: ...");
  console.log(subtitles)
})
.catch(err => {
  console.log(err)
})