const content = document.querySelector('.content');

const paraRed = document.createElement('p');
const heading3 = document.createElement('h3');
const container = document.createElement('div');
const heading1 = document.createElement('h1');
const paraInside = document.createElement('p');

//paragraph outside the div
paraRed.style.color = 'red';
paraRed.textContent = 'Hey I\'m red!';
content.appendChild(paraRed);

//h3 outside the div
heading3.style.color = 'blue';
heading3.textContent = 'I\'m blue h3!';
content.appendChild(heading3);

//div with h1 and paragraph inside
container.style.border = '2px solid black';
container.style.backgroundColor = 'pink';

heading1.textContent = 'I\'m in a div';
paraInside.textContent = 'ME TOO!';

container.appendChild(heading1);
container.appendChild(paraInside);

content.appendChild(container);