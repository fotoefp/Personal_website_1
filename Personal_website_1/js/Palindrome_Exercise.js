$('#calcBtn').click(function(){
  
  var word = $('#word').val();

  if(isPalindrome(word))
  {
    document.getElementById('result').innerHTML = word + ' ' + 'is a palindrome!';
  }
  else
  {
    document.getElementById('result').innerHTML = word + ' ' + 'is a NOT palindrome!';
  }

    
    
});



function isPalindrome(word)

    {
        var i;

        for (i = 0; i < word.length; i++) {
            if (word.charAt(i) != word.charAt(word.length-1-i)) {
                return false;
            }
        }
        return true;
    }


function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}






