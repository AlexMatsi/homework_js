'article aside footer header nav section time'.replace(/\w+/g, function (n) {
    document.createElement(n)
});