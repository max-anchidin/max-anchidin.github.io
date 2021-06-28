function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('mainbox'));

    pages.forEach(function (page) {
        hidePage(page.id);
    });
}

function showHome() {
    hideAllPages();
    showPage('home');
}

function showSkills() {
    hideAllPages()
    showPage('skills');
}

function showProjects() {
    hideAllPages()
    showPage('projects');
}

function showLanguages() {
    hideAllPages()
    showPage('languages');
}

showSkills();