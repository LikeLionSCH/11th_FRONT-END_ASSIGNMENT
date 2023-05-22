const colors = ['red', 'orange', 'yellow',
'green', 'blue', 'indigo', 'violet'];

const rainbow_color=document.getElementsByTagName('span')

for(let i=0;i<rainbow_color.length;i++){
    rainbow_color[i].style.color=colors[i];
}