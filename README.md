## To-Do
- [ ] Working Links
- [ ] Add `Blog`, `Resume` & `Contact` section.
- [ ] Animate the damn thing.
- [ ] 

# React + Tailwind
Going to start making my blog.
Using `React JS` for frontend and `Tailwind CSS` for styling.

Using `Yarn` over npm

## React Project Setup
```
  npx create-react-app xxxx && cd xxxx
```

## Setting up Tailwind
Start by installing the essentials.
```
  yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Then install and configure `craco`
```
  yarn add @craco/craco
```
Then change all scripts under `package.json` but `eject` to use craco

Create a `craco.config.js` at the root of the project and add 
```
  module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }
```

Then create a configuration file for tailwind using `npx tailwindcss init`
Add the following to it to make sure Tailwind can tree-shake unused styles in production builds:
```
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

Then include the tailwind styles in `./src/index.css` and ensure it is imported inside `/src/index.js`


### Cleaning up /src
Remove `App.css, App.test.js, logo.svg, reportWebVitals.js` and `setupTests.js`.
Edit also `App.js` and `index.js` accordingly.
Happy coding.

You are done. Run `yarn start`