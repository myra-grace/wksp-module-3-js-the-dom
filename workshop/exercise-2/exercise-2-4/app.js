//________________ 2.4 ____________________

const FROGS = 3;

let track = document.getElementById('track');

for (let lane = 0; lane < FROGS; lane++) {
    let laneElem = document.createElement('li');
    track.appendChild(laneElem);

    let num = document.createElement('span');
    num.innerText = lane;
    laneElem.appendChild(num);

    laneElem.id = `lane-${lane}`;
}

let racers = [];

for (let pusher = 0; pusher < FROGS; pusher++) {
    let froggy = frogStable[pusher];
    racers.push(froggy);
}
console.log(racers);

for (let lane = 0; lane < racers.length; lane++) {
    let laneElem = document.getElementById(`lane-${lane}`);
    let frog = document.createElement('span');
    frog.className = 'frog';
    frog.id = `frog-${lane}`;
    frog.innerText = `${racers[lane].name}`;
    laneElem.appendChild(frog);
    frog.style.backgroundColor = racers[lane].color;
    racers[lane].progress = 0;
    racers[lane].lane = lane;
}

function racingFrog (frog) {
    let frogElem = document.getElementById(`frog-${frog.lane}`);

    let interval = setInterval(() => {
        frog.progress = Math.min(frog.progress + Math.random() * 10, 100);
        frogElem.style.left = frog.progress + '%';
        if (frog.progress === 100) {
            ranking.push(frog);
            clearInterval(interval);
        }
    }, 500);
}

console.log(racingFrog);

racers.forEach(racer => {
    racingFrog(racer);
});

let ranking = [];

let finish = setInterval(() => {
    if (FROGS === ranking.length) {

        ranking.forEach((frog, index) => {
            console.log(`${index +1} ${frog.name} finished`);
            alert(`${frog.name} finished ${index +1} `);
        })

        clearInterval(finish);
    }
}, 500);