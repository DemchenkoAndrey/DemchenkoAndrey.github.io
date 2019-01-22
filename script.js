let money,
	time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let index = 0; index < 2; index++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
			&& a != '' && b != '' && a.length < 50) {
			console.log('Done');
			appData.expenses[a] = b;
		} else {
			index = index - 1;
		}
	}
}
chooseExpenses();

function chooseOptExpenses() {
	for (let index = 0; index < 3; index++) {
		let a = prompt("Статья необязательных расходов?", '');
	
		if ((typeof(a)) === 'string' && (typeof(a)) != null &&
			 a != '' && a.length < 50) {
			appData.optionalExpenses[index + 1] = a;
		} else {
			index = index - 1;
		}
	}
}
chooseOptExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Money per day: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Высокий уровень');
	} else {
		console.log('Произошла ошибка');
	}
}

function checkSevings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент?", "");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSevings();