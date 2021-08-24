var iframe = document.querySelector('iframe');

let iframeNum = document.getElementsByTagName('iframe').length;

var player01 = new Vimeo.Player('vid01');
var player02 = new Vimeo.Player('vid02');

let currentTime01 = 0

player01.on('timeupdate', function(data){
    currentTime01 = data.seconds
    console.log(currentTime01)
    localStorage.setItem('videoTime01', currentTime01);
})

let lastWatchedTime01 = localStorage.getItem('videoTime01');

if(lastWatchedTime01){
    player01.setCurrentTime(lastWatchedTime01);
}

let currentTime02 = 0

player02.on('timeupdate', function(data){
    currentTime02 = data.seconds
    console.log(currentTime02)
    localStorage.setItem('videoTime02', currentTime02);
})

let lastWatchedTime02 = localStorage.getItem('videoTime02');

if(lastWatchedTime02){
    player02.setCurrentTime(lastWatchedTime02);
}

const convertMinuteSecond = function(seconds){
    const hour = Math.floor(seconds/60)
    const minutes = seconds%60

    console.log(`${hour}h : ${minutes}m`)
}

convertMinuteSecond(119);