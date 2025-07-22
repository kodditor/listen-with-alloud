
chrome.runtime.onInstalled.addListener(() => {
  //  Add to context menus after a right click on the link
  chrome.contextMenus.create({
    id: "listenLink",
    title: "🎧 Listen with Alloud",
    contexts: ["link"]
  });

  //  Add to context menus after a right click on the page
  chrome.contextMenus.create({
    id: "listenPage",
    title: "🎧 Listen to This Page with Alloud",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "listenLink" && info.linkUrl) {
    chrome.tabs.create({
      url: `https://alloud.kodditor.co/listen/${encodeURIComponent(info.linkUrl)}`
    });
  }

  if (info.menuItemId === "listenPage" && tab?.url) {
    chrome.tabs.create({
      url: `https://alloud.kodditor.co/listen/${encodeURIComponent(tab.url)}`
    });
  }
});
