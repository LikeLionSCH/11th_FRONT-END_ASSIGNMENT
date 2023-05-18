var number = prompt("몇 단을 출력하시겠습니까?");
      number = parseInt(number);


      
      for (var i = 1; i <= 9; i++) {
        var result = number * i;
        document.write("<tr>");
        document.write("<td>" + number + "</td>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + result + "</td>");
        document.write("</tr>");
      }