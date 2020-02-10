console.log('...crickets...');
//HEAD
let head = document.getElementsByTagName('head');


//BODY
let body = document.getElementsByTagName('body');


//MAIN DIV
let main = document.getElementById('main');


let h1 = document.createElement('h1');
h1.innerText = 'The best How I Met Your Mother episode (according to fans)';
// h1.className = 'header1';
main.appendChild(h1);

let p1 = document.createElement('p');
p1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
// p1.className = 'para';
main.appendChild(p1);

let h2 = document.createElement('h2');
h2.innerText = 'The Slap Bet (Season 2, Episode 9)';
// h2.className = 'header2';
main.appendChild(h2);

let p2 = document.createElement('p');
p2.innerText = 'IMDB Rating: 9.5';
// p2.className = 'para';
main.appendChild(p2);

let img = document.createElement('img');
img.setAttribute('src', 'images/robin-sparkles.jpg');
img.setAttribute('alt', 'Robin Sparkles');
img.setAttribute('width', '100%');
// img.className = 'image';
main.appendChild(img);

let p3 = document.createElement('p');
p3.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
// p3.className = 'para';
main.appendChild(p3);

let p4 = document.createElement('p');
p4.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
// p4.className = 'para';
main.appendChild(p4);

let a = document.createElement('a');
a.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
a.innerText = 'Source';
// a.className = 'aa';
main.appendChild(a);

document.body.style.backgroundImage = "url('images/yellow-umbrella.jpg')";


let boite = document.getElementById('main');
boite.style.backgroundColor = 'white';
boite.style.borderRadius = '4px';
boite.style.boxShadow = '8px 10px 25px 0 rgba(128, 128, 128, .44)';
boite.style.minWidth = '320px';
boite.style.maxWidth = '600px';
boite.style.margin = '36px';
boite.style.padding = '4px 32px 32px';

let tete1 = document.querySelector('h1');
tete1.style.fontFamily = "'Open Sans', sans-serif";
tete1.style.textAlign = 'center';

let tete2 = document.querySelector('h2');
tete2.style.fontFamily = "'Open Sans', sans-serif";
tete2.style.textAlign = 'left';

let ecr = document.querySelector('p');
ecr.style.fontSize = '17px';
ecr.style.lineHeight = '1.5em';

let photo = document.querySelector('img');
photo.style.borderColor = '#fafafa';
photo.style.borderRadius = '4px';
photo.style.boxShadow = '4px 4px 14px rgba(128, 128, 128, .4)';
photo.style.width = '100%';

let link = document.querySelector('a');
link.style.color = '#174E7C'
link.style.display = 'block';
link.style.fontWeight = '700';
link.style.marginTop = 'auto';
link.style.textAlign = 'right';
link.style.textDecoration = 'none';