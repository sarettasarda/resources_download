chrome.runtime.onInstalled.addListener( () => {
	console.log('Installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action == 201){
		console.log ("background - request to download files");
		downloadFiles(request.data);
		sendResponse({success: true});
	} else {
		console.log ("background - not a valid action");
	}
});

function downloadFiles(filesToDownload){
	for (var i = 0; i < filesToDownload.length; i++) {
		var filename = "resources_download/" + filesToDownload[i].name;
		
		chrome.downloads.download({
			url: filesToDownload[i].link,
			conflictAction: "uniquify",
			filename: filename
		});
	}
}
