// IE 時，改變 class name
const video = document.getElementById('video');
video.oncanplaythrough = () => {
	if(navigator.userAgent.match("MSIE")) {
		const videoEL = document.getElementById('js-fullscreen-video');
		videoEL.setAttribute('class', 'fullscreen-video ie');
	}
}