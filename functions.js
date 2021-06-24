console.debug('inside functions.js');

function getInfo(
    name) {
    var msg = "Salut " + name;
    console.warn('inside get info', msg);
    return msg;
}

console.info(getInfo("OK " + "Whatever"));
console.warn(getInfo("OK " + "Whatever"));

var myName = "OK " + "Whatever";
var welcome = getInfo(myName);
console.info(welcome);



function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('languages').style.display = 'none';
}

function showSkills() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('languages').style.display = 'none';
}

function showProjects() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('languages').style.display = 'none';
}

function showLanguages() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('languages').style.display = 'block';
}



