// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane

let track = document.getElementById('track');

for (let lanes = 0; lanes < FROGS; lanes++) {
    let lane = document.createElement('li');
    track.appendChild(lane);

    let num = document.createElement('span');
    num.innerText = `lanes`;
    lane.appendChild(num);

    lane.id = `frog${lanes}`;
}


