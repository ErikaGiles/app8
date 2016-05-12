// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener( 'deviceready', function() {
		$('#btnbeep').on('tap', function (){
			navigator.notification.beep(5);
		});
		
		$('#btnvibrar').on('tap', function (){
			navigator.notification.vibrate(2000);
		});
	});
});