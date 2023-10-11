# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./src/assets/advice%20generator.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/LivingHopeDev/advice-generator/tree/main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
  -Tailwindcss
- [React](https://reactjs.org/) - JS library

### What I learned

The challenge i had during this project was that the generated advice was the same i.e, not changing. So, i got to know after a lot of research that browsers might cache API responses and even when i click on the die icon to get new advice, it will still return the cached advice. So the solution was to add a random query paramater (which can be referred to as cache-busting mechanism) and it solved the issue. What it does simply is to make each request unique.

```js
const timestamp = Date.now();
fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
```

## Author

- Frontend Mentor - [Myusername](https://www.frontendmentor.io/profile/LivingHopeDev)
- Twitter - [Myusername](https://www.twitter.com/adewobiadetayo)

## Acknowledgments

I made use of a public API for generating the random advice. Url to the site https://api.adviceslip.com .
