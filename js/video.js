var video;
/*
= document.getElementById("player1");
*/

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = (this.value / 100);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("Slow down")
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("Speed up")
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	new_time = video.currentTime + 15;
	if (new_time >= video.duration) {
		video.load();
	} else {
		video.currentTime = new_time;
	}
	console.log("Current location");
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
});
