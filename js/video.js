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
		video.play();
		document.getElementById("slower").innerHTML = video.playbackRate * 100 + "%"?;
});
/* slow down video */

document.querySelector("#faster").addEventListener("click", function() {
	console.log("New Speed")
	video.play();
	document.getElementById("faster").innerHTML = video.playbackRate * 100 + "%"?;
});
/* speed up video */

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.play();
	document.getElementById("skip").innerHTML = ?;
});
/* skip ahead */

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.play();
	document.getElementById("mute").innerHTML = ?;
});
/* mute */

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume slider")
	video.play();
	document.getElementById("slider").innerHTML = ?;
});
/* volume slider */

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Class")
	video.play();
	document.getElementById("vintage").innerHTML = ?;
});
/* utlize old school class */


document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Class")
	video.play();
	document.getElementById("orig").innerHTML = ?;
});
/* remove old school class */
