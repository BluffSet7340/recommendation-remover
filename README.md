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
- [X] Add support to toggle the switch on or off
- [X] Modify styling and add reversion capablities
- [ ] Figure out a way to listen to youtube tab and listen to change in DOM


### Lessons Learnt

background script runs all the time, content script runs only on the pages whose urls are specified. The background script and the popup script exist inside of extension context, so you get access to all the browser.* api calls.

setting browser storage is asynchronous, these have to awaited before accessing the values. Using arrow functions without the body is an implicit return. The get elements by classname gives me all the elements with said class name.

I can set and reset the recommendations but I need it to listen to all youtube tabs that may be open at any given time. Both the content script and background script have a limited number of apis that can be used. To observe console statements of the the popup and the background script, inspect the API. Content script console logs show up on the specified page

The background script does not have access to the DOM but the content script has access to the DOM of the page.

Mutation Observers will have to be used to detect changes in DOM on YouTube page.

The DOM event listener is not working so I removed it