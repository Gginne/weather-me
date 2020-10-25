const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-forecast-js": hot(preferDefault(require("C:\\Users\\Gianncarlo.c\\Desktop\\MY PROJECTS\\weather-me\\src\\pages\\forecast.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Gianncarlo.c\\Desktop\\MY PROJECTS\\weather-me\\src\\pages\\index.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("C:\\Users\\Gianncarlo.c\\Desktop\\MY PROJECTS\\weather-me\\src\\pages\\search.js")))
}

