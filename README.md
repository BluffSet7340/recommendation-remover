### Requirements

Let me describe how this extension is supposed to work. 

The user watches a YouTube video and when he/she watches till the end, they come face to face with 3 more recommended videos from YouTube. I want to prevent those recommendations from showing up

#### Functional
- [ ] The extension must detect if the user is watching a youtube video and should start listening
- [ ] The extension must fire an event when a specific class is detected
- [ ] The extension must remove the class or the elements housing the three suggested videos

#### Non Functional
- [ ] The user should be able to turn the extension on or off


### TODO

- [X] Add text and button to popup menu
- [X] Implement super basic content and test 
- [ ] Add support to toggle the switch on or off


### Lessons Learnt

background script runs all the time, content script runs only on the pages whose urls are specified. The background script and the popup script exist inside of extension context, so you get access to all the browser.* api calls