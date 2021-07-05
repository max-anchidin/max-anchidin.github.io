function highlight(el) {
    //var oldBorderColor = el.style.borderColor;
    //console.warn('oldBorderColor %o', oldBorderColor)
    el.style.borderColor = '#00df00';
    setTimeout(function () {
        el.style.borderColor = '#55df44';
    }, 100);
    setTimeout(function () {
        el.style.borderColor = '#99df88';
    }, 200);
    setTimeout(function () {
        el.style.borderColor = '';
    }, 300);
}

function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    var page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
        highlight(page);
    } else {
        console.warn("pagina cu id-ul %o nu exista", id);
    }
    var oldLink = document.querySelector("a[data-page].active");
    if (oldLink) {
        oldLink.classList.remove("active");
    }
    var link = document.querySelector(`a[data-page=${id}]`);
    link.classList.add("active");
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

document.querySelector('#top-menu-bar').addEventListener('click', function (e) {
    if (e.target.matches('a')) {
        var id = e.target.getAttribute('data-page');
        showPage(id);
        highlight(e.target);
    }
})

var skills = [
    { name: 'html', favourite: "y", endorsements: 7 },
    { name: 'css', endorsements: 10 },
    { name: 'js', favourite: "y", endorsements: 5 }
];

var skillsHtml = skills.map(function (skill) {
    console.info(skill.name, skill.favourite, skill.endorsements);

    var favourite = skill.favourite ? 'class="favourite"' : '';
    var endorsements = skill.endorsements > 5 ? `<span>${skill.endorsements}</span>` : '';
    console.warn('f', favourite, endorsements);
    return `<li ${favourite}>${skill.name} ${endorsements}</li>`;

}).join('');

document.querySelector('#skills ul').innerHTML = skillsHtml;