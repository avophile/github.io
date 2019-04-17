$('h2.product-name[data-type="vitamin"]').css("background-color", "purple"); // modify the item categories to give each product category a different color

$('h2.product-name[data-type="mineralwater"]').css("background-color", "blue");

$('h2.product-name[data-type="proteinbar"]').css("background-color", "black");

$('li.product-item').css("cursor", "pointer"); //	Change the cursor to hand symbol when hovering over product items

var x = $('#history').clone().prop({'id' : 'history-clone'}) //	Generate a clone of the #history element and give the clone the id history-clone. Visit the page https://loremipsum.io/, generate some random text and populate history-clone content with that text. 

$('#history').after(x)  // put the clone (x) directly after the cloned section

$('#history-clone h2').text('HISTORY CLONE') // replace heading of clone with new name

$('#history-clone p:first').text('Faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim.')

$(x).css("background-color", "#9e9e9e"); // 5.	Change the background color of history-clone to #9e9e9e

$('#history-clone p:nth-child(n+3)').hide()  // hide the original p elements from the clone


$('.navbar a[href*="#"]').on('click', function (event) {  //	Add scrolling animation when user click on Navigation bar
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$( "ul.navbar li:eq(1)" ).attr('id', 'cloneMe'); // gives the second li in the navbar ul the id of cloneMe

$('#cloneMe').clone().insertAfter('#cloneMe').find('a').prop({'href':'#history-clone'}).text("history clone"); // finds the a in the cloned li and gives it an updated target

/* the javascript way
var ul = document.querySelector('.navbar');
var li = document.createElement('li');
var anchor = document.createElement('a');
anchor.setAttribute('href','#history-clone')
anchor.textContent = 'history clone';

li.appendChild(anchor);

ul.appendChild(li);
*/

$( "a:contains('products')").attr({'href':'#newTarget'}); // changes the target of the products link in the navbar

$( "div:contains('Products')").prop({'id' : 'newTarget'}); // adds the ID newTarget to a div that is better to view the products







