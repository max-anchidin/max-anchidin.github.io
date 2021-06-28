function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    console.info('show page', id);
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    hidePage('home');
    hidePage('projects');
    hidePage('languages');
    hidePage('skills');
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

