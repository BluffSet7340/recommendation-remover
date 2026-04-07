const toggleBtn = document.getElementById("toggleButton");

toggleBtn.addEventListener("click", async () => {
  let flag = await browser.storage.sync.get("rec_switch");
  browser.storage.sync.set({
    rec_switch: !flag.rec_switch,
  });
  console.log("switch flipped to ", flag.rec_switch);
});
