// // require("babel-register")({
// //     presets: ["es2015", "react"]
// // });

// // const router = require('./components/Layout/Layout').default;
// // const Sitemap = require('react-router-sitemap').default;

// // (
// //     new Sitemap(router)
// //     .build('http://localhost')
// //     .save('./public/sitemap.xml')
// // );


// //Babel allows us to convert modern js code into backwards compatible versions
// //This includes converting jsx into browser-readable code
// require.extensions['.png'] = function() {
//     return null;
// };
// require.extensions['.scss'] = function() {
//     return null;
// };

// require("@babel/core").transformSync("code", {
//     plugins: ["@babel/plugin-transform-destructuring"],
// });


// const es2015 = require('babel-preset-es2015');
// const presetReact = require('babel-preset-react');
// require("babel-register")({
//     presets: [es2015, presetReact]
// });
// //Import our routes
// const router = require("./router").default;
// const Sitemap = require("react-router-sitemap").default;

// function generateSitemap() {
//     return (
//         new Sitemap(router())
//         .build("http://localhost")
//         //Save it wherever you want
//         .save("../public/sitemap.xml")
//     );
// }

// generateSitemap();


require('@babel/register')({
    extends: './.babelrc',
})

const Sitemap = require('react-router-sitemap').default;
const router = require('./router').default;

const filterConfig = {
    isValid: false,
    rules: [
        /\/auth/,
        /\*/,
    ],
};



(
    new Sitemap(router)
    .filterPaths(filterConfig)
    .build('http:/localhost', { limitCountPaths: 5000 })
    .save('./sitemap.xml', '/public/')
);