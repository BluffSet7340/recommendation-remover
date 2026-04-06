// no recommendations

let toggle = browser.storage.sync.get("rec_switch")

if(rec_switch){
  let recommendations = document.getElementsByClassName("ytp-fullscreen-grid-stills-container");

  recommendations[0].textContent = "";
}



