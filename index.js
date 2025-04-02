function onLoad() {
    loadReadme();
}

function loadReadme() {
    fetch('README.md')
        .then(response => response.text())
        .then(text => {
            if (isDev()) {
                text = text.replaceAll('https://asoncs.github.io/AsonCS', location.origin)
            }
            const converter = new showdown.Converter()
            document.body.innerHTML += converter.makeHtml(text);
        });
}

function isDev() {
    return location.origin.includes('localhost')
        || location.origin.includes('127.0.0.1')
}
