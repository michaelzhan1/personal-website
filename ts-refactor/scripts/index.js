function loadTemplate(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading template', error));
}

loadTemplate('../components/footer.html', 'footer-container');
