// js file

$('#calcBtn').click(function(){
	var num1 = $('#num1').val();
	var num2 = $('#num2').val();
	var num3 = $('#num3').val();
	var num4 = $('#num4').val();
	var num5 = $('#num5').val();
	
	var mmin = Math.min(num1,num2,num3,num4,num5)
		document.getElementById('result').innerHTML = mmin + ' ' + 'is the lowest number!';

});