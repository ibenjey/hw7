var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.load()
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false
	console.log("Auto play is set to " +video.autoplay)
	console.log("Loop is set to " +video.autoplay)

});

 document.querySelector("#play").addEventListener("click", function() {
	
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 + "%"
	video.play()
	
 });

 document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()

 });

 document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate *= .90
	console.log("Speed is" + videoPlaybackRate)
 })

 document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate /= .90
	console.log("Speed is" + videoPlaybackRate)
 })

 document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip video");
	video.currentTime += 10;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
	console.log("Current Video time is ", video.currentTime);
});


 document.querySelector("#mute").addEventListener("click", function(e) {
	const label = () => video.muted ? "Mute": "Unmute";
	e.target.textContent = label();
	video.muted = !video.muted;
	  console.log(label());
  });
  
  document.querySelector("#slider").addEventListener("input", function(e) {
	video.volume = e.target.value / 100;
	  console.log("The current value is ", video.volume);
	displayVolume();
  });
  
  document.querySelector("#vintage").addEventListener("click", function(e) {
	if (!video.classList.contains("oldSchool")) {
	  video.classList.add("oldSchool");
	}
  });
  
  document.querySelector("#orig").addEventListener("click", function(e) {
	if (video.classList.contains("oldSchool")) {
	  video.classList.remove("oldSchool");
	}
  });
  
  
  function displayVolume() {
	const value = video.volume * 100;
	volume.textContent = `${value} %`;
  }

 

 



