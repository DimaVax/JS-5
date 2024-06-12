// 1
// const select = prompt('Виберіть - кава, сік або чай?');
// const select2 = select.toLocaleLowerCase();
// switch(select2) {
//     case "кава":
//         alert('Ви вибрали каву.');
//         break;
//     case "сік":
//         alert('Ви вибрали сік.');
//         break;
//     case "чай":
//         alert('Ви вибрали чай.');
//         break;
//     default:
//         alert('Ви не вибрали свій напій!');
// }


// 2
// const day = prompt('Введіть день тижня');
// const lowerDay = day.toLocaleLowerCase();
// switch (lowerDay) {
//     case "понеділок":
//         alert('Це робочий день.');
//         break;
//     case "вівторок":
//         alert('Це робочий день.');
//         break;
//     case "середа":
//         alert('Це робочий день.');
//         break;
//     case 'четвер':
//         alert('Це робочий день.');
//         break;
//     case "п'ятниця":
//         alert('Це робочий день.');
//         break;
//     case "пятниця":
//         alert('Це робочий день.');
//         break;
//     case "субота":
//         alert('Це вихідний.');
//         break;
//     case "неділя":
//         alert('Це вихідний.');
//         break;
//     default:
//         alert('Ви не вибрали свій день!');
// }


// 3
// const month = prompt('Введіть номер місяця (1-12)');
// switch (month) {
//     case "1":
//         alert('Це зимній місяць.');
//         break;
//     case "2":
//         alert('Це зимній місяць.');
//         break;
//     case "3":
//         alert('Це весняний місяць.');
//         break;
//     case '4':
//         alert('Це весняний місяць.');
//         break;
//     case "5":
//         alert('Це весняний місяць.');
//         break;
//     case "6":
//         alert('Це літній місяць.');
//         break;
//     case "7":
//         alert('Це літній місяць.');
//         break;
//     case "8":
//         alert('Це літній місяць.');
//         break;
//     case "9":
//         alert('Це осінній місяць.');
//         break;
//     case "10":
//         alert('Це осінній місяць.');
//         break;
//     case "11":
//         alert('Це осінній місяць.');
//         break;
//     case '12':
//         alert('Це зимній місяць');
//         break;
//     default:
//         alert('Ви не вибрали свій місяць!');
// }


// 4
// const month = prompt('Введіть номер місяця (1-12)');
// switch (month) {
//     case "1":
//         alert('31 днів');
//         break;
//     case "2":
//         alert('27 - 28 днів');
//         break;
//     case "3":
//         alert('31 днів');
//         break;
//     case '4':
//         alert('30 днів');
//         break;
//     case "5":
//         alert('31 днів');
//         break;
//     case "6":
//         alert('30 днів');
//         break;
//     case "7":
//         alert('31 днів');
//         break;
//     case "8":
//         alert('31 днів');
//         break;
//     case "9":
//         alert('30 днів');
//         break;
//     case "10":
//         alert('31 днів');
//         break;
//     case "11":
//         alert('30 днів');
//         break;
//     case '12':
//         alert('31 днів');
//         break;
//     default:
//         alert('Ви не вибрали свій місяць!');
// }


// 5
// const color = prompt('Напишіть колір (червоний, зелений або жовтий)');
// const lowerColor = color.toLocaleLowerCase();
// switch(lowerColor) {
//     case "червоний":
//         alert('Треба зупинитись!');
//         break;
//     case "жовтий":
//         alert('Треба чекати на зелений!');
//         break;
//     case 'зелений':
//         alert('Можна йти.');
//         break;
//     default:
//         alert('Ви не вибрали свій колір або вибрали не той.');
// }


// 6
const number1 = prompt('Виберіть будь-яке число.');
const normalNumber1 = parseFloat(number1);
const number2 = prompt('Виберіть друге число.');
const normalNumber2 = parseFloat(number2);
const operation = prompt('Виберіть операцію, яку ви хочете провести між числом 1 та числом 2 ( +, -, *, /). Але на нуль ділити не можна!');
let answer;
switch (operation) {
    case "+":
        answer = normalNumber1 + normalNumber2;
        break;
    case "-":
        answer = normalNumber1 - normalNumber2;
        break;
    case "*":
        answer = normalNumber1 * normalNumber2;
        break;
    case '/':
        answer = normalNumber1 / normalNumber2;
        break;
    case NaN:
        answer = 'Не ламати мені программу!!!! >:(';
        break;
    default:
        answer = 'Не ламати мені программу!!!! >:(';
}
alert(answer);
