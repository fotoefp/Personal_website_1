$('#calcBtn').click(function(){
  var num = $('#num1').val();
                       
  		var prod = 1;
    		for (var i =1; i<=num; i++) {
    			prod = prod * i;
    		}

    document.getElementById('result').innerHTML = prod + ' ' + 'is the factorial of your number!'

});










