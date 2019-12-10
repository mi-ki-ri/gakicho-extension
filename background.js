chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("console")
	chrome.tabs.sendMessage(tab.id, "Action");
});