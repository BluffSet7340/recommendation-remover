// initialize extension on installation
browser.runtime.onInstalled.addListener(async ()=>{
    browser.storage.sync.set({
        rec_switch: false
    })
})