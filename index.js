const secondMenu = $('.menu2');
secondMenu.hide();



$('button').on('click', () => {
  $('.menu2').slideDown();
  $('.menu2').toggle();
});

const numbers = $('.numbers');
const letters = $('.letters');
numbers.hide();

$('.numberButton').on('click', () => {
  // $('.letters').html('<p>1 2 3 4 5 6 7 8 9 10</p>');
  letters.hide();
  numbers.show();
});

$('.letterButton').on('click', () => {
  // $('.numbers').html('<p>abc</p>');
  numbers.hide();
  letters.show();
});

// div.after('<p>First</P>');