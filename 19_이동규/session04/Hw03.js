const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const rainbow = document.getElementsByTagName("span");

for (let i = 0; i < rainbow.length; i++) 
{
    rainbow[i].style.color = colors[i];
}