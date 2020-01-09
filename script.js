let money = +prompt("Ваш бюджет на месяц.", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    };

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов.", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("DONE!");
//         appData.expenses[a] = b;
//     } else {
        
//     }
// };

// let i = 0;
//     while (i < 2) {
//     i++;
//         let a = prompt("Введите обязательную статью расходов.", ""),
//             b = prompt("Во сколько обойдется?", "");
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(a)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("DONE!");
//         appData.expenses[a] = b;
//     }
// };

let i = 0;
    do {
        i++;
    }
    while (i <2);

appData.moneyPerDay = appData.budjet / 30;
        
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка.")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка.");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий достаток!");
} else {
    console.log("Произошла ошибка!");
}