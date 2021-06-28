function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    console.info('show page', id);
    document.getElementById(id).style.display = 'block';
}


function showHome() {
    hidePage('skills');
    hidePage('projects');
    hidePage('languages');
    showPage('home');
}

function showSkills() {
    hidePage('home');
    hidePage('projects');
    hidePage('languages');
    showPage('skills');
}

function showProjects() {
    hidePage('home');
    hidePage('skills');
    hidePage('languages');
    showPage('projects');
}

function showLanguages() {
    hidePage('home');
    hidePage('skills');
    hidePage('projects');
    showPage('languages');
}



