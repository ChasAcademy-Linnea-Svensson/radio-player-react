# Sveriges Radio Player in React :radio:

Todays assignment is to use the Sveriges Radio API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player!

## How to complete this assignment

Before you go any further, take a moment to look at an example API response from Sveriges Radio. Here you can find a list of all 55 stations, and a url to each station's live stream: https://api.sr.se/api/v2/channels?format=json&size=100

Your task is to use `fetch()` to get this JSON from the Sveriges Radio API and render a list of channels with playable streams on your page. You should use at least the station name, image, and colour keys in the JSON to create a layout which looks something like this:

![Wireframe](https://github.com/davidshore/chas_radioplayer/raw/main/wireframe.png)

### Set up project

1. Open a terminal and `cd` to where you want to create the project.
2. Type `npm create vite@latest radio-player-react -- --template react`
3. Type `cd radio-player-react` and then `npm install`

### React Components

As always, start by thinking of how to divide your page into React components. You will probably want some sort of `Station` component at the very least. Try to draw out your plan on paper to get it clear in your mind.

### API Key.

The Sveriges Radio API seems to work without any sort of authentication, so that's one less thing to worry about! :)

### Audio

Check out the [documentation](https://www.w3schools.com/tags/tag_audio.asp) for the `<audio>` tag. The format for the stream is mp3, so you'll need to use a `<source>` with the "type" of "audio/mpeg".

## Hand in assignment

1. Create a repo on github.
2. Upload your files to github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Address to your repo>
git push -u origin main
```

3. Click on the assignment in canvas and submit the link to your repo.

### :books: Reading List

- [SR API Docs](http://sverigesradio.se/api/documentation/v2/index.html)
- [Audio HTML Tag](https://www.w3schools.com/tags/tag_audio.asp)
- [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

### :sos: How to get help

Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your team.
3. Ask your fellow students in Slack.
4. Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should be more comfortable using APIs, and have a little more of an idea of what you'd use an API for. You should be comfortable using `fetch()` now, and using the success callback to set state in React, to get data from the API into your page.

---

### :runner: Stretch Goals

#### First stretch goal

Design for zero data. Make your page look nice while the station list is loading by creating a "skeleton loader", like we discussed during the lecture. Consider using the Chrome [network throttler](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions) to simulate a slow connection and make it easier to test your code.

#### Second stretch goal

This task has one more stretch goal, but it is a little tough, and you'll need to do some research to complete it.

The task is to implement a search function which calls `.filter()` on the station list to decide which channels to render. This stretch goal requires you to research how to control form inputs.

You will need use the `onChange` attribute on an input to invoke a function which will use the input's value in the `.filter()` call to filter the stations. If you want the search to be more flexible, look into using [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) from the input value!
