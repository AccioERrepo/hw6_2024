var video;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
video.autoplay = false;
video.loop = false;
video.load();
});
/* page load */

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    video.play();
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
 });
 /* play video and update volume */

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
 	video.pause();
});
/* pause video. */

	 document.querySelector("#slower").addEventListener("click", function() {
		console.log("New Speed")
		video.playbackRate *= 0.9;
});
/* slow down video */

document.querySelector("#faster").addEventListener("click", function() {
	console.log("New Speed")
	video.playbackRate /= 0.9;
});
/* speed up video */

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 10;

	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
});
/* skip ahead using vid.currentTime */

document.querySelector("#mute").addEventListener("click", function() {
	console.log(mute)
	
	if (video.muted == true){
		document.querySelector("#mute").innerHTML = "unmute";
		video.muted = false;
	}
	else {
		document.querySelector("#mute").innerHTML = "mute";
		video.muted = true;
	}
});
/* mute */

document.querySelector("#slider").addEventListener("change", function() {
	console.log(video.volume)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});
/* volume slider */

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Class")
	video.classList.add("oldSchool");
});
/* utlize old school class on the video element */


document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Class")
	video.classList.remove("oldSchool");
});
/* remove old school class */ 
