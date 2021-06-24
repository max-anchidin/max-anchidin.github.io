console.info("Age: " + age);

console.info("Salut");
console.warn(new Date);
console.error("Salut");
console.debug(131 * 2);
var name = "Maximilian";
console.info("Name: " + name);

var age = 12 + 6;
console.info("Age:");
console.info(age);

console.warn("Age:", age)

var skills = ['html', "css", `js`];
console.info("Skills: ", skills)

name = "Max";
console.info("Name: " + name);


var m = document.getElementById("motto");
console.info("My motto:", m);


m.onclick = function () {
    console.info("click pe motto", m.innerText);

    if (m.innerText == 'Somer @ acasa') {
        m.innerHTML = "<strong>Whatever</strong> @ <i>Whatever</i>"
        m.style.color = '#1144dd';

    } else {
        m.innerHTML = "<strong>Somer</strong> @ <i>acasa</i>";
        m.style.color = '';
    }
}
