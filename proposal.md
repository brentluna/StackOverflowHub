# StackOverflow Hub


### Background

One of the biggest tools in a programmers toolbox is the resource that is StackOverflow. When googling a programming related question, the top search result is often from StackOverflow.

Due to the populatirty of this website, I thought it would be beneficial to programmers to have quick access to the site and it's search results without having to open up a new tab and work their way to it. Therefore I decided to make a chrome extension that will allow for easy searching of their site without having to leave what you're doing.

### Functionality & MVP

With this extension, users will be able to:

- [ ] Search the website in the popout
- [ ] See a list of top results and be able to access them
- [ ] See their notifications

![StackOverflow](./stackoverflow.png)

### Technologies & Technical Challenges

This extension will be implemented using Javascript, HTML, React, Redux, Fetch, and CSS.

Files will include:

- `manifest.json`
- `package.json`
- `webpack.config.js`
- `index.html`
- `search.jsx`
- `search_container.js`
- `api_util.js`
- `search_middleware.js`
- `search_reducer.js`
- `search_actions.js`;

The primary technical challenges will be:

- finding the appropriate APIs to access StackOverflow correctly
- Learning how to implement SO's auth

### Implementation Timeline

**Day 1**: Get basic extension set up.
- Completed `package.json`
- Completed `manifest.json`
- Completed `webpack.config.js`
- Completed `api_util.js` that will fetch search results correctly

**Day 2**: Work on getting the redux cycle in place to manage search results returned by the API

- Completed redux cycle for search results `search_middleware.js`, `search_reducer.js`, `search_actions.js`

**Day 3**: Work on getting User inbox notifications displayed.

 - Get StackOverflow's auth implemented allowing users to login
 - Add Notification display that links to their inbox

**Day 4**: Work on styling the extension


- Make sure all components are working well and added to the extension.
- Focus on material design inspired design
