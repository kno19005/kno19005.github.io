/*

    Load Font Awesome CSS for font based icons

    https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript

*/

export function loadCSS() {

    var cssId = 'FontAwesome';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
        link.media = 'all';
        head.appendChild(link);
    }
}