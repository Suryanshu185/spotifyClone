console.log('welcome to spotify');
let songIndex=0;
let audioElement = new Audio('demonTime.mp3');
let MasterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
    {songName: "DemonTime", filePath:"demonTime.mp3" , coverpath:"Demon Time.jpg"},
    {songName: "DemonTime", filePath:"demonTime.mp3" , coverpath:"Demon Time.jpg"},
    {songName: "DemonTime", filePath:"demonTime.mp3" , coverpath:"Demon Time.jpg"},
    {songName: "DemonTime", filePath:"demonTime.mp3" , coverpath:"Demon Time.jpg"},
    {songName: "DemonTime", filePath:"demonTime.mp3" , coverpath:"Demon Time.jpg"},
    {songName: "DemonTime", filePath:"demonTime.mp3" , coverpath:"Demon Time.jpg"},
]
// audioElement.play();
// handle play/pause click
MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;   
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle'); 
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})