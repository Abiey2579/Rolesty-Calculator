var exp = '', number, decimal, equal, operator, allowSR = true;
var textview = document.getElementById('textview');

function insertNum(num) {
	if (equal) {
		exp = num;
		textview.value = exp;
		number = true;
		equal = false;
	}

	else {
		exp = textview.value + num;
		textview.value = exp;
		number = true;
	}

	if (operator) decimal = false;
		SR('a');
}

function insertOp(op) {
	textview.value = exp + op;
	operator = true;
	equal = false;
	allowSR = false;
	SR('a');
}

function insertDec () {
	if (number && !decimal) {
		textview.value = exp + '.';
		decimal = true;
		operator = false;
	}
}

function equalToBtn() {
	if (exp) {
		exp = eval(exp);
		textview.value = exp;
		equal = true;
		decimal = false;
		number = false;
		allowSR = true;
		SR('a');
	}
}

function clean() {
	exp = '';
	textview.value = exp;
	decimal = false;
}

function backSpace() {
	exp = textview.value;
	exp = exp.slice(0, exp.length - 1);
	textview.value = exp;
}

function SR(x) {
	if (x == 'sr') {
		exp = Math.sqrt(exp);
		textview.value = exp;
	}

	else if (x == 's') {
		exp = exp * exp;
		textview.value = exp;
	}

	else if (x == 'a' && allowSR) {
		document.getElementById('s').disabled = false;
		document.getElementById('sr').disabled = false;
	}

	else if (!allowSR) {
		document.getElementById('s').disabled = true;
		document.getElementById('sr').disabled = true;
	}
}


function darkTheme() {

	document.body.style.backgroundColor = '#050505';
	
	var mainFrame = document.getElementById('mainCalc');
	mainFrame.classList.remove('number');
	mainFrame.classList.add('mainCalc');
	

	var darkTextview = document.getElementById('textview');
	darkTextview.classList.remove('number');
	darkTextview.classList.add('darkTextview');

	var darkBtn = document.getElementById('darkBtn');
	darkBtn.classList.remove('number');
	darkBtn.classList.add('darkOperatorBtn');

	var lightBtn = document.getElementById('lightBtn');
	lightBtn.classList.remove('number');
	lightBtn.classList.add('darkOperatorBtn');

	// Dail Numbers
	var numBtnsIdZero = document.getElementById('dailNumberZero');
	numBtnsIdZero.classList.remove('number');
	numBtnsIdZero.classList.add('darkNumbersBtn');

	var numBtnsIdOne = document.getElementById('dailNumberOne');
	numBtnsIdOne.classList.remove('number');
	numBtnsIdOne.classList.add('darkNumbersBtn');

	var numBtnsIdTwo = document.getElementById('dailNumberTwo');
	numBtnsIdTwo.classList.remove('number');
	numBtnsIdTwo.classList.add('darkNumbersBtn');

	var numBtnsIdThree = document.getElementById('dailNumberThree');
	numBtnsIdThree.classList.remove('number');
	numBtnsIdThree.classList.add('darkNumbersBtn');

	var numBtnsIdFour = document.getElementById('dailNumberFour');
	numBtnsIdFour.classList.remove('number');
	numBtnsIdFour.classList.add('darkNumbersBtn');

	var numBtnsIdFive = document.getElementById('dailNumberFive');
	numBtnsIdFive.classList.remove('number');
	numBtnsIdFive.classList.add('darkNumbersBtn');

	var numBtnsIdSix = document.getElementById('dailNumberSix');
	numBtnsIdSix.classList.remove('number');
	numBtnsIdSix.classList.add('darkNumbersBtn');

	var numBtnsIdSeven = document.getElementById('dailNumberSeven');
	numBtnsIdSeven.classList.remove('number');
	numBtnsIdSeven.classList.add('darkNumbersBtn');

	var numBtnsIdEight = document.getElementById('dailNumberEight');
	numBtnsIdEight.classList.remove('number');
	numBtnsIdEight.classList.add('darkNumbersBtn');

	var numBtnsIdNine = document.getElementById('dailNumberNine');
	numBtnsIdNine.classList.remove('number');
	numBtnsIdNine.classList.add('darkNumbersBtn');

	//operator buttons goes here

	var btnOpPlus = document.getElementById('operatorPlus');
	btnOpPlus.classList.remove('number');
	btnOpPlus.classList.add('darkOperatorBtn');
	
	var btnOpMinus = document.getElementById('operatorMinus');
	btnOpMinus.classList.remove('number');
	btnOpMinus.classList.add('darkOperatorBtn');

	var btnOpMultiply = document.getElementById('operatorMultiply');
	btnOpMultiply.classList.remove('number');
	btnOpMultiply.classList.add('darkOperatorBtn');

	var btnOpDivide = document.getElementById('operatorDivide');
	btnOpDivide.classList.remove('number');
	btnOpDivide.classList.add('darkOperatorBtn');

	var btnOpEquals = document.getElementById('operatorEquals');
	btnOpEquals.classList.remove('number');
	btnOpEquals.classList.add('darkOperatorBtn');

	var btnOpDecimal = document.getElementById('operatorDecimal');
	btnOpDecimal.classList.remove('number');
	btnOpDecimal.classList.add('darkOperatorBtn');

	var btnOpClear = document.getElementById('operatorClear');
	btnOpClear.classList.remove('number');
	btnOpClear.classList.add('darkOperatorBtn');

	var btnOpBackSpace = document.getElementById('operatorBackSpace');
	btnOpBackSpace.classList.remove('number');
	btnOpBackSpace.classList.add('darkOperatorBtn');

	//Sqr Sq 
	var btnSquare = document.getElementById('sr');
	btnSquare.classList.remove('number');
	btnSquare.classList.add('darkOperatorBtn');

	var btnSquareRoot = document.getElementById('s');
	btnSquareRoot.classList.remove('number');
	btnSquareRoot.classList.add('darkOperatorBtn');
// document.body.preventDefault();
}

// document.getElementById('darkBtn').addEventListener("click", function (event) {
// 	event.preventDefault();
// });

function lightTheme() {
	// document.body.preventDefault();
	document.body.style.backgroundColor = '#fff';
	
	var mainFrame = document.getElementById('mainCalc');
	mainFrame.classList.remove('mainCalc');

	var darkTextview = document.getElementById('textview');
	darkTextview.classList.add('number');
	darkTextview.classList.remove('darkTextview');

	var darkBtn = document.getElementById('darkBtn');
	darkBtn.classList.add('number');
	darkBtn.classList.remove('darkOperatorBtn');

	var lightBtn = document.getElementById('lightBtn');
	lightBtn.classList.add('number');
	lightBtn.classList.remove('darkOperatorBtn');

	// Dail Numbers
	var numBtnsIdZero = document.getElementById('dailNumberZero');
	numBtnsIdZero.classList.add('number');
	numBtnsIdZero.classList.remove('darkNumbersBtn');

	var numBtnsIdOne = document.getElementById('dailNumberOne');
	numBtnsIdOne.classList.add('number');
	numBtnsIdOne.classList.remove('darkNumbersBtn');

	var numBtnsIdTwo = document.getElementById('dailNumberTwo');
	numBtnsIdTwo.classList.add('number');
	numBtnsIdTwo.classList.remove('darkNumbersBtn');

	var numBtnsIdThree = document.getElementById('dailNumberThree');
	numBtnsIdThree.classList.add('number');
	numBtnsIdThree.classList.remove('darkNumbersBtn');

	var numBtnsIdFour = document.getElementById('dailNumberFour');
	numBtnsIdFour.classList.add('number');
	numBtnsIdFour.classList.remove('darkNumbersBtn');

	var numBtnsIdFive = document.getElementById('dailNumberFive');
	numBtnsIdFive.classList.add('number');
	numBtnsIdFive.classList.remove('darkNumbersBtn');

	var numBtnsIdSix = document.getElementById('dailNumberSix');
	numBtnsIdSix.classList.add('number');
	numBtnsIdSix.classList.remove('darkNumbersBtn');

	var numBtnsIdSeven = document.getElementById('dailNumberSeven');
	numBtnsIdSeven.classList.add('number');
	numBtnsIdSeven.classList.remove('darkNumbersBtn');

	var numBtnsIdEight = document.getElementById('dailNumberEight');
	numBtnsIdEight.classList.add('number');
	numBtnsIdEight.classList.remove('darkNumbersBtn');

	var numBtnsIdNine = document.getElementById('dailNumberNine');
	numBtnsIdNine.classList.add('number');
	numBtnsIdNine.classList.remove('darkNumbersBtn');

	//operator buttons goes here

	var btnOpPlus = document.getElementById('operatorPlus');
	btnOpPlus.classList.add('number');
	btnOpPlus.classList.remove('darkOperatorBtn');
	
	var btnOpMinus = document.getElementById('operatorMinus');
	btnOpMinus.classList.add('number');
	btnOpMinus.classList.remove('darkOperatorBtn');

	var btnOpMultiply = document.getElementById('operatorMultiply');
	btnOpMultiply.classList.add('number');
	btnOpMultiply.classList.remove('darkOperatorBtn');

	var btnOpDivide = document.getElementById('operatorDivide');
	btnOpDivide.classList.add('number');
	btnOpDivide.classList.remove('darkOperatorBtn');

	var btnOpEquals = document.getElementById('operatorEquals');
	btnOpEquals.classList.add('number');
	btnOpEquals.classList.remove('darkOperatorBtn');

	var btnOpDecimal = document.getElementById('operatorDecimal');
	btnOpDecimal.classList.add('number');
	btnOpDecimal.classList.remove('darkOperatorBtn');

	var btnOpClear = document.getElementById('operatorClear');
	btnOpClear.classList.add('number');
	btnOpClear.classList.remove('darkOperatorBtn');

	var btnOpBackSpace = document.getElementById('operatorBackSpace');
	btnOpBackSpace.classList.add('number');
	btnOpBackSpace.classList.remove('darkOperatorBtn');

	//Sqr Sq 
	var btnSquare = document.getElementById('sr');
	btnSquare.classList.add('number');
	btnSquare.classList.remove('darkOperatorBtn');

	var btnSquareRoot = document.getElementById('s');
	btnSquareRoot.classList.add('number');
	btnSquareRoot.classList.remove('darkOperatorBtn');
}