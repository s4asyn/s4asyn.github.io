(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},X8hv:function(t,e,r){function n(t,e,r){return(n=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var p=r("q1tI"),s=r("7ljp"),y=s.useMDXComponents,b=s.mdx,m=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,o=t.children,c=function(t,e){if(null==t)return{};var r,n,o={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["scope","components","children"]),a=y(r),i=m(e),l=p.useMemo((function(){if(!o)return null;var t=f({React:p,mdx:b},i),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(u(e),[""+o])).apply(void 0,[{}].concat(u(r)))}),[o,e]);return p.createElement(l,f({components:a},c))}},lRrx:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return s}));var n=r("q1tI"),o=r.n(n),c=r("Wbzz"),u=r("pnuC"),a=r.n(u),i=r("7ljp"),f=r("A2+M"),l=r("Kvkj"),p={Link:c.a};e.default=function(t){var e=t.data.mdx,r={description:e.frontmatter.desc,title:e.frontmatter.title,date:a()(e.frontmatter.date,"DD MMMM, YYYY").format("jYYYY/jMM/jDD")};return o.a.createElement(l.a,{SeoData:r},o.a.createElement(l.b,null,o.a.createElement(i.MDXProvider,{components:p},o.a.createElement(f.MDXRenderer,null,e.body))))};var s="939522273"}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-2a0e563053d4f6811cf4.js.map