!function t(e,r,n){var o="function"==typeof hypothesisRequire&&hypothesisRequire;function i(a,s){if(!r[a]){if(!e[a]){var u="function"==typeof hypothesisRequire&&hypothesisRequire;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[a]={exports:{}};e[a][0].call(l.exports,(function(t){var r=e[a][1][t];return i(r||t)}),l,l.exports,t,e,r,n)}return r[a].exports}for(var a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t,e){t.querySelector("hypothesis-app")?function(t,e){var r=s(["es2015","es2016","es2017","string.prototype.normalize","fetch","url"]);a(t,e,[].concat(o(r),["scripts/sentry.bundle.js","scripts/katex.bundle.js","scripts/showdown.bundle.js","scripts/sidebar.bundle.js","styles/katex.min.css","styles/sidebar.css"]))}(t,e):function(t,e){if(!t.querySelector('link[type="application/annotator+html"]')){var r=t.createElement("link");r.rel="sidebar",r.href=e.sidebarAppUrl,r.type="application/annotator+html",t.head.appendChild(r);var n=t.createElement("link");n.rel="hypothesis-client",n.href=e.assetRoot+"boot.js",n.type="application/annotator+javascript",t.head.appendChild(n);var i=s(["document.evaluate","es2015","es2016","es2017","es2018","url"]);a(t,e,[].concat(o(i),["scripts/jquery.bundle.js","scripts/annotator.bundle.js","styles/annotator.css","styles/pdfjs-overrides.css"]))}}(t,e)};var n=t("../shared/polyfills");function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e,r){r.forEach((function(r){var n=e.assetRoot+e.manifest[r];n.match(/\.css/)?function(t,e){var r=t.createElement("link");r.rel="stylesheet",r.type="text/css",r.href=e,t.head.appendChild(r)}(t,n):function(t,e){var r=t.createElement("script");r.type="text/javascript",r.src=e,r.async=!1,t.head.appendChild(r)}(t,n)}))}function s(t){return(0,n.requiredPolyfillSets)(t).map((function(t){return"scripts/polyfills-".concat(t,".bundle.js")}))}},{"../shared/polyfills":4}],2:[function(t,e,r){"use strict";var n=t("../shared/settings"),o=a(t("./boot")),i=a(t("./url-template"));function a(t){return t&&t.__esModule?t:{default:t}}var s,u=(0,n.jsonConfigsFrom)(document);u.assetRoot&&(s=u.assetRoot+"build/");var c=u.sidebarAppUrl;try{var l=document.currentScript,f=new URL(l.src);f.pathname.endsWith("/boot.js")&&(s=s||new URL("./",f).href,c=c||new URL("app.html",f).href)}catch(t){}s=(0,i.default)(s||"https://cdn.hypothes.is/hypothesis/1.0.0-dummy-version/build/"),c=(0,i.default)(c||"{current_scheme}://{current_host}:5000/app.html"),(0,o.default)(document,{assetRoot:s,manifest:{"fonts/KaTeX_AMS-Regular.woff":"fonts/KaTeX_AMS-Regular.woff?9cc18f","fonts/KaTeX_Caligraphic-Bold.woff":"fonts/KaTeX_Caligraphic-Bold.woff?f08955","fonts/KaTeX_Caligraphic-Regular.woff":"fonts/KaTeX_Caligraphic-Regular.woff?da9c92","fonts/KaTeX_Fraktur-Bold.woff":"fonts/KaTeX_Fraktur-Bold.woff?a9e17c","fonts/KaTeX_Fraktur-Regular.woff":"fonts/KaTeX_Fraktur-Regular.woff?e03ea1","fonts/KaTeX_Main-Bold.woff":"fonts/KaTeX_Main-Bold.woff?c314df","fonts/KaTeX_Main-BoldItalic.woff":"fonts/KaTeX_Main-BoldItalic.woff?e3a4e7","fonts/KaTeX_Main-Italic.woff":"fonts/KaTeX_Main-Italic.woff?c7142d","fonts/KaTeX_Main-Regular.woff":"fonts/KaTeX_Main-Regular.woff?80fd30","fonts/KaTeX_Math-BoldItalic.woff":"fonts/KaTeX_Math-BoldItalic.woff?79e29d","fonts/KaTeX_Math-Italic.woff":"fonts/KaTeX_Math-Italic.woff?93825a","fonts/KaTeX_SansSerif-Bold.woff":"fonts/KaTeX_SansSerif-Bold.woff?46698f","fonts/KaTeX_SansSerif-Italic.woff":"fonts/KaTeX_SansSerif-Italic.woff?9f328c","fonts/KaTeX_SansSerif-Regular.woff":"fonts/KaTeX_SansSerif-Regular.woff?ada62e","fonts/KaTeX_Script-Regular.woff":"fonts/KaTeX_Script-Regular.woff?948ea8","fonts/KaTeX_Size1-Regular.woff":"fonts/KaTeX_Size1-Regular.woff?aab170","fonts/KaTeX_Size2-Regular.woff":"fonts/KaTeX_Size2-Regular.woff?93ffda","fonts/KaTeX_Size3-Regular.woff":"fonts/KaTeX_Size3-Regular.woff?964f5e","fonts/KaTeX_Size4-Regular.woff":"fonts/KaTeX_Size4-Regular.woff?e9e52f","fonts/KaTeX_Typewriter-Regular.woff":"fonts/KaTeX_Typewriter-Regular.woff?dd9726","styles/annotator.css":"styles/annotator.css?810702","styles/katex.min.css":"styles/katex.min.css?273d8b","styles/pdfjs-overrides.css":"styles/pdfjs-overrides.css?cd20bf","styles/sidebar.css":"styles/sidebar.css?6af0f3","scripts/annotator.bundle.js":"scripts/annotator.bundle.js?dfb54e","scripts/boot.bundle.js":"scripts/boot.bundle.js?e7dfb6","scripts/jquery.bundle.js":"scripts/jquery.bundle.js?aee6e0","scripts/katex.bundle.js":"scripts/katex.bundle.js?d29c31","scripts/polyfills-document.evaluate.bundle.js":"scripts/polyfills-document.evaluate.bundle.js?ecd11d","scripts/polyfills-es2015.bundle.js":"scripts/polyfills-es2015.bundle.js?871149","scripts/polyfills-es2016.bundle.js":"scripts/polyfills-es2016.bundle.js?0eb905","scripts/polyfills-es2017.bundle.js":"scripts/polyfills-es2017.bundle.js?f2c03d","scripts/polyfills-fetch.bundle.js":"scripts/polyfills-fetch.bundle.js?82dcc0","scripts/polyfills-string.prototype.normalize.bundle.js":"scripts/polyfills-string.prototype.normalize.bundle.js?5ad3d8","scripts/polyfills-url.bundle.js":"scripts/polyfills-url.bundle.js?91fd83","scripts/sentry.bundle.js":"scripts/sentry.bundle.js?d42490","scripts/showdown.bundle.js":"scripts/showdown.bundle.js?01295b","scripts/sidebar.bundle.js":"scripts/sidebar.bundle.js?396be0"},sidebarAppUrl:c})},{"../shared/settings":5,"./boot":1,"./url-template":3}],3:[function(t,e,r){"use strict";function n(t){var e=t.match(/(https?):\/\/([^:/]+)/);return e?{protocol:e[1],hostname:e[2]}:null}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;try{var e=t.currentScript;if(!e){var r=t.querySelectorAll("script");e=r[r.length-1]}return n(e.src)}catch(t){return null}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(-1===t.indexOf("{"))return t;var r=o(e);return r&&(t=(t=t.replace("{current_host}",r.hostname)).replace("{current_scheme}",r.protocol)),t}},{}],4:[function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||s(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return function(t){if(Array.isArray(t))return t}(t)||s(t)||i(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return r.every((function(e){return"function"==typeof t[e]}))}Object.defineProperty(r,"__esModule",{value:!0}),r.requiredPolyfillSets=function(t){return t.filter((function(t){var e=c[t];if(!e)throw new Error('Unknown polyfill set "'.concat(t,'"'));return e()}))};var c={es2015:function(){if("function"!=typeof Promise||"function"!=typeof Map||"function"!=typeof Set||"function"!=typeof Symbol)return!0;for(var t=0,e=[[Array,"from"],[Array.prototype,"fill","find","findIndex"],[Object,"assign"],[String.prototype,"startsWith","endsWith"]];t<e.length;t++){var r=o(e[t]),i=r[0],a=r.slice(1);if(!u.apply(void 0,[i].concat(n(a))))return!0}return!1},es2016:function(){return!u(Array.prototype,"includes")},es2017:function(){return!u(Object,"entries","values")},es2018:function(){return!window.Promise||!u(Promise.prototype,"finally")},url:function(){try{if("hypothes.is"!==new window.URL("https://hypothes.is").hostname)throw new Error("Broken URL constructor");return!1}catch(t){return!0}},"document.evaluate":function(){return"function"!=typeof document.evaluate},"string.prototype.normalize":function(){return!u(String.prototype,"normalize")},fetch:function(){return"function"!=typeof window.fetch}}},{}],5:[function(t,e,r){"use strict";function n(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}Object.defineProperty(r,"__esModule",{value:!0}),r.jsonConfigsFrom=function(t){for(var e={},r=t.querySelectorAll("script.js-hypothesis-config"),o=0;o<r.length;o++){var i=void 0;try{i=JSON.parse(r[o].textContent||"")}catch(t){console.warn("Could not parse settings from js-hypothesis-config tags",t),i={}}n(e,i)}return e}},{}]},{},[2]);