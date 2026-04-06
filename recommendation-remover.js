// no recommendations

browser.storage.sync.onChanged.addListener(async ()=>{
  const toggle = await browser.storage.sync.get("rec_switch");
  let recommendations = document.getElementsByClassName("ytp-fullscreen-grid-stills-container");
  console.log(recommendations[0]);
  if(toggle.rec_switch){
      recommendations[0].textContent = '';
  } else{
    recommendations[0].style.color = "white";
    recommendations[0].textContent = "ebola";

  }
});



