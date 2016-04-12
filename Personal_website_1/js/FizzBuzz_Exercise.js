$('#calcBtn').click(function(){
  //var num1 = $('#num1').val();
  //var num2 = $('#num2').val();
  
  //if (){
    //document.getElementById('result').innerHTML = num + ' ' + 'is the product!';

    //} else {
     //   alert('Oops! Something is wrong...are you sure you 
     //     entered the correct information?');
    //}

//});

//if(isPalindrome(word))
  //{
   // document.getElementById('result').innerHTML = word + ' ' + 'is a palindrome!';
  //}
  //else
  //{
    //document.getElementById('result').innerHTML = word + ' ' + 'is a NOT palindrome!';
  //}




        function createFizzBuzz(){
          var fizzNum = $('num1').val();
          var buzzNum = $('num2').val();
          var fizzBuzzNum =$ ('num3').val();
          var length = 100;
  
          var fizzBuzz = function(){
    //... any of our solutions from above
        }
  
        fizzBuzz.setFizzNum = function(newVal){
          fizzNum = newVal; 
        }
        fizzBuzz.setBuzzNum = function(newVal){
          buzzNum = newVal;
        }
        fizzBuzz.setfizzbBuzzNum = function(newVal){
          fizzbuzzNum = newVal;
        }
  
  return fizzBuzz;

};