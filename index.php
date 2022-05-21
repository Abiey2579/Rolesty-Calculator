<!DOCTYPE html>
<html>
<head>
	<title>Rolesty - Rolscalc</title>
	<meta charset="utf-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="stylesheet" type="text/css" href="css/pro-2.css">
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
	<link rel="shortcut icon"  href="image/logo.png">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="row mainRow">
	<div class="col-lg-4"></div>
	<div class="col-lg-4">
		<div class="main" id="mainCalc">
			<form name="myForm">
				<input type="text" class="textview" id="textview" disabled>
			</form>

			<table>
				<tr>
					<td><button name="" class="button symbol gray lead" id="s" onclick="SR('s')" disabled>x<sup>2</sup></button></td>
					<td><input type="button" name="" value="√" class="button symbol gray lead" id="sr" onclick="SR('sr')" disabled></td>
					<td><input type="button" name="" value="⇤" class="button symbol gray lead" id="operatorBackSpace" onclick="backSpace()"></td>
					<td><input type="button" name="" value="÷" class="button symbol gray lead" id="operatorDivide" onclick="insertOp('/')"></td>
				</tr>
				<tr>
					<td><input type="button" name="" value="7" class="button number blue lead" id="dailNumberSeven" onclick="insertNum(7)"></td>
					<td><input type="button" name="" value="8" class="button number blue lead" id="dailNumberEight" onclick="insertNum(8)"></td>
					<td><input type="button" name="" value="9" class="button number blue lead" id="dailNumberNine" onclick="insertNum(9)"></td>
					<td><input type="button" name="" value="x" class="button symbol gray lead" id="operatorMultiply" onclick="insertOp('*')"></td>
				</tr>
				<tr>
					<td><input type="button" name="" value="4" class="button number blue lead" id="dailNumberFour" onclick="insertNum(4)"></td>
					<td><input type="button" name="" value="5" class="button number blue lead" id="dailNumberFive" onclick="insertNum(5)"></td>
					<td><input type="button" name="" value="6" class="button number blue lead" id="dailNumberSix" onclick="insertNum(6)"></td>
					<td><input type="button" name="" value="-" class="button symbol gray lead" id="operatorMinus" onclick="insertOp('-')"></td>
				</tr>
				<tr>
					<td><input type="button" name="" value="1" class="button number blue lead" id="dailNumberOne" onclick="insertNum(1)"></td>
					<td><input type="button" name="" value="2" class="button number blue lead" id="dailNumberTwo" onclick="insertNum(2)"></td>
					<td><input type="button" name="" value="3" class="button number blue lead" id="dailNumberThree" onclick="insertNum(3)"></td>
					<td><input type="button" name="" value="+" class="button symbol gray lead" id="operatorPlus" onclick="insertOp('+')"></td>
				</tr>
				<tr>
					<td><input type="button" name="" value="C" class="button symbol gray lead" id="operatorClear" onclick="clean()"></td>
					<td><input type="button" name="" value="0" class="button number blue lead" id="dailNumberZero" onclick="insertNum(0)"></td>
					<td><input type="button" name="" value="." class="button symbol gray lead" id="operatorDecimal" onclick="insertDec('.')"></td>
					<td><input type="button" name="" value="=" class="button symbol gray lead" id="operatorEquals" onclick="equalToBtn()"></td>
				</tr>
			</table>
			<input type="button" name="" value="Dark Theme" class="button symbol gray halfBtns lead" id="darkBtn" onclick="darkTheme()">
			<input type="button" name="" value="Light Theme" class="button symbol gray halfBtns lead" id="lightBtn" onclick="lightTheme()">
		</div>
	</div>
	<div class="col-lg-4"></div>
</div>
	
	<script type="text/javascript" src="js/pro-2.js"></script>
</body>
</html>