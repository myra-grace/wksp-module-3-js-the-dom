//________________ 2.3 ____________________

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

for (let racerNum = 0; racerNum < racers.length; racerNum++) {
    let laneElem = document.getElementById(`lane-${racerNum}`);
    let frog = document.createElement('span');
    frog.className = 'frog';
    frog.innerText = `${racers[racerNum].name}`;
    laneElem.appendChild(frog);
    frog.style.backgroundColor = racers[racerNum].color;
    racers[racerNum].progress = 0;
}

// racers.setAttribute('id', 'frog');
// 1st-of-typeof(racers).style.backgroundColor = 'blue';
// 2nd-of-typeof(racers).style.backgroundColor = 'red';
// 3rd-of-typeof(racers).style.backgroundColor = 'brown';
// 4th-of-typeof(racers).style.backgroundColor = 'purple';
// 5th-of-typeof(racers).style.backgroundColor = 'black';