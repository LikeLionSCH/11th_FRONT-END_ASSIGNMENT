for (let i = 1; i <10; i++)
{
    let id = "googoodan"+i;
    for (let j = 1; j < 10; j++)
    {

        let result = i*j;
        document.getElementById(id).innerHTML += i + "*" + j  + "=" + result + "<br />";
    }
    document.getElementById(id).innerHTML += "<br />";
}