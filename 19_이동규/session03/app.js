// if문 연습
// let age = prompt("나이를 입력하세요.");
// if (age>0&&age<5)
// {
//     alert("FREE");
// }
// else if (age>5&&age<10)
// {
//     alert("10");
// }
// else if (age>10&&age<65)
// {
//     alert("$20");
// }
// else if (age>65)
// {
//     alert("$10");
// }
// else
// {
//     alert("오우 놀줄 아는 놈인가? 예외처리 못 했지롱 ㅎ.ㅎ");
// }


// switch문 연습
const dayOfWeek = prompt("enter the day");

switch (dayOfWeek)
{
    case 'Monday':
        console.log("Today is Monday");
        break;
    case 'Tuesday':
        console.log("Today is Tuesday");
        break;
    case 'Wednesday':
        console.log("Today is Wednesday");
        break;
    case 'Thursday':
        console.log("Today is Thursday");
        break;
    case 'Saturday':
        console.log("Today is Saturday");
        break;
    case 'Sunday':
        console.log("Today is Sunday");
        break;
    default :
         console.log("히히 예외처리 못 했는뎅?");
}
    