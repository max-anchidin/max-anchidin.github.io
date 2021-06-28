function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('mainbox'));

    pages.forEach(function (page) {
        hide(page.id);
    });
}

function showPage(id) {
    hideAllPages();
    show(id);
}

show('skills');