//Hides all of the h1 tags
//$('h1').hide();

//Hides all of the tags for this class
//$('.heading2').hide();

//gives color to span elements that are within a p tag
$('p span').css('color', 'red');

//Highilight the first item in the list
//$('ul#list li:first').css('color', 'orange');

//Highilight the last item in the list
//$('ul#list li:last').css('color', 'blue');

//Even numbers have specified font and background color
$('ul#list li:even').css('color', '#FF00FF');
$('ul#list li:even').css('background-color', '#000000');

//Odd numbers have specified font and background color
$('ul#list li:odd').css('color', '#9400D3');
$('ul#list li:odd').css('background-color', '#2F4F4F');

//hides based on type of element
//$(':button').hide();
//$(':submit').hide();

//You can select by attribute
//$('[href]').css('color', 'purple');

//You can also select by attribute values
//$('a[href="https://google.com"]').css('color', 'green');

//Use to "*" to select everything
//$('*').hide();