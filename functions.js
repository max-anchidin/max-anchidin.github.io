function hidePage(id) {
    console.info('hide page', id);
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    console.info('show page', id);
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    var pageIds = [
        'home', 'skills', 'projects', 'languages'
    ];
    // var i = 0;
    // while (i < pageIds.length) {
    //     hidePage(pageIds[i]);
    //     i++;
    // }

    for (var i = 0; i < pageIds.length; i++) {
        hidePage(pageIds[i]);
    }

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