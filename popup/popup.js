const toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", async () => {
  let flag = await browser.storage.sync.get("rec_switch");
  browser.storage.sync.set({
    rec_switch: !flag.rec_switch,
  });
  let updatedFlag = await browser.storage.sync.get("rec_switch");
  if(updatedFlag.rec_switch){
    toggleBtn.innerText= "Turn OFF"
  } else{
    toggleBtn.innerText = "Turn ON"
  }
});
