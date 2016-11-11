var jsdom = require('jsdom');

function dom(url, jquery) {
    return new Promise((res, rej) => {
        jsdom.env(
            url,
            [jquery || "http://code.jquery.com/jquery.js"],
            (err, window) => err ? rej(err) : res([window.$, window.document])
        )
    })
}

module.exports = dom;
