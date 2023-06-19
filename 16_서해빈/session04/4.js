window.onload = function() {
    var table = document.getElementById("ggd");
    for (var i = 2; i <= 9; i++) {
        var row = table.insertRow(-1);
        for (var j = 1; j <= 9; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = i + " * " + j + " = " + i*j;
        }
    }
}
