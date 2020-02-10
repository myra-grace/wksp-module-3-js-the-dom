console.log('...crickets...');

let head = document.getElementsByTagName('head');
let main = document.getElementById('main');

let css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'styles.css';
css.className = 'css';
head[0].appendChild(css);


let h1 = document.createElement('h1');
h1.innerText = 'The best How I Met Your Mother episode (according to fans)';
h1.className = 'header1';
main.appendChild(h1);

let p1 = document.createElement('p');
p1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
p1.className = 'para';
main.appendChild(p1);

let h2 = document.createElement('h2');
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';
h2.className = 'header2';
main.appendChild(h2);

let p2 = document.createElement('p');
p2.innerText = 'IMDB Rating: 9.5';
p2.className = 'para';
main.appendChild(p2);

let img = document.createElement('img');
img.setAttribute('src', 'images/robin-sparkles.jpg');
img.setAttribute('alt', 'Robin Sparkles');
img.setAttribute('width', '100%');
img.className = 'image';
main.appendChild(img);

let p3 = document.createElement('p');
p3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
p3.className = 'para';
main.appendChild(p3);

let p4 = document.createElement('p');
p4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
p4.className = 'para';
main.appendChild(p4);

let a = document.createElement('a');
a.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
a.innerText = 'Source';
a.className = 'aa';
main.appendChild(a);