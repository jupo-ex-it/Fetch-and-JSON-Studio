window.addEventListener('load', function () {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(res => res.json())
        .then(data => data.forEach(element => {
            addAstronaut(element);
        }));
})

function addAstronaut(element) {
    var skills = element.skills.join(', ');
    var container = document.getElementById('container');
    container.insertAdjacentHTML('beforeend',
        `<div class="astronaut">
        <div class="bio">
        <h3>${element.firstName} ${element.lastName}</h3>
        <ul>
            <li>Hours in space: ${element.hoursInSpace}</li>
            <li>Active: ${element.active}</li>
            <li>Skills: ${skills} </li>
        </ul>
        </div>
        <img class="avatar" src="${element.picture}">
    </div>`
    )
}