document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.querySelector('#gugudan-table tbody');

    for (var i = 1; i < 10; i++) {
        var row = document.createElement('tr');

        for (var j = 2; j < 10; j++) {
            var cell = document.createElement('td');
            cell.textContent = j + ' x ' + i + ' = ' + (j * i);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
});