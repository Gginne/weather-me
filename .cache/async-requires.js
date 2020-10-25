// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-forecast-js": () => import("./../src/pages/forecast.js" /* webpackChunkName: "component---src-pages-forecast-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-search-js": () => import("./../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */)
}

