// checks for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const toObserver = document.querySelector(
    ".ytp-fullscreen-grid-main-content",
  );

  // console.log(toObserver);
  console.log("This is from the mutation observer");
 
  // mutation observer object - observe the recommendations being shown
  const observer = new MutationObserver(async(mutations) => {
      const toggle = await browser.storage.sync.get("rec_switch");
      let recommendations = document.getElementsByClassName(
        "ytp-fullscreen-grid-stills-container",
      );
      console.log("This is from the mutation observer: ", recommendations[0]);
      if (toggle.rec_switch) {
        recommendations[0].style.display = "none";
      } else {
        recommendations[0].style.display = "grid"; // actual display found in inspector
      }

  });

  // lets check for all idk which is right
  observer.observe(toObserver, {
    childList: true, // I want the direct children under the node
    subtree: true,
  });
});

// only runs when the user changes the toggle
browser.storage.sync.onChanged.addListener(async () => {
  const toggle = await browser.storage.sync.get("rec_switch");
  let recommendations = document.getElementsByClassName(
    "ytp-fullscreen-grid-stills-container",
  );
  console.log("This is from the storage onChange listener: ", recommendations[0]);
  if (toggle.rec_switch) {
    recommendations[0].style.display = "none";
  } else {
    recommendations[0].style.display = "grid"; // actual display found in inspector
  }
});
