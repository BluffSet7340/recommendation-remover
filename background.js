// initialize extension on installation
browser.runtime.onInstalled.addListenter(async ()=>{
    browser.storage.sync.set({
        rec_switch: false
    })
})