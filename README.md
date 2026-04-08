### Requirements

Let me describe how this extension is supposed to work. 

The user watches a YouTube video and when he/she watches till the end, they come face to face with 3 more recommended videos from YouTube. I want to prevent those recommendations from showing up

#### Functional
- [X] The extension must detect if the user is watching a youtube video and should start listening
- [X] The extension must fire an event when a the body of the document is loaded
- [X] The extension must remove the class or the elements housing the three suggested videos

#### Non Functional
- [X] The user should be able to turn the extension on or off

### TODO

- [X] Add text and button to popup menu
- [X] Implement super basic content and test 
- [X] Add support to toggle the switch on or off
- [X] Modify styling and add reversion capablities
- [X] Figure out a way to listen to youtube tab and listen to change in DOM

### Lessons Learnt

1. The background script runs all the time, content script runs only on the pages whose urls are specified. The background script and the popup script exist inside of extension context, so you get access to all the browser.* api calls.

2. Setting browser storage is asynchronous, these have to awaited before accessing the values. Using arrow functions without the body is an implicit return. The get elements by classname gives me all the elements with said class name.

3. The content script and background script have a limited number of apis that can be used. To observe console statements of the the popup and the background script, inspect the API. Content script console logs show up on the specified page.

4. The background script does not have access to the DOM but the content script has access to the DOM of the page.

5. Mutation Observers can be used to detect changes in DOM on YouTube page. The DOM event listener was not listening properly so opted to use only the mutation observer. Initially I tried to observe specific classes but switched to just observing the entire body instead. This likely poses issues with the variable being undefined since it does take time for YouTube to load it all but the extension is working regardless.

### About This Extension

Recommendation Remover is a browser extension that hides YouTube's "end screen" recommendation panel (the grid of suggested videos that appears after a video ends).

The extension includes a popup toggle so you can enable or disable this behavior at any time.

### Supported Browser

- Firefox (manifest version 2)

### Installation (Local / Developer Mode)

1. Open Firefox and go to `about:debugging`.
2. Click `Load Temporary Add-on...`.
3. Select the `manifest.json` file from this project.
4. Open YouTube and test the toggle from the extension popup.

### How To Use

1. Navigate to any YouTube video page.
2. Click the extension icon.
3. Use the button in the popup:
	 - `Turn ON`: hide end-of-video recommendations.
	 - `Turn OFF`: show recommendations again.

Your preference is saved using browser sync storage (`rec_switch`).

### How It Works

- `background.js`
	- Initializes storage on install and sets `rec_switch` to `false`.
- `popup/popup.js`
	- Toggles `rec_switch`.
- `content-script/recommendation-remover.js`
	- Observes DOM mutations on YouTube pages.
	- Finds the recommendation container (`ytp-fullscreen-grid-stills-container`).
	- Applies `display: none` when enabled, and restores `display: grid` when disabled.

### Permissions Used

- `tabs`: interact with browser tabs.
- `activeTab`: operate on the currently active tab.
- `storage`: persist toggle state.

### Project Structure

```
background.js
manifest.json
content-script/
	recommendation-remover.js
popup/
	popup.html
	popup.css
	popup.js
icons/
```

### Future Improvements

- Add safeguards for missing recommendation nodes before changing style.

### License

This project is licensed under the terms described in `LICENSE`.



