function onLoad() {
    loadReadme();
}

function loadReadme() {
    fetch('README.md')
        .then(response => response.text())
        .then(text => {
            const converter = new showdown.Converter()
            document.body.innerHTML += converter.makeHtml(text);
        });
}
