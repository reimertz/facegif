$(function(){
	$('button').click(function(){
		chrome.extension.sendMessage({
	        type: "color-divs"
	    });
	})
});