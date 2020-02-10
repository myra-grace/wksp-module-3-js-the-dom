//2.1
const FROGS = 3;

let track = document.getElementById('track');

for (let lanes = 0; lanes < FROGS; lanes++) {
    let lane = document.createElement('li');
    track.appendChild(lane);

    let num = document.createElement('span');
    num.innerText = `lanes`;
    lane.appendChild(num);

    lane.id = `frog${lanes}`;
}

//2.2
let racers = [];

for (let pusher = 0; pusher<FROGS; pusher++) {
    let froggy = frogStable[pusher];
    racers.push(froggy);
}
console.log(racers);

