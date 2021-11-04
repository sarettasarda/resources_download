chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action == 101){
		let query = request.data;
		var pageLinks = getLinksInWebpage(query);
		
		if (pageLinks.length == 0){
			alert ("No matches found");
		}
		else {
			chrome.runtime.sendMessage({ action: 201, data: pageLinks});
		}
	}
});

function getLinksInWebpage(filter) {
	if (!filter){
		alert ("Nothing to download");
		return;
	}

	var urls = document.getElementsByTagName('a');
	
	var links = [];
	var counter = 0;
	
	for (var i = 0; i < urls.length; i++) {
		if (urls[i].getAttribute('href')!== null && urls[i].getAttribute('href').includes(filter)) {
			var fileLinkAndName = {
				link: urls[i].href,
				name: urls[i].textContent
			};
			links[counter] = fileLinkAndName;
			counter++;
		}
	}
	
	console.log ("There are " + counter +" matching links in this page");
		
	return links;
}



