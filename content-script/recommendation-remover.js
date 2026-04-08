const toObserver = document.body; // grabs the body of any youtube page

// mutation observer object - observe the recommendations being shown
const observer = new MutationObserver(async (mutations) => {
  const toggle = await browser.storage.sync.get("rec_switch");
  let recommendations = document.getElementsByClassName(
    "ytp-fullscreen-grid-stills-container",
  );
  // if it is not undefined
  if(recommendations){
    if (toggle.rec_switch) {
      recommendations[0].style.display = "none";
    } else {
      recommendations[0].style.display = "grid"; // actual display found in inspector
    }
  }
});

// lets check for all idk which is right
observer.observe(toObserver, {
  // childlist checks if nodes have been added or removed from the body element
  childList: true, // I want the direct children under the node
  subtree: true,
});

// only runs when the user changes the toggle
browser.storage.sync.onChanged.addListener(async () => {
  const toggle = await browser.storage.sync.get("rec_switch");
  let recommendations = document.getElementsByClassName(
    "ytp-fullscreen-grid-stills-container",
  );
  if(recommendations){
    if (toggle.rec_switch) {
      recommendations[0].style.display = "none";
    } else {
      recommendations[0].style.display = "grid"; // actual display found in inspector
    }
  }
});
