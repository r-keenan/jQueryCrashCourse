//######Part 1: Selectors #######/
//Hides all of the h1 tags
//$('h1').hide();

//Hides all of the tags for this class
//$('.heading2').hide();

//gives color to span elements that are within a p tag
//$('p span').css('color', 'red');

//Highilight the first item in the list
//$('ul#list li:first').css('color', 'orange');

//Highilight the last item in the list
//$('ul#list li:last').css('color', 'blue');

//Even numbers have specified font and background color
//$('ul#list li:even').css('color', '#FF00FF');
//$('ul#list li:even').css('background-color', '#000000');

//Odd numbers have specified font and background color
//$('ul#list li:odd').css('color', '#9400D3');
//$('ul#list li:odd').css('background-color', '#2F4F4F');

//hides based on type of element
//$(':button').hide();
//$(':submit').hide();

//You can select by attribute
//$('[href]').css('color', 'purple');

//You can also select by attribute values
//$('a[href="https://google.com"]').css('color', 'green');

//Use to "*" to select everything
//$('*').hide();

//######Part 2: Events #######/

//click event for button 1. doucment.ready allows you to wait until the element is present before attempting the event. Runs onClick() method
/*$(document).ready(function () {
    $('#btn1').click(function () {
        alert('Button Clicked!');
    });
});*/

//use button to toggle between show and hide
/*$('#btn1').on('click', function () {
    $('.para1').toggle();
});*/

//double click to show and hide
/*$('#btn1').dblclick(function () {
    $('.para1').toggle();
});*/

//hover over the button to hide. Combines mouseEnter() and mouseLeave() methods
/*$('#btn1').hover(function () {
    $('.para1').toggle();
});*/

//mouseMove() toggles paragraph when moving the mouse over Button1
/*$('#btn1').mousemove(function () {
    $('.para1').toggle();
});*/

//This allows user to click down to hide and release for the paragraph to come back.
/*$('#btn1').on('mousedown', function () {
    $('.para1').toggle();
});*/

/*$('#btn1').on('mouseup', function () {
    $('.para1').toggle();
});*/

//passing in an optional parameter
$('#btn1').click(function (e) {
    //alerts the element ID
    //alert(e.currentTarget.id);
    //alerts the inner HTML
    //alert(e.currentTarget.innerHTML);
    //alert the outer HTML
    //alert(e.currentTarget.outerHTML);
    //alerts class name for the element
    //alert(e.currentTarget.className);
});

/*
//gives position (x, y coordinates) anywhere on the document as a console log
$(document).on('mousemove', function (e) {
    console.log('Coords: Y:' + e.clientY + "X: " + e.clientX);
});

//gives position (x, y coordinates) anywhere on the document and places info into the h1
$(document).on('mousemove', function (e) {
    $('#coords').html('Coords: Y:' + e.clientY + "X: " + e.clientX);
});
*/

//focus alert will pop up when clicking an input field
/*$('input').focus(() => {
    alert('Focus');
});*/

//This keyword specifies that it selects the current element that you click in.
$('input').focus(function () {
    $(this).css('background-color', '#00FFFF');
});

//This keyword specifies that it deselects the element that you were in.
$('input').blur(function () {
    $(this).css('background-color', 'white');
});

//console logs whatever is being entered into the input field
/*$('input').keyup(function (e) {
    console.log(e.target.value);
});*/

//alerts "Changed" when changing an option from the drop down menu
/*$('select#gender').change(function () {
    alert('Changed');
});*/

$('#form').submit(function () {
    alert('Form has been submitted!');
});

//######Part 3: DOM Manipulation #######/
$(document).ready(() => {
    //$('p.para1').css('color', 'red');
    //wrap this css properties in an object if specifying multiple properties
    //$('p.para1').css({ color: 'red', background: '#ccc' });

    //This assigns para2 as myClass and adds the myClass CSS styling to the element
    //$('p.para2').addClass('myClass');

    //This removes the same class
    //$('p.para2').removeClass('myClass');

    //Toggle class
    /*$('#btn1').click(() => {
        $('p.para2').toggleClass('myClass');
    });*/

    //output text to the myDiv ID
    //$('#myDiv').text('Hello World!');

    //Sets value and tag and inserts it into the myDiv ID
    //$('#myDiv').html('<h3>Hello World</h3>');

    //Alerts the text from the myDiv ID
    //alert($('#myDiv').text());

    //Adds item to the end of the list
    //$('ul').append('<li>Append List Item</li>');

    //Adds item to the beginnig of the list
    //$('ul').prepend('<li>Prepended List Item</li>');

    //append para1 to para2
    //$('.para1').appendTo('.para2');

    //prepends para1 to para2
    //$('.para1').prependTo('.para2');

    //Hello before the unordered list
    //$('ul').before('<h4>Hello</h4>');

    //World after the unordered list
    //$('ul').after('<h4>World</h4>');

    //removes all of the inner elements of the tag specified
    //$('ul').empty();

    //detaches it from the DOM
    //$('ul').detach();

    //Adds an attribute to the 'a' tag
    //$('a').attr({ target: '_blank', rel: 'noopener noreferrer' });

    //alerts the attribute value
    //alert($('a').attr('href'));

    //remove attributes
    //$('a').removeAttr('target');

    //wrap element in another tag. this wraps each p tag in an h1
    //$('p').wrap('<h1></h1>');

    //this wraps both p tags in one h1
    //$('p').wrapAll('<h1></h1>');

    //this function adds a new item to the item to the list that is entered into the test box
    $('#newItem').keyup((e) => {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            $('ul').append('<li>' + e.target.value + '</li>');
        }
    });

    /*
    //Creating the array of names
    var myArr = ['Brad', 'Ross', 'Nate', 'Amy'];
    //$.each is a forEach loop. i is index. val is value.
    $.each(myArr, function (i, val) {
        $('#users').append('<li>' + val + '</li>');
    });
    */

    //Console logs the innerHTML of all of the li that are added to the list
    var newArr = $('ul#List li').toArray();
    $.each(newArr, function (i, val) {
        console.log(val.innerHTML);
    });
});



