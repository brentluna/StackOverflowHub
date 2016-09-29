# StackOverflow Hub 
[Live Site](https://chrome.google.com/webstore/detail/stackoverflow-hub/bolpmjgkepeegcbpojocngghpjofckol)

### Description

A handy tool for any programmer. A popup chrome extension that provides you quick access to one of the greatest resources for programmers, with out having to open up a new browser tab and interrupting your workflow. It provides a search feature with autocomplete results as well as access to your inbox. 


![Gif](./SOHub.gif)


## Technologies and Design Decisions

I built React.js componenets for the extensions structure, and implemented 2 Redux cycles for managing search results as well as the users inbox. I also decided to step away from using ajax for my api calls, in order to try out a lighter weight optin, Fetch, which handles all my interactions with the StackExchange API. This was my first time using oAuth, and given the limited documentation on implementing oAuth for a chrome extension it made me dig into it more and get a good grasp on the oAuth Pattern. 

```javascript 
  oAuth() {
    const url = new URL("https://stackexchange.com/oauth/dialog");
    url.searchParams.set('client_id', '7915');
    url.searchParams.set('scope', 'read_inbox');
    url.searchParams.set('redirect_uri', chrome.identity.getRedirectURL());

    chrome.identity.launchWebAuthFlow(
      {
        url: url.href,
        interactive: true
      },
      response => {
        const regexAuth = /access_token=(.+)&/;
        accessCode = response.match(regexAuth)[1];
        chrome.storage.sync.set({ ggAccessCode: `${accessCode}` }, () => {
          this.inbox(); 
        });
      }
    );
  }

```

## Future Directions 

- Add filter and result order options for the user

