// js file

$('#calcBtn').click(function(){
	var num1 = $('#num1').val();
	var num2 = $('#num2').val();
	var num3 = $('#num3').val();
	var num4 = $('#num4').val();
	var num5 = $('#num5').val();
	
	var num = add(num1, num2, num3, num4, num5);
	//if (){
		document.getElementById('result').innerHTML = num + ' ' + 'is the sum of your numbers!';

    //} else {
     //   alert('Oops! Something is wrong...are you sure you 
     //   	entered the correct information?');
    //}

});

function add() {
  var total = 0;
     for (var i = 0; i < arguments.length; i++){
     total += parseFloat( arguments[i] );
  }
  return total;
}