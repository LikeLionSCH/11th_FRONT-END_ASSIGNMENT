const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const h1 = document.querySelector('h1');

for(let i = 0; i < h1.children.length; i++){
    h1.children[i].style.color = colors[i];
}