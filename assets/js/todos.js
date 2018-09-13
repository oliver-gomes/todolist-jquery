//Check off specific todos by clicking
$("ul").on("click", 'li', function () {
  $(this).toggleClass('completed');
});

//click on X to delete
$('ul').on('click', 'span', function () {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add ul
    $('ul').append(`<li><span><i class="fa fa-trash"></i></span>${todoText}</li>`);
  }
})

$('.fa-plus').click(function () {
  $("input[type='text']").fadeToggle();
})