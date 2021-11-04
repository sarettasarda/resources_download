const searchBox = document.getElementById('search');
const downloadButton = document.getElementById('download');

downloadButton.addEventListener( 'click', () => {
	console.log ("popup - download button clicked");
	
	let filter = searchBox.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var tabId = tabs[0].id;
		
		chrome.tabs.sendMessage(tabId, {action: 101, data: filter})
	});
});
